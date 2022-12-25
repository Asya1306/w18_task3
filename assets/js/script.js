"use strict";
let massiveOfComments = []; // массив с будущими комментариями 
let massiveOfUsersName = []; // массив с именами пользователей
let massiveOfUsersIcon = []; // массив с аватарками пользователей

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('name') != null) {
        document.getElementById('name').value = localStorage.getItem('name');
    }
    if (localStorage.getItem('icon') != null) {
        document.getElementById('icon').value = localStorage.getItem('icon');
    }
});

// добавление новых комментариев в массив 
function addCommintsInMassive() {
    let inputResult = document.getElementById('comment').value; //комментарии
    let inputResultName = document.getElementById('name').value; // имя пользователя 
    let iconLink = document.getElementById('icon').value; // ссылка на картинку
    let addUserName = localStorage.setItem('name', inputResultName); // сохраняем имя пользователя
    let addUserIcon = localStorage.setItem('icon', iconLink); // сохраняем аватарку пользователя
    // проверка на пустые строки
    if (inputResult == '' && inputResultName == '' && iconLink == '') {
        alert('Строки пусты!');
    } else if (inputResultName == '' && inputResult != '' && iconLink != '') {
        inputResultName = 'Гость';
        massiveOfUsersName.push(inputResultName);
        massiveOfComments.push(inputResult);
        massiveOfUsersIcon.push(iconLink);
    } else if (inputResultName != '' && inputResult == '' && (iconLink != '' || iconLink == '')) {
        alert('Напишите комментарий!');
    } else if (inputResultName != '' && inputResult != '' && iconLink != '') {
        massiveOfUsersName.push(inputResultName);
        massiveOfComments.push(inputResult);
        massiveOfUsersIcon.push(iconLink);
    }
    console.log(massiveOfUsersIcon);
    checkSpam(); // прячем спам
    showComments(); // выводим комментарии
}


// добавление комментариев на страницу
function showComments() {
    let commentsArea = "";
    for (let i = 0; i < massiveOfComments.length; i++) {
        commentsArea += `<div class="comment_body"><div class="header_row"><img class='user_img' src="${massiveOfUsersIcon[i]}"></div><div class="footer_row"><p class='comment_user_name'>${massiveOfUsersName[i]}</p>${massiveOfComments[i]}</div></div> `;
    }
    document.getElementById('usersCommentsArea').innerHTML = commentsArea;
}

// поиск спама 
function checkSpam() {
    for (let i = 0; i < massiveOfComments.length; i++) {
            let newElementOfMassive = massiveOfComments[i].replace(/viagra/ig, '***');
            massiveOfComments[i] = newElementOfMassive;
            let hideXXX = newElementOfMassive.replace(/xxx/ig, '***');
            massiveOfComments[i] = hideXXX;
    }
}


