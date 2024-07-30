document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-custom');
    const stickyOffset = navbar.offsetTop;

    function handleScroll() {
      if (window.pageYOffset >= stickyOffset) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }

    window.addEventListener('scroll', handleScroll);
  });