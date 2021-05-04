$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	dots:false,
  	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    autoplay:true,
    loop:true,
    autoplayTimeout:2000
  });

  
  	$('#nav ul li').hover(
       function(){ $(this).children('.drop-menu').addClass('show') },
       function(){ $(this).children('.drop-menu').removeClass('show') },
);
  		$('.drop-menu li').hover(
       function(){ $(this).children('.drop_submenu').addClass('show') },
       function(){ $(this).children('.drop_submenu').removeClass('show') },
);

//   $('#nav ul li').hover(
// function(){
//   alert('Вы попали на территорию элемента "foo", известную своей валидной версткой'+ 
//         'и наличием диких обработчиков событий.');
// },
// function(){
//   alert('Вы покинули территорию элемента "foo". Мы будем рады видеть вас снова.');
// });
});


let mobileMenuBtn = document.querySelector('.header-mobile-menu');
let mobileMenuList = document.querySelector('.mobile-menu-list');
let isOpen = false;

mobileMenuBtn.addEventListener('click',function(){
	if(!isOpen){
	mobileMenuList.style.top = '100px';
	mobileMenuList.style.opacity = '1';
	isOpen = true;
} else{
	mobileMenuList.style.top = '-25px';
	mobileMenuList.style.opacity = '0';
	isOpen = false;
}
})



