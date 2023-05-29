const { join } = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

const isDev = !app.isPackaged;
console.log(app.getAppPath());

app.whenReady().then(() => {
  createWindow();

  // app.on("activate", () => {
  //   if (BrowserWindow.getAllWindows().length === 0) {
  //     createWindow();
  //   }
  // });
});

function createWindow() {
  const window = new BrowserWindow({
    width: 1300,
    height: 768,
    webPreferences: {
      // devTools: false,
      webSecurity: false,
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
    window.loadFile(join(__dirname, "..", "build", "index.html"));
    // window.loadURL(
    //   url.format({
    //     pathname: join(__dirname, "build", "index.html"), // important
    //     protocol: "file:",
    //     slashes: true,
    //     // baseUrl: 'build'
    //   })
    // );
  }

  window.on("ready-to-show", () => {
    window.show;
  });

  // Show DevTools
  if (isDev) {
    window.webContents.openDevTools();
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// IPC Events
ipcMain.handle("app-version", () => app.getVersion());
