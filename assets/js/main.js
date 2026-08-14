  const header = document.getElementById("mainHeader");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
  const bookSwiper = new Swiper(".bookSwiper", {
  slidesPerView: 5,
  spaceBetween: 24,

  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});

const testimonialSwiper = new Swiper(".testimonialSwiper", {

        loop: true,

        slidesPerView: 3,

        spaceBetween: 24,

        speed: 700,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },

        breakpoints: {

            /* Mobile */
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },

            /* Tablet */
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            /* Desktop */
            992: {
                slidesPerView: 3,
                spaceBetween: 24,
            }

        }

    });
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".evermark-stats");
  const counters = document.querySelectorAll(".evermark-stats .odometer");

  if (!section) return;

  let started = false;

  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting && !started) {
        started = true;

        counters.forEach(function (counter) {
          counter.innerHTML = counter.dataset.value;
        });

        observer.disconnect();
      }
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(section);
});