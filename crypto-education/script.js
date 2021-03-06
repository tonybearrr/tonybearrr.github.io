window.addEventListener('resize', resize);

let openModalBtn = document.querySelector('.registration-btn');
let modal = document.querySelector('.modal');
let xBtn = document.querySelector('.xbtn');

openModalBtn.addEventListener('click', () => {
    if(modal.style.display === 'block'){
        modal.style.display = 'none';
    }else{
        modal.style.display = 'block'
    }
});


xBtn.addEventListener('click', function(){
    console.log();
    modal.style.display = 'none';
})


let burgerBtn = document.querySelector('.burger-menu');
let burgerBtnClose = document.querySelector('.burger-close');
let burgerMenu = document.querySelector('.burger-nav');

function resize(){
    if(document.documentElement.clientWidth >= 860){
        burgerMenu.style.display = 'none';
    }
  }
burgerBtn.addEventListener('click', function(){
    if(burgerMenu.style.display === 'none'){
        burgerMenu.style.display = 'block'
        burgerBtn.setAttribute('src', './img/close-button.svg')
    }else{
        burgerMenu.style.display = 'none';
        burgerBtn.setAttribute('src', './img/menu.svg')
    }
})

window.onscroll = function() {checkOffset()};

let header = document.querySelector("#menu");
let logo = document.querySelector(".logo")
let sticky = header.offsetTop + 20;

function checkOffset() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    logo.classList.add("logo-sticky")
  } else {
    header.classList.remove("sticky");
    logo.classList.remove("logo-sticky")

  }
}