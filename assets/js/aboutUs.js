
let btns = document.querySelectorAll(".item");
btns.forEach(element => {
    element.onclick = () => {
        element.classList.toggle("active");
    } 
});

let btn1 = document.querySelector(".btn");
let taskbar = document.querySelector(".sidebar");

function expandTaskbar(){
    taskbar.classList.toggle('active');
}

let btnExpand = document.querySelector(".btn-expand");
function toggleFullScreen (){
    document.documentElement.requestFullscreen();
}

let btnFlag = document.querySelector(".btn-flag");
let flagSection = document.querySelector(".flags-section");

btnFlag.onclick = function (e){
  flagSection.classList.toggle("active");
}

let btnAccount = document.querySelector(".btn-user");
let accountSection = document.querySelector(".account-section");

btnAccount.onclick = function (e){
  accountSection.classList.toggle("active");
}
