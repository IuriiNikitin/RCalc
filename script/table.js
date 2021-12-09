'use strict';

const svgNS = "http://www.w3.org/2000/svg",
zpList = document.getElementById("zpList"),
itemSize = 15, //Размер строчки
k = 0.7; // расстояние между  


function createTable() {
    let i = 0; //Счётчик айтемов
    
    let style = document.createElementNS(svgNS,"style");
    style.append(document.createTextNode(".st1 {fill: none;stroke: #000000;stroke-miterlimit: 10;}"));
    style.append(document.createTextNode(".st2 {fill: none;stroke: #000000;stroke-width: 0.5;stroke-miterlimit: 10;}"));
    style.append(document.createTextNode(".st3 {font-family: 'Arial-Bold', sans-serif; font-weight: 600; font-size:10px;}"));
    style.append(document.createTextNode(".st4 {font-size: 8.5px;}"));
    style.append(document.createTextNode(".st5 {font-family: 'Arial', sans-serif; font-weight: 400;}"));
    zpList.append(style);
    


    let rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",0);
    rect.setAttributeNS(null,"y",0);
    rect.setAttributeNS(null,"width",425);
    rect.setAttributeNS(null,"height",595);
    rect.setAttributeNS(null,"fill","white");
    rect.setAttributeNS(null,"stroke","black");
    rect.setAttributeNS(null,"stroke-width", 1);
    zpList.append(rect);
    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",238);
    rect.setAttributeNS(null,"y",16);
    rect.setAttributeNS(null,"width",150);
    rect.setAttributeNS(null,"height",28);
    zpList.append(rect);
    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",54);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",items * itemSize + 71);
    zpList.append(rect);



    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",items * itemSize + 51);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",14);
    zpList.append(rect);

    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",items * itemSize + 85);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",14);
    zpList.append(rect);


    let line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st1");
    line.setAttributeNS(null,"x1",313);
    line.setAttributeNS(null,"y1",16);
    line.setAttributeNS(null,"x2",313);
    line.setAttributeNS(null,"y2",44);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st1");
    line.setAttributeNS(null,"x1",33);
    line.setAttributeNS(null,"y1",68);
    line.setAttributeNS(null,"x2",388);
    line.setAttributeNS(null,"y2",68);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",238);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",238);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",303);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",303);
    line.setAttributeNS(null,"y2",items * itemSize + 99);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",334);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",334);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",238);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",238);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",334);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",334);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",items * itemSize + 99);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 125);
    zpList.append(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",33);
    line.setAttributeNS(null,"y1",items * itemSize + 112);
    line.setAttributeNS(null,"x2",388);
    line.setAttributeNS(null,"y2",items * itemSize + 112);
    zpList.append(line);

    let text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",250);
    text.setAttributeNS(null,"y",28);
    text.append(document.createTextNode("Тарифная"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",259);
    text.setAttributeNS(null,"y",39);
    text.append(document.createTextNode("ставка"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",335);
    text.setAttributeNS(null,"y",34);
    text.append(document.createTextNode(rate.value));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",108);
    text.setAttributeNS(null,"y",64);
    text.append(document.createTextNode("Вид оплаты"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",245);
    text.setAttributeNS(null,"y",64);
    text.append(document.createTextNode("дн."));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",275);
    text.setAttributeNS(null,"y",64);
    text.append(document.createTextNode("час."));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",314);
    text.setAttributeNS(null,"y",64);
    text.append(document.createTextNode("%"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",343);
    text.setAttributeNS(null,"y",64);
    text.append(document.createTextNode("Сумма"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",210);
    text.setAttributeNS(null,"y",items * itemSize + 61);
    text.append(document.createTextNode("Итого начислено:"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",215);
    text.setAttributeNS(null,"y",items * itemSize + 95);
    text.append(document.createTextNode("Итого удержано:"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3 st4");
    text.setAttributeNS(null,"x",125);
    text.setAttributeNS(null,"y",items * itemSize + 109);
    text.append(document.createTextNode("ЗП за I половину месяца в Банк:"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3 st4");
    text.setAttributeNS(null,"x",123);
    text.setAttributeNS(null,"y",items * itemSize + 121);
    text.append(document.createTextNode("ЗП за II половину месяца в Банк:"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",items * itemSize + 73);
    text.append(document.createTextNode("[081] Плановый аванс"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.append(document.createTextNode("[082] Налог с физического лица"));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.append(document.createTextNode(percent.nfl));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",321);
    text.setAttributeNS(null,"y",items * itemSize + 61);
    text.append(document.createTextNode(ZP.final.zpd));
    zpList.append(text);


    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",321);
    text.setAttributeNS(null,"y",items * itemSize + 95);
    text.append(document.createTextNode(ZP.final.wit));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",300);
    text.setAttributeNS(null,"y",items * itemSize + 109);
    text.append(document.createTextNode(ZP.final.prp));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",300);
    text.setAttributeNS(null,"y",items * itemSize + 121);
    text.append(document.createTextNode(ZP.final.zp));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",339);
    text.setAttributeNS(null,"y",items * itemSize + 73);
    text.append(document.createTextNode(ZP.final.prp));
    zpList.append(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",339);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.append(document.createTextNode(ZP.final.tax));
    zpList.append(text);




    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",78);
    text.append(document.createTextNode("[000] Отработанное время"));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",78);
    text.append(document.createTextNode(Math.ceil(time.alld)));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",78);
    text.append(document.createTextNode(time.wh));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",310);
    text.setAttributeNS(null,"y",78);
    text.append(document.createTextNode("100"));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",350);
    text.setAttributeNS(null,"y",78);
    text.append(document.createTextNode("0.00"));
    zpList.append(text);
    i++;



    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode("[012] Премия рабочим"));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(""));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(""));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode("30"));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",340);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(ZP.wa));
    zpList.append(text);
    i++;

    if(ZP.fnp) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[015] Выплаты из фонда нач. подразделения"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.fnp));
        zpList.append(text);
        i++;
        }

    
    if(ZP.lvl) {
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode("[018] Надбавка за разряд"));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(Math.ceil(time.wdlvl)));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(time.whlvl));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(""));
    zpList.append(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",340);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.append(document.createTextNode(ZP.lvl));
    zpList.append(text);
    i++;
    }

    
    if(ZP.pw) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[021] Сдельная оплата труда"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.alld)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        if(ms.checked) {
            text.append(document.createTextNode(time.wh));
        } else {
            text.append(document.createTextNode(time.pwh));
        }
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.pw));
        zpList.append(text);
        i++;
    }



    if(ZP.ehm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[024] Доплата за вечерние часы"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.alld)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.eh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.ehm));
        zpList.append(text);
        i++;
    }


    if(ZP.nhm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[025] Доплата за ночные часы"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.allnd)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.nh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.nhm));
        zpList.append(text);
        i++;
    }



    if(ZP.ohm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[038] Доплата за работу в выходные дни"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.allod)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.oh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.ohm));
        zpList.append(text);
        i++;
    }
    
    
    if(ZP.cul) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[041] Премия за культуру производства"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(cul.value));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.cul));
        zpList.append(text);
        i++;
    }


    if(ZP.hdm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[051] Доплата за работу в праздничные дни"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.allhd)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.hdh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.hdm));
        zpList.append(text);
        i++;
    }

    if(ZP.lms) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[061] Вознаграждение за выслугу лет"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(Math.ceil(time.alld)));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.wh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.lms));
        zpList.append(text);
        i++;
    }

    if(ZP.ms) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode("[128] Оплата за многостаночное обслуживание"));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(time.msh));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(""));
        zpList.append(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.append(document.createTextNode(ZP.ms));
        zpList.append(text);
        i++;
    }

    const crDate =  new Date().toLocaleDateString(),
    crTime = new Date().toLocaleTimeString();
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",38);
    text.setAttributeNS(null,"y",34);
    text.append(document.createTextNode(`Сгенерировано ${crDate} в ${crTime}`));
    zpList.append(text);

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
