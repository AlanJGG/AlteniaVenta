// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron')
const path = require('node:path')
// const isDev = require('electron-is-dev')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 1000,
    maxWidth: 1200,
    minHeight: 800,
    maxHeight: 1000,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // const startURL = isDev
  //   ? 'http://localhost:3000'
  //   : `file://${path.join(__dirname, '../build/index.html')}`;

  // import('electron-is-dev').then(({ isDev }) => {
  //   if (isDev) {
  //     mainWindow.loadURL("http://localhost:3000")
  //   } else {
  //     mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
  //   }
  // }).catch(error => {
  //   console.error('Error al cargar el módulo electron-is-dev:', error);
  // });

  
  //production
  mainWindow.loadURL(`file://${path.join(__dirname, 'index.html')}`)
  //dev
  // mainWindow.loadURL("http://localhost:3000")

  const template = [
    {
      label: 'Archivo',
      submenu: [
        {
          label: 'Salir',
          click() {
            app.quit();
          }
        }
      ]
    },
  ];

  // Build menu from template
  const menu = Menu.buildFromTemplate(template);

  // Set as main application menu
  Menu.setApplicationMenu(menu);
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.