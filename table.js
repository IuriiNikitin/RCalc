'use strict';

const svgNS = "http://www.w3.org/2000/svg",
zpList = document.getElementById("zpList"),
itemSize = 15, //Размер строчки
k = 0.7; // расстояние между  




function createTable() {
    let i = 0; //Счётчик айтемов
    
    
    let rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"x",0);
    rect.setAttributeNS(null,"y",0);
    rect.setAttributeNS(null,"width",425);
    rect.setAttributeNS(null,"height",595);
    rect.setAttributeNS(null,"fill","white");
    zpList.appendChild(rect);
    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",238);
    rect.setAttributeNS(null,"y",16);
    rect.setAttributeNS(null,"width",150);
    rect.setAttributeNS(null,"height",28);
    zpList.appendChild(rect);
    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",54);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",items * itemSize + 71);
    zpList.appendChild(rect);



    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",items * itemSize + 51);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",14);
    zpList.appendChild(rect);

    rect = document.createElementNS(svgNS,"rect");
    rect.setAttributeNS(null,"class","st1");
    rect.setAttributeNS(null,"x",33);
    rect.setAttributeNS(null,"y",items * itemSize + 85);
    rect.setAttributeNS(null,"width",355);
    rect.setAttributeNS(null,"height",14);
    zpList.appendChild(rect);


    let line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st1");
    line.setAttributeNS(null,"x1",313);
    line.setAttributeNS(null,"y1",16);
    line.setAttributeNS(null,"x2",313);
    line.setAttributeNS(null,"y2",44);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st1");
    line.setAttributeNS(null,"x1",33);
    line.setAttributeNS(null,"y1",68);
    line.setAttributeNS(null,"x2",388);
    line.setAttributeNS(null,"y2",68);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",238);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",238);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",303);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",303);
    line.setAttributeNS(null,"y2",items * itemSize + 99);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",334);
    line.setAttributeNS(null,"y1",54);
    line.setAttributeNS(null,"x2",334);
    line.setAttributeNS(null,"y2",items * itemSize + 51);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",238);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",238);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",334);
    line.setAttributeNS(null,"y1",items * itemSize + 65);
    line.setAttributeNS(null,"x2",334);
    line.setAttributeNS(null,"y2",items * itemSize + 85);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",266);
    line.setAttributeNS(null,"y1",items * itemSize + 99);
    line.setAttributeNS(null,"x2",266);
    line.setAttributeNS(null,"y2",items * itemSize + 125);
    zpList.appendChild(line);

    line = document.createElementNS(svgNS,"line");
    line.setAttributeNS(null,"class","st2");
    line.setAttributeNS(null,"x1",33);
    line.setAttributeNS(null,"y1",items * itemSize + 112);
    line.setAttributeNS(null,"x2",388);
    line.setAttributeNS(null,"y2",items * itemSize + 112);
    zpList.appendChild(line);

    let text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",250);
    text.setAttributeNS(null,"y",28);
    text.appendChild(document.createTextNode("Тарифная"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",259);
    text.setAttributeNS(null,"y",39);
    text.appendChild(document.createTextNode("ставка"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",335);
    text.setAttributeNS(null,"y",34);
    text.appendChild(document.createTextNode(rate.value));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",108);
    text.setAttributeNS(null,"y",64);
    text.appendChild(document.createTextNode("Вид оплаты"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",245);
    text.setAttributeNS(null,"y",64);
    text.appendChild(document.createTextNode("дн."));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",275);
    text.setAttributeNS(null,"y",64);
    text.appendChild(document.createTextNode("час."));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",314);
    text.setAttributeNS(null,"y",64);
    text.appendChild(document.createTextNode("%"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",343);
    text.setAttributeNS(null,"y",64);
    text.appendChild(document.createTextNode("Сумма"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",210);
    text.setAttributeNS(null,"y",items * itemSize + 61);
    text.appendChild(document.createTextNode("Итого начислено:"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",215);
    text.setAttributeNS(null,"y",items * itemSize + 95);
    text.appendChild(document.createTextNode("Итого удержано:"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3 st4");
    text.setAttributeNS(null,"x",125);
    text.setAttributeNS(null,"y",items * itemSize + 109);
    text.appendChild(document.createTextNode("ЗП за I половину месяца в Банк:"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3 st4");
    text.setAttributeNS(null,"x",123);
    text.setAttributeNS(null,"y",items * itemSize + 121);
    text.appendChild(document.createTextNode("ЗП за II половину месяца в Банк:"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",items * itemSize + 73);
    text.appendChild(document.createTextNode("[081] Плановый аванс"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.appendChild(document.createTextNode("[082] Налог с физического лица"));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.appendChild(document.createTextNode(percent.nfl));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",321);
    text.setAttributeNS(null,"y",items * itemSize + 61);
    text.appendChild(document.createTextNode(ZP.final.zpd));
    zpList.appendChild(text);


    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",321);
    text.setAttributeNS(null,"y",items * itemSize + 95);
    text.appendChild(document.createTextNode(ZP.final.wit));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",300);
    text.setAttributeNS(null,"y",items * itemSize + 109);
    text.appendChild(document.createTextNode(ZP.final.prp));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st3");
    text.setAttributeNS(null,"x",300);
    text.setAttributeNS(null,"y",items * itemSize + 121);
    text.appendChild(document.createTextNode(ZP.final.zp));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",339);
    text.setAttributeNS(null,"y",items * itemSize + 73);
    text.appendChild(document.createTextNode(ZP.final.prp));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",339);
    text.setAttributeNS(null,"y",items * itemSize + 82);
    text.appendChild(document.createTextNode(ZP.final.tax));
    zpList.appendChild(text);

    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",78);
    text.appendChild(document.createTextNode("[000] Отработанное время"));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",78);
    text.appendChild(document.createTextNode(time.alld));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",78);
    text.appendChild(document.createTextNode(time.wh));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",310);
    text.setAttributeNS(null,"y",78);
    text.appendChild(document.createTextNode("100"));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",350);
    text.setAttributeNS(null,"y",78);
    text.appendChild(document.createTextNode("0.00"));
    zpList.appendChild(text);
    i++;



    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode("[012] Премия рабочим"));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(""));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(""));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode("30"));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",340);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(ZP.wa));
    zpList.appendChild(text);
    i++;

    
    if(ZP.lvl) {
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",37);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode("[018] Надбавка за разряд"));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",247);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(time.alld));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",273);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(time.wh));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",313);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(""));
    zpList.appendChild(text);
    text = document.createElementNS(svgNS,"text");
    text.setAttributeNS(null,"class","st4 st5");
    text.setAttributeNS(null,"x",340);
    text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
    text.appendChild(document.createTextNode(ZP.lvl));
    zpList.appendChild(text);
    i++;
    }

    
    if(ZP.pw) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[021] Сдельная оплата труда"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.alld));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.wh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.pw));
        zpList.appendChild(text);
        i++;
    }



    if(ZP.ehm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[024] Доплата за вечерние часы"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.alld));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.eh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.ehm));
        zpList.appendChild(text);
        i++;
    }


    if(ZP.nhm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[025] Доплата за ночные часы"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.allnd));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.nh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.nhm));
        zpList.appendChild(text);
        i++;
    }



    if(ZP.ohm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[038] Доплата за работу в выходные дни"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.allod));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.oh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.ohm));
        zpList.appendChild(text);
        i++;
    }
    
    
    if(ZP.cul) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[041] Премия за культуру производства"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(cul.value));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.cul));
        zpList.appendChild(text);
        i++;
    }


    if(ZP.hdm) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[051] Доплата за работу в праздничные дни"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.allhd));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.hdh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.hdm));
        zpList.appendChild(text);
        i++;
    }

    if(ZP.lms) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[061] Вознаграждение за выслугу лет"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.alld));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.wh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.lms));
        zpList.appendChild(text);
        i++;
    }

    if(ZP.ms) {
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",37);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode("[128] Оплата за многостаночное обслуживание"));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",247);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",273);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(time.msh));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",313);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(""));
        zpList.appendChild(text);
        text = document.createElementNS(svgNS,"text");
        text.setAttributeNS(null,"class","st4 st5");
        text.setAttributeNS(null,"x",340);
        text.setAttributeNS(null,"y",(78) + (itemSize * k) * i);
        text.appendChild(document.createTextNode(ZP.ms));
        zpList.appendChild(text);
        i++;
    }

}     
 
createTable();





function saveSvg(svgEl, name) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// saveSvg(zpList, "test.svg");