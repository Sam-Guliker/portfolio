(function() {
  var app = {
      animation: function(li) {
        const tl = new TimelineLite();

        const img = li.querySelector(".portfolio-img");
        const button = li.querySelector(".portfolio-item a");
        const project = li.querySelector(".portfolio-item p");
        const h2 = li.querySelector(".portfolio-item h2");
        const h3 = li.querySelector("h3");

        button.addEventListener("mouseover", function() {
          tl.to(h2, 0.4, { ease: Bounce.easeOut, x: -100 }, "+=0");
          tl.to(img, 0.4, { ease: Bounce.easeOut, scale: 1.4 }, "+=0.1");
          tl.to(project, 0.4, { ease: Bounce.easeOut, x: -170 }, "+=0.1");
          tl.to(h3, 0.4, { ease: Bounce.easeOut, scale: 1.4 }, "+=0.1");
        });

        button.addEventListener("mouseout", function() {
          tl.to(h2, 0.4, { ease: Bounce.easeOut, x: 0 }, "+=0.1");
          tl.to(img, 0.4, { ease: Bounce.easeOut, scale: 1 }, "+=0.1");
          tl.to(project, 0.4, { ease: Bounce.easeOut, x: 0 }, "+=0.1");
          tl.to(h3, 0.5, { ease: Bounce.easeOut, scale: 1 }, "+=0.1");
        });
      },

      footerHandler: function() {
        const email = document.querySelector(".email");
        const github = document.querySelector(".github");

        email.addEventListener("click", function() {
          window.open("mailto:samguliker@hotmail.com");
        });

        github.addEventListener("click", function() {
          window.open("https://github.com/Sam-Guliker", "_blank");
        });
      }
    },
    lis = document.querySelectorAll(".portfolio-item");

  lis.forEach(function(li) {
    app.animation(li);
  });

  app.footerHandler();
})();
