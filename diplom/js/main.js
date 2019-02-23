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