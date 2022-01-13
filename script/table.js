'use strict';

const svgNS = "http://www.w3.org/2000/svg",
zpList = document.getElementById("zpList"),
itemSize = 15, //Размер строчки
k = 0.7; // расстояние между  

class Rect {
    constructor(x, y , width, height, clas, appendPlace = zpList){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clas = clas;
        this.appendPlace = appendPlace;
    }
    render() {
        const rect = document.createElementNS(svgNS,"rect");
        rect.setAttributeNS(null,"class", this.clas);
        rect.setAttributeNS(null,"x", this.x);
        rect.setAttributeNS(null,"y", this.y);
        rect.setAttributeNS(null,"width", this.width);
        rect.setAttributeNS(null,"height", this.height);
        this.appendPlace.append(rect);
    }
}
class Line {
    constructor(x1, y1 , x2, y2, clas, appendPlace = zpList){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.clas = clas;
        this.appendPlace = appendPlace;
    }
    render() {
        const line = document.createElementNS(svgNS,"line");
        line.setAttributeNS(null,"class", this.clas);
        line.setAttributeNS(null,"x1", this.x1);
        line.setAttributeNS(null,"y1", this.y1);
        line.setAttributeNS(null,"x2", this.x2);
        line.setAttributeNS(null,"y2", this.y2);
        this.appendPlace.append(line);
    }
}
class Text {
    constructor(x, y, clas, text, appendPlace = zpList){
        this.x = x;
        this.y = y;
        this.text = text;
        this.clas = clas;
        this.appendPlace = appendPlace;
    }
    render() {
        const text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class", this.clas);
        text.setAttributeNS(null,"x", this.x);
        text.setAttributeNS(null,"y", this.y);
        text.append(document.createTextNode(this.text));
        this.appendPlace.append(text);
    }
}

