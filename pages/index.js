document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
      document.body.classList.remove('fade');
    }, 230);
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
          });
       });
    });
 });