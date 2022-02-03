"use strict";

const user = detect.parse(navigator.userAgent);

class FontData {
    constructor(path) {
        this.path = path;
        this.name = path.split("/")[1].split(".")[0];
    }
    gen() {
        fetch(this.path)
            .then(response => response.arrayBuffer())
            .then((arrayBuffer) => {
                this.data = arrayBuffer;
            })
            .catch(() => console.error("Ошибка создания arrayBuffer шрифта"));
    }
}

const helveticaNeueCyrRoman = new FontData("fonts/helveticaneuecyr-roman.woff");
helveticaNeueCyrRoman.gen();

const helveticaCyrBold = new FontData("fonts/helveticacyr-bold.woff");
helveticaCyrBold.gen();

const fontCallback = function(family, bold, italic, fontOptions) {
    if (italic) {fontOptions.fauxItalic = true;}
    if (bold) {fontOptions.fauxBold = true;}
    return helveticaNeueCyrRoman.data;
  };

function savePdf(size, layout, fonts, svg, x, y, width, height, name) {

    const doc = new PDFDocument({size: size, layout:layout});

    if (fonts) {
        doc.registerFont(helveticaNeueCyrRoman.name, helveticaNeueCyrRoman.data);
        doc.registerFont(helveticaCyrBold.name, helveticaCyrBold.data);
    }

    if (user.browser.family !== "Firefox" && user.browser.family !== "Firefox Mobile") {
        SVGtoPDF(doc, svg, x, y, {
            useCSS: true,
            width: width,
            height: height,
            preserveAspectRatio: "MaxYMax",
        });
    } else {
        SVGtoPDF(doc, svg, x, y, {
            useCSS: true,
            width: width,
            height: height,
            preserveAspectRatio: "MaxYMax",
            fontCallback: fontCallback
        });
    }

    const stream = doc.pipe(blobStream());

    doc.end();
    
    stream.on('finish', function () {

        if (navigator.msSaveOrOpenBlob) {
            let blob = stream.toBlob('application/pdf');
            navigator.msSaveOrOpenBlob(blob, name);
        } else {
            const pdfUrl = stream.toBlobURL('application/pdf');
            const downloadLink = document.createElement("a");
            downloadLink.href = pdfUrl;
            downloadLink.download = name;
            downloadLink.target = "_blank";
            document.body.append(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    });
    }
    // savePdf("A4", "landskape", "fonts", zpList, 0, 0, 419.53, 595.28, `Зарплата ${Date()}.pdf`);
    // savePdf([150.23, 164.41], "portrait", "", qRCode, 0, 5, 150.228 , 150.228, "123.pdf");