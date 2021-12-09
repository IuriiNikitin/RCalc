"use strict";
const staticCacheName = "s-app-v001";
const assetUrls = [
"/",
"sw.js",
"index.html",
"manifest.json",
"browserconfig.xml",
"img/download.svg",
"img/generate.svg",
"img/share.svg",
"icons/android-chrome-192x192.png",
"icons/android-chrome-512x512.png",
"icons/apple-touch-icon.png",
"icons/favicon.ico",
"icons/favicon.svg",
"icons/safari-pinned-tab.svg",
"icons/windows.png",
"icons/windows128x128.png",
"icons/windows144x144.png",
"icons/windows270x270.png",
"icons/windows558x270.png",
"icons/windows558x558.png",
"css/style.css",
"script/calc.js",
"script/history.js",
"script/sw_reg.js",
"script/table.js",
"script/technical.js"
];


self.addEventListener("install", async (event) => {
    const cache =  await caches.open(staticCacheName);
    await cache.addAll(assetUrls);
});

self.addEventListener("activate", async (event) => {
    const cacheNames = await caches.keys();
    await Promise.all(
        cacheNames
        .filter(name => name !== staticCacheName)
        .map(name => caches.delete(name))
    );
});

self.addEventListener("fetch", (event) => {
    // console.log("Fetch", event.request.url);
});