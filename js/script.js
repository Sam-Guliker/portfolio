(function() {
  var app = {
    animation: function() {
      const img = document.querySelector(".portfolio-img");
      const button = document.querySelector(".portfolio-item a");
      const project = document.querySelector(".portfolio-item p");
      const h2 = document.querySelector(".portfolio-item h2");
      const h3 = document.querySelector("h3");
      console.log(h2);

      button.addEventListener("mouseover", function() {
        img.classList.add("layer-3");
        h2.classList.add("layer-1");
        project.classList.add("layer-2");
        h3.classList.add("layer-4");
      });

      button.addEventListener("mouseout", function() {
        img.classList.remove("layer-3");
        h2.classList.remove("layer-1");
        project.classList.remove("layer-2");
        h3.classList.remove("layer-4");
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
  };

  app.animation();
  app.footerHandler();
})();
