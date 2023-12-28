
var icon = document.querySelector('.burger-button');
console.log(icon)
var menu = document.querySelector('.burger-menu');
console.log(menu)
var body = document.querySelector('body');
console.log(body)

icon.onclick = function() {
  icon.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
  };

    /*  document.addEventListener('DOMContentLoaded', function() {
    // Функція для закриття pop-up вікна і повернення на головну сторінку
    function closePopupAndReturnHome() {
      let popup = document.getElementById('popup');
      console.log(popup);

      popup.style.display = 'none';
      window.location.href = 'index.html'; // Замініть 'index.html' на шлях вашої головної сторінки
    }

 // Додаємо слухача подій для popap-close-svg
    let closeBtn = document.querySelector('div.popup-header img.popup-close-svg');
    console.log(closeBtn);
   
    if (closeBtn) {
      
      closeBtn.addEventListener('click', function() {
        closePopupAndReturnHome();
      });
    }

   // Додаємо слухачів подій для послуг, які виводять pop-up вікно
    let serviceLinks = document.querySelectorAll('.services-img-container a');
    console.log(serviceLinks);

    serviceLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        let popup = document.getElementById('popup');
        console.log(popup);
        popup.style.display = 'block';
      });
    }); 
  }); */
