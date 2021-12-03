const nav=document.querySelector('nav');

let navOffsetTop=nav.offsetTop;
window.addEventListener('scroll',function(){
    let scroll=window.scrollY;
    if(scroll>navOffsetTop){
       nav.classList.add('fixed-menu');
    }else{
        nav.classList.remove('fixed-menu');
    }
})