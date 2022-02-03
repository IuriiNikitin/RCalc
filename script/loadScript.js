"use strict";
document.addEventListener("DOMContentLoaded", () => {


    function loadScript(src, a) {
        const script = document.createElement("script");
        script.src = src;
        if(!a) {
            script.async = false;
        }

        document.body.append(script);
    }

    loadScript("script/calc.js");
    loadScript("script/technical.js");
    loadScript("script/table.js");
    loadScript("script/history.js");
    loadScript("lib/detect.js");
    loadScript("lib/qrcode.js", "a");
    
    loadScript("lib/pdf/pdfkit.js", "a");
    loadScript("lib/pdf/blobstream.js", "a");
    loadScript("lib/pdf/svgtopdfkit.js", "a");
    loadScript("script/pdf.js");


});



