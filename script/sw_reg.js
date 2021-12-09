"use strict";

if(navigator.serviceWorker) {
    self.addEventListener("load", async () => {
    navigator.serviceWorker.register("sw.js")
    .then((registration) => console.log("ServiceWorker успешно зарегестрирован", registration.active))
    .catch((error) => console.log("Ошибка регистрации ServiceWorker", error));
    });
} else{
    console.log('Service workers не поддерживается.');
}
