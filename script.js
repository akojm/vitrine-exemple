/*** VARIABLES ***/
/**** HEADER ****/
var titleSite = document.querySelector(".title_site");
var slogan = document.querySelector(".slogan");
/**** BODY ****/
const bodyPage = document.querySelector("body")
/**** BODY ****/
var iconDown = document.querySelector(".header_arrow_icon_down")
var iconUp = document.querySelector(".main_arrow_icon_up")
 /***  NAVBAR ***/
var navBar = document.querySelector(".navbar");
var navItems = document.querySelector(".navList");
/*** LINK ***/
var linkNavbar = document.querySelectorAll(".link");
var linkNavResponsive = document.querySelectorAll(".linkLateral")
var iconActive = document.getElementById("cross_nav");
 /*** BTN SCROLL ***/
var btnOpen = document.getElementById("open");
var btnClosed = document.getElementById("closed");
 /*** MENU RESPONSIVE ***/
 var navbarResponsive = document.querySelector(".responsive_navbar");
 var navbarResponsiveContent = document.querySelector(".responsive_navbar_content");
var menuResponsive = document.getElementById("navLateral");
var menuLateral = document.querySelector(".menu_lateral")
var titleResponsive = document.querySelector(".title_responsive")
var iconTitle = document.querySelector(".cross_title_responsive")
 /*** OVERLAY ***/
var overlay = document.getElementById("overlay");
 /*** BTN POPUP ***/
var popUp= document.getElementById("pop-up");
var btnPop = document.getElementById("closed_pop-up");
  /*** MODAL ***/
var help = document.getElementById('help');
var mentionsLink = document.getElementById("ml");
var modal = document.querySelector(".modal_help");
var btnModal = document.getElementById("closed_help");
var mentionsLegales =document.querySelector(".mentions_legales")
var btnMentions = document.getElementById("closed_mentions");

console.log(ml);

// SCROLL SHOW ICONS //
window.addEventListener('scroll', ()=>{
  const {scrollTop} = document.documentElement;
if (scrollTop> 70) {
    iconDown.style.display ='none'    
}else{
    iconDown.style.display ='block' 
}
  //console.log(scrollTop);
})
window.addEventListener('scroll', ()=>{
  const {scrollTop} = document.documentElement;
if (scrollTop > 80) {
    iconUp.style.display ='block';        
}else{
    iconUp.style.display ='none';
}
  
})
// SCROLL SHOW NAVBAR //
window.addEventListener('scroll', ()=>{
  const {scrollTop} = document.documentElement;
if (scrollTop > 125) {
    navBar.classList.add("navbar_active"); 
    navbarResponsive.classList.add("navbar_responsive_show");
    titleResponsive.classList.add("title_responsive_show");
    iconTitle.classList.add("strong_show");
}else{
    navBar.classList.remove("navbar_active"); 
    navbarResponsive.classList.remove("navbar_responsive_show");
    titleResponsive.classList.remove("title_responsive_show")
    iconTitle.classList.remove("strong_show");
       
}
if (scrollTop > 125) {
   linkNavbar.forEach(link => {
    link.classList.add("navbar_active_link")
    link.classList.add("navbar_active_link_hover")
   });
}else{
  linkNavbar.forEach(link => {
    link.classList.remove("navbar_active_link")
    link.classList.remove("navbar_active_link_hover")

   });
}
})
window.addEventListener('scroll', ()=>{
  const {scrollTop} = document.documentElement;
if (scrollTop > 80) {
    menuResponsive.style.display ='none';
    btnClosed.style.display= 'none';
    btnOpen.style.display ='block';
    overlay.style.display ='none' 
}

})
// SCROLL SHOW POPUP//
window.addEventListener('scroll', ()=>{
  const {scrollTop} = document.documentElement;
if (scrollTop > 500) {
    popUp.classList.add('pop-up-in')
}else{
  popUp.classList.remove('pop-up')
}

})

// FUNCTION //




// EVENT //
linkNavResponsive.forEach(el => {
  el.addEventListener('click',()=>{
    bodyPage.style.overflow = "scroll"
  })
});

iconDown.addEventListener('click', ()=>{
    window.scroll(
       {
        top : 524,
        behavior :"smooth"
       } 
    )
})
iconUp.addEventListener('click', ()=>{
    window.scroll(
       {
        top : 0,
        behavior :"smooth"
       } 
    )
})

btnOpen.addEventListener('click', ()=>{
menuResponsive.style.display = 'block';
btnOpen.style.display ='none';
btnClosed.style.display = 'block';
overlay.style.display='block';
bodyPage.style.overflow = 'hidden'


//bodyPage.style.overflow = 'hidden'

})

btnClosed.addEventListener('click', ()=>{
menuResponsive.style.display = 'none';
btnOpen.style.display ='block';
btnClosed.style.display = 'none';
overlay.style.display='none';
bodyPage.style.overflow = 'scroll'



//bodyPage.style.overflow = 'scroll'
})

btnPop.addEventListener('click', ()=>{
popUp.classList.add('pop-up-out')
})

/**** MODALS ****/
help.addEventListener('click',()=>{
  modal.classList.add('modal_show');
  overlay.style.display='block';
  popUp.style.display = 'none';
  bodyPage.style.overflow = 'hidden';
  navbarResponsive.classList.add('overlay_show');
  navbarResponsiveContent .classList.add('overlay_show');


  
})
btnModal.addEventListener('click',()=>{
  modal.classList.remove('modal_show')
  overlay.style.display='none';
  bodyPage.style.overflow = 'scroll';
  navbarResponsive.classList.remove('overlay_show');
  navbarResponsiveContent .classList.remove('overlay_show');
})
mentionsLink.addEventListener('click',()=>{
  mentionsLegales.classList.add('show_mentions');
  overlay.style.display='block';
  popUp.style.display = 'none';
  bodyPage.style.overflow = 'hidden';
  navbarResponsive.classList.add('overlay_show');
  navbarResponsiveContent .classList.add('overlay_show');


  
})
btnMentions.addEventListener('click',()=>{
  mentionsLegales.classList.remove('show_mentions')
  overlay.style.display='none';
  bodyPage.style.overflow = 'scroll';
  navbarResponsive.classList.remove('overlay_show');
  navbarResponsiveContent .classList.remove('overlay_show');
})


// ANIMATION ANIME.JS //
window.onload=()=>{
  anime({
    targets : '.title_site',
    translateX : window.innerWidth/2 - titleSite.clientWidth /2 ,
    duration : 3000
  })
  anime({
    targets : '.slogan',
    translateX : window.innerWidth/2 - titleSite.clientWidth /2 ,
    direction : 'reverse',
    duration : 3000
  })
  /*
  function animeTitle() {
    anime({
      targets : '.title_site',
      translateX : window.innerWidth/2 - titleSite.clientWidth /2 ,
      duration : 100
    })
  }
  /*
  animeTitle();
  function animeSlogan() {
    anime({
      targets : '.slogan',
      translateX : window.innerWidth/2 - titleSite.clientWidth /2 ,
      direction : 'reverse',
      duration : 100
    })
  }
  animeSlogan();
*/
  }


