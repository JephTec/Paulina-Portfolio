const portfolio = document.getElementById("portfolio");
const showPortfolio = document.querySelector(".showPortfolio");
const blog = document.getElementById("blog");
const showBlog = document.querySelector(".showblog");
const showcase = document.querySelectorAll('#showcase');


function clear(){
  for (var i=0; i<showcase.length; i++) {
  showcase[i].classList.add('d-none');
  };
};


portfolio.addEventListener("click", function(event){
  clear();
  showPortfolio.classList.toggle("d-none");
});

blog.addEventListener("click", function(event){
  clear();
  showBlog.classList.toggle("d-none");
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
