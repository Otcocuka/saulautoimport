// import { Carousel, Tooltip, Dropdown,Collapse, Modal, Ripple, initTWE } from "tw-elements";

// initTWE({ Carousel, Tooltip, Dropdown, Collapse, Modal, Ripple });

// header hidden

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".header-wrapper");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Скролл вниз
      header.classList.add("translate-y-[-100%]");
    } else {
      // Скролл вверх
      header.classList.remove("translate-y-[-100%]");
    }

    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("contactForm") != null) {
    document
      .getElementById("contactForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // Отправляем данные формы в Telegram бота
        sendTelegramMessage(name, email);

        // Очищаем форму
        this.reset();
      });

    function sendTelegramMessage(name, email) {
      const apiToken = "6091232201:AAFeK7pA7uJID96rEkiMmH649rdLvE4Pyo0";
      const chatId = "@salskdjhhakgjfhakjhwkdjbmzxjchzb";
      const text = `Name: ${name}%0AEmail: ${email}`;
      const urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

      fetch(urlString)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) =>
          console.error("There was a problem with your fetch operation:", error)
        );
    }
  }

  // footer form

  document
    .getElementById("footer_form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Предотвращаем отправку формы по умолчанию

      const footer_name = document.getElementById("footer_name").value;
      const footer_email = document.getElementById("footer_email").value;
      const footer_tel = document.getElementById("footer_tel").value;
      const footer_message = document.getElementById("footer_message").value;

      // Отправляем данные формы в Telegram бота
      sendTelegramMessage(
        footer_name,
        footer_email,
        footer_tel,
        footer_message
      );

      // Очищаем форму
      this.reset();
    });

  function sendTelegramMessage(
    footer_name,
    footer_email,
    footer_tel,
    footer_message
  ) {
    const apiToken = "6091232201:AAFeK7pA7uJID96rEkiMmH649rdLvE4Pyo0";
    const chatId = "@salskdjhhakgjfhakjhwkdjbmzxjchzb";
    const text = `footer_имя: ${footer_name}%0Aemail: ${footer_email}%0Atel: ${footer_tel}%0Amessage: ${footer_message}`;
    const urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    fetch(urlString)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) =>
        console.error("There was a problem with your fetch operation:", error)
      );
  }
});



// accordion



document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const body = button.nextElementSibling;

      if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        body.classList.add('block');
        button.setAttribute('aria-expanded', 'true');
      } else {
        body.classList.add('hidden');
        body.classList.remove('block');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });