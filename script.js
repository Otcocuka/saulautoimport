import { Carousel, Tooltip, Dropdown,Collapse, Modal, Ripple, initTWE } from "tw-elements";

initTWE({ Carousel, Tooltip, Dropdown, Collapse, Modal, Ripple });





// // form handler

// document.getElementById('contactForm').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     const formData = new FormData(e.target);
//     const name = formData.get('name');
//     const phone = formData.get('phone');
  
//     const apiToken = "6091232201:AAFeK7pA7uJID96rEkiMmH649rdLvE4Pyo0";
//     const chatId = "@salskdjhhakgjfhakjhwkdjbmzxjchzb";
//     const text = `Имя: ${name}; Телефон: ${phone};`;
  
//     const urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
  
//     fetch(urlString, { method: 'GET' })
//         .then(response => {
//             if (response.ok) {
//                 console.log("Запрос на запись отправлен");
//                 // Здесь можно очистить форму или показать сообщение об успехе
//             }
//         })
//         .catch(error => console.error('Ошибка:', error));
//   });




//   document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращаем отправку формы по умолчанию

//     const formData = new FormData(this); // Получаем данные формы

//     // Преобразуем данные формы в объект
//     const formDataObject = {};
//     formData.forEach((value, key) => {
//       formDataObject[key] = value;
//     });

//     // Отправляем данные формы в Telegram бота
//     sendTelegramMessage(formDataObject);
    
//     // Очищаем форму
//     this.reset();
//   });
  
    
//   function sendTelegramMessage(formData) {
//     const apiToken = "6091232201:AAFeK7pA7uJID96rEkiMmH649rdLvE4Pyo0";
//     const chatId = "@salskdjhhakgjfhakjhwkdjbmzxjchzb";
//     const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
//     const urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

//     const request = new XMLHttpRequest();
//     request.open("GET", urlString);
//     request.send();
//   }