// burger

(function () {

    var burger = {
        navToggle: document.querySelector('.burger'),
        nav: document.querySelector('nav'),

        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('opened');
            this.nav.classList.toggle('opened');
        }
    };

    burger.navToggle.addEventListener('click', function(e) { burger.doToggle(e); });
    burger.nav.addEventListener('click', function(e) { burger.doToggle(e); });
}());


// slider


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('slider__item');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1 ) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
    }

    slides[slideIndex - 1].style.display = "flex";

}

// image gallery


function itemsFilter(e) {
    var selectedFilter = e.target.dataset.filterTarget;
    
   if(selectedFilter == 'all') {
     portfolio__item.forEach(function(item) {
       item.classList.remove('category_hide');
     });
     
   } else {
     portfolio__item.forEach(function(item) {
       item.classList.remove('category_hide');
     });
     
     var filteredItems = document.querySelectorAll('.portfolio__item:not([data-filter="' + selectedFilter + '"])');
     
     filteredItems.forEach(function(item) {
       item.classList.add('category_hide');
     })
   }
    
  }
  
  var portfolio__item = document.querySelectorAll('.portfolio__item');
  
  var filterButtons = document.querySelector('#myBtnContainer');
  
  filterButtons.addEventListener('click', itemsFilter);