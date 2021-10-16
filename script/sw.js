self.addEventListener("install", (event) => {
    // console.log("[SW] install");
        console.log(event);
});

self.addEventListener("activate", (event) => {
    // console.log("[SW] activate");
    console.log(event);
});