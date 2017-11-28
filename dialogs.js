const {dialog} = require('electron');

module.exports = {
    showMessageBox,
    showOpenDialog,
    showSaveDialog,
    showErrorBox
};

function showMessageBox(browserWindow) {
    // browserWindow is optional - it showing means the dialog will appear on top
    // of window like a modal
    dialog.showMessageBox(browserWindow, {
        message: 'What do you want?',
        detail: 'Here are some extra tidbits',
        buttons: [],
        checkboxLabel: 'Would you like to do it?'
    }, (response, checkboxChecked) => {
        // response is the index of the button selected,
        // checkboxChecked is only used when checkbox is included
        console.log('response', response, checkboxChecked);
    });
}

function showOpenDialog(browserWindow) {
    dialog.showOpenDialog(browserWindow, {
        title: 'open a file!'
    }, (filePaths) => {
        console.log('file paths', filePaths);
    });
}

function showSaveDialog(browserWindow) {
    dialog.showSaveDialog(browserWindow, (filename) => {
        console.log('filename', filename);
    });
}

function showErrorBox() {
    // just takes title and content strings
    dialog.showErrorBox('Ooops!', 'Something went wrong');
}