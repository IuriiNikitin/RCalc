if(navigator.serviceWorker) {
    navigator.serviceWorker.register("script/sw.js")
    .then(() => console.log("ServiceWorker успешно зарегестрирован"))
    .catch(() => console.log("Ошибка регистрации ServiceWorker"));
}