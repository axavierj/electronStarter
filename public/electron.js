const electron = require("electron");
const { app, BrowserWindow, Menu } = electron;

const path = require("path");
const isDev = require("electron-is-dev");

let mainWindow;
if (isDev) {
  require("electron-reload")(__dirname);
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 912,
    height: 1368,
    webPreferences: {
      nodeIntegration: true
    }
  });
  Menu.setApplicationMenu(false)
  mainWindow.loadURL(
    isDev
      ? "http://localhost:1234"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
};

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
