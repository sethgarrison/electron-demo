const {remote} = require('electron');
const {BrowserWindow} = remote;
const currentWindow = remote.getCurrentWindow();

const newWindow = document.querySelector('#new-window');

newWindow.addEventListener('click', () => {
    const win = new BrowserWindow({x: 0, y: 0});
    win.loadURL(`file://${__dirname}/index.html`);
});

function onBlur(){
    document.body.style = 'opacity: 0.2;';
}

function onFocus(){
    document.body.style = 'opacity: 1;';
}

function updateWindowInfo () {
    const manageWindowReply = document.getElementById('window-state');
    const message = `Size: ${currentWindow.getSize()} Position: ${currentWindow.getPosition()}`;
    manageWindowReply.innerText = message
}

currentWindow.on('blur', onBlur);
currentWindow.on('focus', onFocus);
currentWindow.on('resize', updateWindowInfo);
currentWindow.on('move', updateWindowInfo);

window.addEventListener('beforeunload', () => {
    currentWindow.removeListener('blur', onBlur);
    currentWindow.removeListener('focus', onFocus);
    currentWindow.removeListener('move', updateWindowInfo);
    currentWindow.removeListener('resize', updateWindowInfo);
});