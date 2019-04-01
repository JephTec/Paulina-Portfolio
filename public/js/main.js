// const boxes = document.querySelectorAll(".box");
// const display = document.getElementsByClassName("display-bg")
//
//
//
//


// function showBlog (){
//   this.classList.toggle("d-none")
// }
//
// showBlog().bind(display)

//
//
// boxes.forEach(display, (box, index, array)=>{
//   box.addEventListener('click', (event)=>{
//        display[index].classList.toggle("d-none");
//   });
// });

var portfolio = document.getElementById("portfolio");
var show_portfolio = document.getElementById("show-portfolio");
var blog = document.getElementById("blog");
var show_blog = document.getElementById("show-blog");
var products = document.getElementById("products");
var show_products = document.getElementById("show-products");
var contact = document.getElementById("contact");
var show_contact = document.getElementById("show-contact");
var side_projects = document.getElementById("side-projects");
var show_side_projects = document.getElementById("show-side-projects");
var about_me = document.getElementById("about-me");
var show_about_me = document.getElementById("show-about-me");
var showcase = document.querySelectorAll('.display-bg');


function clear(){
  for (var i=0; i<showcase.length; i++) {
  showcase[i].classList.add('d-none');
  };
};


portfolio.addEventListener("click", function(event){
  clear();
  show_portfolio.classList.toggle("d-none");
});

blog.addEventListener("click", function(event){
  clear();
  show_blog.classList.toggle("d-none");
});
products.addEventListener("click", function(event){
  clear();
  show_products.classList.toggle("d-none");
});
contact.addEventListener("click", function(event){
  clear();
  show_contact.classList.toggle("d-none");
});
side_projects.addEventListener("click", function(event){
  clear();
  show_side_projects.classList.toggle("d-none");
});
about_me.addEventListener("click", function(event){
  clear();
  show_about_me.classList.toggle("d-none");
});


var swiper = new Swiper('.swiper-container', {
  effect: 'flip',
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
