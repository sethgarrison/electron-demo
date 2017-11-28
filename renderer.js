const {ipcRenderer} = require('electron');
require('devtron').install();
const sendMessageButton = document.querySelector('#show-menu');

sendMessageButton.addEventListener('click', ()=> {
    ipcRenderer.send('show-menu');
});