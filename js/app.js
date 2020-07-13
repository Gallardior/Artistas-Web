// Menu en responsive
let menuIcon = document.querySelector('.menu-icon');
let menu = document.querySelector('.menu__list');
let activado;

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('fa-times');
  menuIcon.classList.toggle('active');

  if( menu.style.top == "100px"){
    menu.style.top = "-900px";
  }else{
    menu.style.top = "100px";
  }

});

// Items del menu
let menuList = document.querySelectorAll('.menu__list li a ')
console.log(menuList);

menuList.forEach(element => {

  element.addEventListener("click", () =>{

    menuList.forEach(el => {
      el.classList.remove('active')
    })
    element.classList.toggle('active')

  })

})

// Scroll Spy