// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд,
// так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   // ваш код
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

function delay(ms) {
  let promise = new Promise((resolve) => setTimeout(resolve, ms));
  return promise;
}

delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом,
// чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
// Новое использование:

// showCircle(150, 150, 100).then(div => {
//   div.classList.add('message-ball');
//   div.append("Hello, world!");
// });

function doIt() {
  showCircle(150, 150, 100).then((hello) => {
    hello.classList.add("hello");
    hello.append("Hello World!");
  });
}

function showCircle(cx, cy, radius, callback) {
  let circle = document.createElement("div");
  circle.style.width = 0;
  circle.style.height = 0;
  circle.style.left = cx + "px";
  circle.style.top = cy + "px";
  circle.className = "circle";
  document.body.append(circle);

  let promise = new Promise((resolve) => {
    setTimeout(() => {
      circle.style.width = radius * 2 + "px";
      circle.style.height = radius * 2 + "px";
      circle.addEventListener("transitionend", function func() {
        circle.removeEventListener("transitionend", func);
        resolve(circle);
      });
    });
  });

  return promise;
}
