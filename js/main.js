const mySwiper = new Swiper(".swiper-container", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button-next",
    prevEl: ".slider-button-prev"
  }
});

// Cart
const buttonCart = document.querySelector(".button-cart");
const modalCart = document.querySelector("#modal-cart");
const modalClose = modalCart.querySelector(".modal-close");

const openModal = () => {
  modalCart.classList.add("show");
};
const closeModal = () => {
  modalCart.classList.remove("show");
};

buttonCart.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// Cart DZ
modalCart.addEventListener("click", event => {
  let target = event.target;
  if (target.classList.contains("overlay")) {
    closeModal();
  }
});

// Scroll smooth
const scrollLinks = document.querySelectorAll("a.scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });
});
