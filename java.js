

scrollToBottomBtn.addEventListener("click", function() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth"
  });
});


function slider(anything){
    document.querySelector('.one').src = anything;
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

var scrollToTopBtn = document.querySelector(".scroll-to-bottom");

window.addEventListener("scroll", function() {
  // tombol Scroll to Top akan muncul setelah pengguna menggulir ke bawah
  if (window.pageYOffset < 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    bottom: 0,
    behavior: "smooth"
  });
});
