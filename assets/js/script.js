const notifNumber = document.querySelector('.notification__number span'),
      markRead = document.querySelector('.notification__mark-read'),
      notifItems = document.querySelectorAll('.notification-item'),
      notifList = document.querySelector('.notification-list');

notifItems.forEach(item => {
    item.addEventListener('click', (e) => {
        removeSelectionAndCheckNum(e);
    }); 
});

markRead.addEventListener('click', () => {
    removeAllNotif();
});


function removeSelectionAndCheckNum(e){
    let target = e.target;

    let element = target.closest('.notification-item');
    element.classList.toggle('notification-item--active');

    const checkNum = document.querySelectorAll('.notification-item--active').length;
    notifNumber.textContent = checkNum;
}

function removeAllNotif(){
    notifItems.forEach(item => {
        item.classList.remove('notification-item--active');
        notifNumber.textContent = 0;
    });
}



