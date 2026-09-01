// ZAYAN - Website V1
// ZAYAN HERO SLIDER
// ZAYAN — MAIN JAVASCRIPT

document.addEventListener("DOMContentLoaded", () => {

  // HERO SLIDER

  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".slider-dot");

  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");

  let currentSlide = 0;
  let autoSlide;


  function showSlide(index) {

    if (!slides.length) return;

    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }


    slides.forEach((slide) => {
      slide.classList.remove("active");
    });


    dots.forEach((dot) => {
      dot.classList.remove("active");
    });


    slides[currentSlide].classList.add("active");


    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }


  function nextSlide() {
    showSlide(currentSlide + 1);
  }


  function previousSlide() {
    showSlide(currentSlide - 1);
  }


  function startAutoSlide() {

    stopAutoSlide();

    autoSlide = setInterval(() => {
      nextSlide();
    }, 6000);

  }


  function stopAutoSlide() {

    if (autoSlide) {
      clearInterval(autoSlide);
    }

  }


  if (nextButton) {

    nextButton.addEventListener("click", () => {
      nextSlide();
      startAutoSlide();
    });

  }


  if (prevButton) {

    prevButton.addEventListener("click", () => {
      previousSlide();
      startAutoSlide();
    });

  }


  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {
      showSlide(index);
      startAutoSlide();
    });

  });


  const heroSlider = document.querySelector(".hero-slider");

  if (heroSlider) {

    heroSlider.addEventListener("mouseenter", stopAutoSlide);

    heroSlider.addEventListener("mouseleave", startAutoSlide);

  }


  showSlide(0);
  startAutoSlide();

  // HEADER ON SCROLL

  const header = document.querySelector(".site-header");


  function updateHeader() {

    if (!header) return;


    if (window.scrollY > 80) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }


  window.addEventListener("scroll", updateHeader);

  updateHeader();

  // WISHLIST BUTTONS

  const wishlistButtons =
    document.querySelectorAll(".wishlist-button");


  wishlistButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      event.preventDefault();

      button.classList.toggle("active");


      if (button.classList.contains("active")) {

        button.textContent = "♥";

        button.setAttribute(
          "aria-label",
          "Retirer des favoris"
        );

      } else {

        button.textContent = "♡";

        button.setAttribute(
          "aria-label",
          "Ajouter aux favoris"
        );

      }

    });

  });

  // NEWSLETTER

  const newsletterForm =
    document.querySelector(".newsletter-form");


  if (newsletterForm) {

    newsletterForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const emailInput =
          newsletterForm.querySelector(
            'input[type="email"]'
          );


        if (!emailInput) return;


        const email = emailInput.value.trim();


        if (!email) {

          alert(
            "Veuillez entrer votre adresse e-mail."
          );

          return;
        }


        alert(
          "Merci ! Vous êtes maintenant inscrit(e) à l'univers ZAYAN."
        );


        emailInput.value = "";

      }
    );

  }

  // SMOOTH SCROLL FOR INTERNAL LINKS

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');


  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }


      const target =
        document.querySelector(targetId);


      if (!target) return;


      event.preventDefault();


      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });



  // PRODUCT CARD INTERACTION
  // Temporary V1 behaviour

  const productLinks =
    document.querySelectorAll(
      ".product-image-wrapper, .product-cta"
    );


  productLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const href =
        link.getAttribute("href");


      if (href === "#") {

        event.preventDefault();

        console.log(
          "Product page will be added in the next version."
        );

      }

    });

  });



  // CATEGORY / UNIVERSE LINKS
  // Temporary placeholder behaviour

  const placeholderLinks =
    document.querySelectorAll(
      '.category-card[href="#"], .universe-card[href="#"]'
    );


  placeholderLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      event.preventDefault();

      console.log(
        "This page will be connected later."
      );

    });

  });

});