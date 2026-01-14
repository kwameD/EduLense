const { app, BrowserWindow } = require("electron");

function createWindow(){
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadURL("data:text/html,<h1 style= 'text-align:center;margin-top:60px;'>Hello Electron!<h1>")
}
app.whenReady().then(createWindow);

app.om("window-all-closed", () => {
  if(process.platform !== "darwin") app.quit();
});
