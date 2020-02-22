const electron = require("electron");
const { app, BrowserWindow, ipcMain } = electron;

const path = require("path");
const fs = require("fs");
const isDev = require("electron-is-dev");

let mainWindow;
require("electron-reload")(__dirname);

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:1234"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
};

ipcMain.on("test", (event, data) => {
  console.log(data);
});

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
