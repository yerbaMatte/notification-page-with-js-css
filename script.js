'use strict';
let c = 0;
// notification counter
const notificationCounter = document.querySelector('.no-counter');
// select all postbox
const postBoxes = document.querySelectorAll('.postbox');
const markAll = document.querySelector('.btn-mark-read');
//
postBoxes.forEach((p) => {
  p.classList.contains('new') && c++;
  notificationCounter.textContent = c;
  c > 0 && notificationCounter.classList.add('noti');
});
//
markAll.addEventListener('click', function () {
  postBoxes.forEach((p) => {
    p.classList.remove('new');
    notificationCounter.classList.remove('noti');
    notificationCounter.textContent = c;
    c = 0;
  });
});
