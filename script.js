const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('li');

window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
   const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop-sectionHeight/3)){
      current = section.getAttribute('id');
    }
  })

  navLi.forEach(li =>{
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active');
    }
  })
})

$(document).ready(function(){
  $('.sidenav').sidenav();
});

  $(document).ready(function(){
    $('.carousel').carousel();
    setInterval(function(){
        $('.carousel').carousel('next');
        },2000);
  });

  