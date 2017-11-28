// here we are adding the pid to demonstrate that each
// browser has a unique renderer process
const pidEl = document.querySelector('#pid');
pidEl.innerText = process.pid;