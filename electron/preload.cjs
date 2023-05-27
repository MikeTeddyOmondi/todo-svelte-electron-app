const { ipcRenderer, contextBridge } = require("electron");

const WINDOW_API = {
  AppVersion: () => ipcRenderer.invoke("app-version"),
};

// Window API access: window.api
contextBridge.exposeInMainWorld("api", WINDOW_API);
