const { join } = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

const isDev = !app.isPackaged;
console.log(app.getAppPath());

function createWindow() {
  const window = new BrowserWindow({
    width: 1300,
    height: 768,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      preload: join(__dirname, "preload.cjs"),
    },
  });

  // Load url in development
  if (isDev) {
    window.loadURL("http://localhost:5657");
  } else {
    win.loadFile("index.html");
  }

  window.on("ready-to-show", () => {
    window.show;
  });

  // Show DevTools
  if (isDev) {
    window.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC Events
ipcMain.handle("app-version", () => app.getVersion());
