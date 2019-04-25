import {app, BrowserWindow, BrowserWindowProxy} from 'electron'
import {join} from 'path'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'

const ROOT = __dirname
const DEBUG = process.execPath.includes('electron.exe')
global['ROOT'] = ROOT

app.on('ready', ()=>{
  if(DEBUG){
    BrowserWindow.addDevToolsExtension(join(ROOT,'..', 'node_modules', 'vue-devtools','vender'))
  }
  const w = new BrowserWindow({
    frame:false,
    fullscreen:true,
    transparent:true,
    alwaysOnTop:true,
    webPreferences:{
      nodeIntegration:true
    }
  })
  const html = join(ROOT,'./index.html')
  w.loadFile(html)
  w.on('close', app.quit.bind(app))
  if(DEBUG){
    w.webContents.openDevTools()
  }
})