document.addEventListener('DOMContentLoaded', function () {
    // Функция для изменения цвета фона элемента на заданный цвет 
    function changeColor(element, color) {
        element.style.transition = 'background-color 3s';
        element.style.backgroundColor = color;
        setTimeout(function () {
            element.style.transition = '';
        }, 3000);
    }

    var menuItems = document.querySelectorAll('menu ul li');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            menuItems.forEach(function (menuItems) {
                menuItems.classList.remove('selected');
                changeColor(menuItems, 'red');
            });

            item.classList.add('selected');
            changeColor(item, '#ffaa00')
        });
    });


    // Обработка формы
  var resetButton = document.querySelector('input[type="reset"]');
  var submitButton = document.querySelector('input[type="submit"]');
  var formFields = document.querySelectorAll('form input[type="text"]');
  
  resetButton.addEventListener('click', function() {
    if (confirm('Вы уверены, что хотите сбросить данные?')) {
      formFields.forEach(function(field) {
        field.value = '';
        changeColor(field, 'red');
      });
    } else {
      formFields.forEach(function(field) {
        changeColor(field, 'green');
      });
    }
  });

  submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение отправки данных формы

    formFields.forEach(function(field) {
      changeColor(field, 'blue');
    });

    alert('Данные отправлены!');
  });

     

})

$(document).ready(function() {
  // Анимация меню
  $('article').hover(
      function() {
          // Обработчик события при наведении на элемент первого уровня
          $(this).find('section').slideDown('fast');
      },
      function() {
          // Обработчик события при уходе мыши
          $(this).find('section').slideUp('fast');
      }
  );

  let x = 0;
  
  $('th').click(function() {
    if (x == 0) {
      $('th').removeClass('column-highlight');
            x = 1;
    } else {
      $(this).toggleClass('column-highlight');
            x = 0;
    }
  })

  $('aside').click(function () {
    alert('Отображено всплывающее окно: ' + $('aside').textContent);
  })

});
