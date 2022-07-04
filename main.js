window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scroll-nav", window.scrollY > 500);
})