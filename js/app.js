const app = (function() {
  //UI vars
  const menuBtn = document.getElementById("js-menu-button");
  const hamburger = document.querySelector("#js-menu-button img");
  const menu = document.querySelector("#js-menu");
  const menuBg = document.querySelector("#js-menu-bg");
  const error = document.querySelector("#js-error");
  const input = document.querySelector("#js-input");
  const form = document.querySelector("#js-form");

  // INIT LIBRARIES
  var swiper = new Swiper(".swiper-container-1", {
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 3
      }
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });

  //Handles menu
  const menuHandler = () => {
    if (hamburger.getAttribute("src") == "./images/icon-hamburger.svg") {
      hamburger.setAttribute("src", "./images/icon-close.svg");
    } else {
      hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    }
    menu.classList.toggle("is-open");
    menuBg.classList.toggle("is-open");
  };

  //Validates email
  const emailValidator = val => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!re.test(val)) {
      return "Please input a valid email";
    }
    return "";
  };

  const init = () => {
    //Binding event Listeners
    menuBtn.addEventListener("click", e => {
      menuHandler();
    });
    menuBg.addEventListener("click", e => {
      menuHandler();
      console.log(2);
    });
    form.addEventListener("submit", e => {
      error.textContent = emailValidator(input.value);
      if (emailValidator(input.value)) {
        input.style.border = "1px solid hsl(12, 88%, 59%)";
      } else {
        input.style.border = "none";
      }
      input.value = "";
      e.preventDefault();
    });
  };

  return {
    init
  };
})();

app.init();