function createTable() {
    let i = 0; //Счётчик айтемов

    zpList.innerHTML = "";

    let style = document.createElementNS(svgNS,"style");
    style.append(document.createTextNode(".st0 {fill: white;stroke: #000000;stroke-width: 1;}"));
    style.append(document.createTextNode(".st1 {fill: none;stroke: #000000;stroke-miterlimit: 10;}"));
    style.append(document.createTextNode(".st2 {fill: none;stroke: #000000;stroke-width: 0.5;stroke-miterlimit: 10;}"));
    style.append(document.createTextNode(".st3 {font-family: 'Arial-Bold', sans-serif; font-weight: 600; font-size:10px;}"));
    style.append(document.createTextNode(".st4 {font-size: 8.5px;}"));
    style.append(document.createTextNode(".st5 {font-family: 'Arial', sans-serif; font-weight: 400;}"));
    zpList.append(style);
    
    new Rect(0, 0, 425, 595, "st0").render();
    new Rect(238, 16, 150, 28, "st1").render();
    new Rect(33, 54, 355, items * itemSize + 71, "st1").render();
    new Rect(33, items * itemSize + 51, 355, 14, "st1").render();
    new Rect(33, items * itemSize + 85, 355, 14, "st1").render();

    new Line(313, 16, 313, 44, "st1").render();
    new Line(33, 68, 388, 68, "st1").render();
    new Line(238, 54, 238, items * itemSize + 51, "st2").render();
    new Line(266, 54, 266, items * itemSize + 51, "st2").render();
    new Line(303, 54, 303, items * itemSize + 99, "st2").render();
    new Line(334, 54, 334, items * itemSize + 51, "st2").render();
    new Line(238, items * itemSize + 65, 238, items * itemSize + 85, "st2").render();
    new Line(266, items * itemSize + 65, 266, items * itemSize + 85, "st2").render();
    new Line(334, items * itemSize + 65, 334, items * itemSize + 85, "st2").render();
    new Line(266, items * itemSize + 99, 266, items * itemSize + 125, "st2").render();
    new Line(33, items * itemSize + 112, 388, items * itemSize + 112, "st2").render();

    new Text(250, 28, "st3", "Тарифная").render();
    new Text(259, 39, "st3", "ставка").render();
    new Text(335, 34, "st3", rate.value).render();
    new Text(108, 64, "st3", "Вид оплаты").render();
    new Text(245, 64, "st3", "дн.").render();
    new Text(275, 64, "st3", "час.").render();
    new Text(314, 64, "st3", "%").render();
    new Text(343, 64, "st3", "Сумма").render();
    new Text(210, items * itemSize + 61, "st3", "Итого начислено:").render();
    new Text(215, items * itemSize + 95, "st3", "Итого удержано:").render();
    new Text(125, items * itemSize + 109, "st3 st4", "ЗП за I половину месяца в Банк:").render();
    new Text(123, items * itemSize + 121, "st3 st4", "ЗП за II половину месяца в Банк:").render();
    new Text(37, items * itemSize + 73, "st4 st5", "[081] Плановый аванс").render();
    new Text(37, items * itemSize + 82, "st4 st5", "[082] Налог с физического лица").render();
    new Text(313, items * itemSize + 82, "st4 st5", percent.nfl).render();
    new Text(321, items * itemSize + 61, "st3", ZP.final.zpd).render();
    new Text(321, items * itemSize + 95, "st3", ZP.final.wit).render();
    new Text(300, items * itemSize + 109, "st3", ZP.final.prp).render();
    new Text(300, items * itemSize + 121, "st3", ZP.final.zp).render();
    new Text(339, items * itemSize + 73, "st4 st5", ZP.final.prp).render();
    new Text(339, items * itemSize + 82, "st4 st5", ZP.final.tax).render();
    new Text(37, 78, "st4 st5", "[000] Отработанное время").render();
    new Text(247, 78, "st4 st5", Math.ceil(time.alld)).render();
    new Text(273, 78, "st4 st5", time.wh).render();
    new Text(310, 78, "st4 st5", "100").render();
    new Text(350, 78, "st4 st5", "0.00").render();
    i++;
    new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[012] Премия рабочим").render();
    new Text(313, 78 + (itemSize * k) * i, "st4 st5", "30").render();
    new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.wa).render();
    i++;

    if(ZP.fnp) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[015] Выплаты из фонда нач. подразделения").render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.fnp).render();
        i++;
        }
    if(ZP.lvl) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[018] Надбавка за разряд").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.wdlvl)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.whlvl).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.lvl).render();
        i++;
        }
    if(ZP.pw) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[021] Сдельная оплата труда").render();
        new Text(248, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.alld)).render();
        if (ms.checked) {
            new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.wh).render();
        } else {
            new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.pwh).render();
        }
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.pw).render();
        i++;
    }
    if(ZP.ehm) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[024] Доплата за вечерние часы").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.alld)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.eh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.ehm).render();
        i++;
    }
    if(ZP.nhm) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[025] Доплата за ночные часы").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.allnd)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.nh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.nhm).render();
        i++;
    }
    if(ZP.ohm) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[038] Доплата за работу в выходные дни").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.allod)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.oh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.ohm).render();
        i++;
    }
    if(ZP.cul) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[041] Премия за культуру производства").render();
        new Text(313, 78 + (itemSize * k) * i, "st4 st5", cul.value).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.cul).render();
        i++;
    }
    if(ZP.hdm) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[051] Доплата за работу в праздничные дни").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.allhd)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.hdh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.hdm).render();
        i++;
    }
    if(ZP.lms) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[061] Вознаграждение за выслугу лет").render();
        new Text(247, 78 + (itemSize * k) * i, "st4 st5", Math.ceil(time.alld)).render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.wh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.lms).render();
        i++;
    }
    if(ZP.ms) {
        new Text(37, 78 + (itemSize * k) * i, "st4 st5", "[128] Оплата за многостаночное обслуживание").render();
        new Text(273, 78 + (itemSize * k) * i, "st4 st5", time.msh).render();
        new Text(340, 78 + (itemSize * k) * i, "st4 st5", ZP.ms).render();
        i++;
    }

    writeHistory();
    const qrcode = new QRCode({ 
        content: link, 
        padding: 4,
        width: 150,
        height: 150,
        join: true,
        predefined: true,
        xmlDeclaration: false,
        container: "svg",
        x: 260,
        y: 430
    });
    const svg = qrcode.svg();
    zpList.innerHTML += svg;



    const crDate =  new Date().toLocaleDateString(),
    crTime = new Date().toLocaleTimeString();

    new Text(38, 34 , "st3", `Сгенерировано ${crDate} в ${crTime}`).render();

    // console.log("Таблица создана");
}     

function saveSvg(svgEl, name) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const svgData = svgEl.outerHTML;
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.append(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
// saveSvg(zpList, `Зарплата ${Date()}.svg`);