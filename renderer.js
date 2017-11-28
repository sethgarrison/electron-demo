const {ipcRenderer} = require('electron');
const sendMessageButton = document.querySelector('#send-message');
const messageResponseEl = document.querySelector('#message-response');

sendMessageButton.addEventListener('click', ()=> {
    ipcRenderer.send('render-message');
});

ipcRenderer.on('main-message', (event, message) => {
    messageResponseEl.innerText = message;
});