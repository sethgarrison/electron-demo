// query dom as usual
const versionEl = document.querySelector('#version');
// use node's process variable to grab version
versionEl.innerText = process.versions.electron;