const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

// Depuración
console.log("__dirname:", __dirname);

const serverPath = path.join(__dirname, "server.js");
console.log("serverPath:", serverPath);
require(serverPath);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    resizable: true,
    minWidth: 1000,
    minHeight: 750,
    minimizable: false,
    maximizable: true,
    fullscreenable: true,
    icon: path.join(__dirname, "public/altenia-logo.png"),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  console.log("icon path:", path.join(__dirname, "public/altenia-logo.png"));
  console.log("preload path:", path.join(__dirname, "src/preload.js"));

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "build/index.html")}`
  );

  console.log(
    "load URL:",
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "build/index.html")}`
  );

  mainWindow.removeMenu();

  if (isDev) {
    mainWindow.webContents.on("before-input-event", (_, input) => {
      if (input.type === "keyDown" && input.key === "F12") {
        mainWindow.webContents.toggleDevTools();
      }
    });
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
