(function (){

  var app = {

      init: function(){
        const img = document.querySelector('.portfolio-img')
        const button = document.querySelector('.portfolio-item a')
        const project = document.querySelector('.portfolio-item p')
        const headline = document.querySelector('.portfolio-item h2')
        const h1 = document.querySelector('.portfolio-item h1')

        button.addEventListener('mouseover', function(){
          img.classList.add('layer-3')
          headline.classList.add('layer-1')
          project.classList.add('layer-2')
          h1.classList.add('layer-4')
        })

        button.addEventListener('mouseout', function(){
          img.classList.remove('layer-3')
          headline.classList.remove('layer-1')
          project.classList.remove('layer-2')
          h1.classList.remove('layer-4')
        })

      }
    }

  app.init()

})();
