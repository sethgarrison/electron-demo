const {ipcRenderer} = require('electron');
const sendMessageButton = document.querySelector('#show-menu');

sendMessageButton.addEventListener('click', ()=> {
    ipcRenderer.send('show-menu');
});