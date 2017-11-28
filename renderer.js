// we require remote from electron here to access
// properties and methods only available on main process, like BrowserWindow, for instance
const {remote} = require('electron');
const {BrowserWindow} = remote;

const newWindow = document.querySelector('#new-window');

newWindow.addEventListener('click', () => {
    const win = new BrowserWindow({x: 0, y: 0, show: false});
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('ready-to-show', () => {
        win.show();
    });
});