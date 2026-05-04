document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".itv-header-lp");
  const burgerBtn = document.querySelector(".itv-header-lp__burger");
  if (header && burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      header.classList.toggle("is-open");
      if (header.classList.contains("is-open")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });
  }
});
