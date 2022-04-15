(() => {
    const refs = {
      openMenuBtn: document.querySelector(".menu-btn-open"),
      closMenulBtn: document.querySelector(".menu-btn-close"),
      menu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();