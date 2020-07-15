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

    // Cerrar menu al hacer click en un item
    menu.style.top = "-900px";
    menuIcon.classList.toggle('fa-times')

  })

})

// Scroll Spy


const navbar = document.querySelector('.menu');
console.log(navbar)
const scrollspy = new VanillaScrollspy(navbar);
scrollspy.init();

// Galeria de Proyectos

  // Abrir IMAGEN
let gallery = document.querySelectorAll('.projects__gallery img')
let modal = document.getElementById('modal')
let modalImg = document.querySelector('.modal img')
let btnNext = document.querySelector('.modal__next')
let btnPrev = document.querySelector('.modal__prev')

  // ABRIR IMAGEN
for (let i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("click", () => {
    // Abrir imagen
    modal.style.left = "0";
    modal.style.background = "rgba(0,0,0, .7)";
    modalImg.setAttribute('src', gallery[i].src);

    // Boton Next
    btnNext.addEventListener("click", () => {
      if(gallery[i].id === "final"){
        i = -1;
      }
      i++
      modalImg.setAttribute('src', gallery[i].src);
    })
    // Boton Prev
    btnPrev.addEventListener("click", () => {
      if(gallery[i].id === "inicio"){
        i = 10;
      }
      i--
      modalImg.setAttribute('src', gallery[i].src);
    })
  })

}

  // Salir de la IMAGEN
let btnExit = document.querySelector('.modal__btn')

btnExit.addEventListener('click', () => {
    modal.style.left = "-100%";
    modal.style.background = "transparent";
})
