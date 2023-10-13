const { ipcRenderer, contextBridge } = require("electron");
const { Database } = require("doculite");
const { path } = require("node:path");

// Creates sqlite.db file in the cwd
const db = new Database();
console.log({ db });

let todos = [];

const API_URL = "http://localhost:5000";

const getTodos = async () => {
  const response = await fetch(`${API_URL}/todos`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  todos.push(...data);
  todos = todos;
  return data;
};

const WINDOW_API = {
  AppVersion: () => ipcRenderer.invoke("app-version"),
};

// Window API access: window.api
contextBridge.exposeInMainWorld("api", WINDOW_API);
