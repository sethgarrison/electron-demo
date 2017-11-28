// we require remote from electron here to access
// properties and methods only available on main process, like dialog, for instance
const {remote} = require('electron');
const {dialog} = remote;

const saveButton = document.querySelector('#save-dialog');

saveButton.addEventListener('click', () => {
    // now we can use the dialog methods as we do in the main process
    dialog.showSaveDialog((filename) => {
        console.log('filename', filename)
    });
});