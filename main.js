const { app, BrowserWindow, Menu } = require("electron");
const path = require("node:path");
const isDev = require("electron-is-dev");

require('./server');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 750,
    resizable: true,
    minWidth: 1000,
    // maxWidth: 1000,
    minHeight: 750,
    // maxHeight: 750,
    minimizable: false,
    maximizable: true,
    fullscreenable: true,
    icon: "./public/altenia-logo.png",
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "./build/index.html")}`,
  );

  // const template = [
  //   {
  //     label: "Archivo",
  //     submenu: [
  //       {
  //         label: "Salir",
  //         click() {
  //           app.quit();
  //         },
  //       },
  //     ],
  //   },
  // ];


  //Remove menu
  mainWindow.removeMenu();
  
  // Open the DevTools.
  if (isDev)
    mainWindow.webContents.on("before-input-event", (_, input) => {
      if (input.type === "keyDown" && input.key === "F12") {
        mainWindow.webContents.toggleDevTools();
      }
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
