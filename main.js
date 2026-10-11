const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,height: 600,minWidth: 400,minHeight: 300,resizable: true,fullscreen: false,kiosk: false,transparent: false,frame: true,show: true,alwaysOnTop: false,skipTaskbar: false,autoHideMenuBar: false,thickFrame: true,darkTheme: false,title: "GCSE paper maker",backgroundColor: "#ffffff",webPreferences: {nodeIntegration: true,contextIsolation: false,webgl: true,sandbox: false,enableRemoteModule: true,devTools: false}
    })

    win.loadFile('index.html')
    
    // Set zoom factor
    win.webContents.setZoomFactor(1.0)
    
    // Open DevTools if enabled
    if (false) {
        win.webContents.openDevTools()
    }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
