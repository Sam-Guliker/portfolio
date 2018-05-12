(function (){

  var app = {

      init: function(){
        const img = document.querySelectorAll('.portfolio-img')
        const button = document.querySelectorAll('.portfolio-item a')
        const project = document.querySelectorAll('.portfolio-item p')
        const h2 = document.querySelectorAll('h2')
        const h3 = document.querySelectorAll('h3')

        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener('mouseover', function(){
              console.log(img)
              img.classList.add('layer-3')
              h2.classList.add('layer-1')
              project.classList.add('layer-2')
              h3.classList.add('layer-4')
            })

            button[i].addEventListener('mouseout', function(){
              img.classList.remove('layer-3')
              h2.classList.remove('layer-1')
              project.classList.remove('layer-2')
              h3.classList.remove('layer-4')
            })
        }



      }
    }

  app.init()

})();
