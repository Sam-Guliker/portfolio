(function() {
  var app = {
      hoverAnimation: function(li) {
        const tl = new TimelineLite();
        const img = li.querySelector(".portfolio-img");
        const button = li.querySelector(".portfolio-item a");
        const project = li.querySelector(".portfolio-item p");
        const h2 = li.querySelector(".portfolio-item h2");
        const h3 = li.querySelector("h3");
        const test = li.querySelector(".projects img");
        button.addEventListener("mouseover", function() {
          tl.to(
            project,
            0.1,
            { ease: Back.easeOut.config(1.7), x: 20, y: -140 },
            "-=0.1"
          );
          tl.to(
            h3,
            0.3,
            { ease: Back.easeOut.config(1.7), x: -100, y: -120 },
            "-=0.1"
          );
          tl.to(
            img,
            0.5,
            { ease: Back.easeOut.config(1.7), x: -100, y: -100, scale: 1.1 },
            "-=0.1"
          );
          tl.to(
            h2,
            0.6,
            { ease: Back.easeOut.config(1.7), y: -80, x: -10 },
            "-=0.2"
          );
        });
        button.addEventListener("mouseout", function() {
          tl.to(project, 0.4, { ease: Power4.easeInOut, x: 0, y: 0 }, "-=0.1");
          tl.to(h3, 0.4, { ease: Power3.easeInOut, x: 0, y: 0 }, "-=0.2");
          tl.to(
            img,
            0.6,
            { ease: Power1.easeInOut, x: 0, y: 0, scale: 1.1 },
            "-=0.1"
          );
          tl.to(h2, 0.6, { ease: Power2.easeInOut, x: 0, y: 0 }, "-=0.1");
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
    app.hoverAnimation(li);
  });
  app.footerHandler();
})();
