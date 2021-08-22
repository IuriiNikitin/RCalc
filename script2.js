'use strict';

const svgNS = "http://www.w3.org/2000/svg",
zpList = document.getElementById("zpList"),
items = 9, //Количество строчек зарплаты
itemSize = 12, //Размер строчки
nfl = 13; // Налог




function createTable() {
    const rect0 = document.createElementNS(svgNS,"rect");
    rect0.setAttributeNS(null,"x",0);
    rect0.setAttributeNS(null,"y",0);
    rect0.setAttributeNS(null,"width",425);
    rect0.setAttributeNS(null,"height",595);
    rect0.setAttributeNS(null,"fill","white");
    const rect1 = document.createElementNS(svgNS,"rect");
    rect1.setAttributeNS(null,"id","rect1");
    rect1.setAttributeNS(null,"class","st1");
    rect1.setAttributeNS(null,"x",238);
    rect1.setAttributeNS(null,"y",16);
    rect1.setAttributeNS(null,"width",150);
    rect1.setAttributeNS(null,"height",28);
    const rect2 = document.createElementNS(svgNS,"rect");
    rect2.setAttributeNS(null,"id","rect2");
    rect2.setAttributeNS(null,"class","st1");
    rect2.setAttributeNS(null,"x",33);
    rect2.setAttributeNS(null,"y",54);
    rect2.setAttributeNS(null,"width",355);
    rect2.setAttributeNS(null,"height",items * itemSize + 71);



    const rect3 = document.createElementNS(svgNS,"rect");
    rect3.setAttributeNS(null,"id","rect3");
    rect3.setAttributeNS(null,"class","st1");
    rect3.setAttributeNS(null,"x",33);
    rect3.setAttributeNS(null,"y",items * itemSize + 51);
    rect3.setAttributeNS(null,"width",355);
    rect3.setAttributeNS(null,"height",14);

    const rect4 = document.createElementNS(svgNS,"rect");
    rect4.setAttributeNS(null,"id","rect4");
    rect4.setAttributeNS(null,"class","st1");
    rect4.setAttributeNS(null,"x",33);
    rect4.setAttributeNS(null,"y",items * itemSize + 85);
    rect4.setAttributeNS(null,"width",355);
    rect4.setAttributeNS(null,"height",14);


    const line1 = document.createElementNS(svgNS,"line");
    line1.setAttributeNS(null,"id","line1");
    line1.setAttributeNS(null,"class","st1");
    line1.setAttributeNS(null,"x1",313);
    line1.setAttributeNS(null,"y1",16);
    line1.setAttributeNS(null,"x2",313);
    line1.setAttributeNS(null,"y2",44);

    const line2 = document.createElementNS(svgNS,"line");
    line2.setAttributeNS(null,"id","line2");
    line2.setAttributeNS(null,"class","st1");
    line2.setAttributeNS(null,"x1",33);
    line2.setAttributeNS(null,"y1",68);
    line2.setAttributeNS(null,"x2",388);
    line2.setAttributeNS(null,"y2",68);

    const line3 = document.createElementNS(svgNS,"line");
    line3.setAttributeNS(null,"id","line3");
    line3.setAttributeNS(null,"class","st2");
    line3.setAttributeNS(null,"x1",238);
    line3.setAttributeNS(null,"y1",54);
    line3.setAttributeNS(null,"x2",238);
    line3.setAttributeNS(null,"y2",items * itemSize + 51);

    const line4 = document.createElementNS(svgNS,"line");
    line4.setAttributeNS(null,"id","line4");
    line4.setAttributeNS(null,"class","st2");
    line4.setAttributeNS(null,"x1",266);
    line4.setAttributeNS(null,"y1",54);
    line4.setAttributeNS(null,"x2",266);
    line4.setAttributeNS(null,"y2",items * itemSize + 51);

    const line5 = document.createElementNS(svgNS,"line");
    line5.setAttributeNS(null,"id","line5");
    line5.setAttributeNS(null,"class","st2");
    line5.setAttributeNS(null,"x1",303);
    line5.setAttributeNS(null,"y1",54);
    line5.setAttributeNS(null,"x2",303);
    line5.setAttributeNS(null,"y2",items * itemSize + 99);

    const line6 = document.createElementNS(svgNS,"line");
    line6.setAttributeNS(null,"id","line6");
    line6.setAttributeNS(null,"class","st2");
    line6.setAttributeNS(null,"x1",334);
    line6.setAttributeNS(null,"y1",54);
    line6.setAttributeNS(null,"x2",334);
    line6.setAttributeNS(null,"y2",items * itemSize + 51);

    const line7 = document.createElementNS(svgNS,"line");
    line7.setAttributeNS(null,"id","line7");
    line7.setAttributeNS(null,"class","st2");
    line7.setAttributeNS(null,"x1",238);
    line7.setAttributeNS(null,"y1",items * itemSize + 65);
    line7.setAttributeNS(null,"x2",238);
    line7.setAttributeNS(null,"y2",items * itemSize + 85);

    const line8 = document.createElementNS(svgNS,"line");
    line8.setAttributeNS(null,"id","line8");
    line8.setAttributeNS(null,"class","st2");
    line8.setAttributeNS(null,"x1",266);
    line8.setAttributeNS(null,"y1",items * itemSize + 65);
    line8.setAttributeNS(null,"x2",266);
    line8.setAttributeNS(null,"y2",items * itemSize + 85);

    const line9 = document.createElementNS(svgNS,"line");
    line9.setAttributeNS(null,"id","line9");
    line9.setAttributeNS(null,"class","st2");
    line9.setAttributeNS(null,"x1",334);
    line9.setAttributeNS(null,"y1",items * itemSize + 65);
    line9.setAttributeNS(null,"x2",334);
    line9.setAttributeNS(null,"y2",items * itemSize + 85);

    const line10 = document.createElementNS(svgNS,"line");
    line10.setAttributeNS(null,"id","line10");
    line10.setAttributeNS(null,"class","st2");
    line10.setAttributeNS(null,"x1",266);
    line10.setAttributeNS(null,"y1",items * itemSize + 99);
    line10.setAttributeNS(null,"x2",266);
    line10.setAttributeNS(null,"y2",items * itemSize + 125);

    const line11 = document.createElementNS(svgNS,"line");
    line11.setAttributeNS(null,"id","line11");
    line11.setAttributeNS(null,"class","st2");
    line11.setAttributeNS(null,"x1",33);
    line11.setAttributeNS(null,"y1",items * itemSize + 112);
    line11.setAttributeNS(null,"x2",388);
    line11.setAttributeNS(null,"y2",items * itemSize + 112);

    const text1 = document.createElementNS(svgNS,"text");
    text1.setAttributeNS(null,"id","text1");
    text1.setAttributeNS(null,"class","st3");
    text1.setAttributeNS(null,"x",250);
    text1.setAttributeNS(null,"y",28);
    text1.appendChild(document.createTextNode("Тарифная"));

    const text2 = document.createElementNS(svgNS,"text");
    text2.setAttributeNS(null,"id","text2");
    text2.setAttributeNS(null,"class","st3");
    text2.setAttributeNS(null,"x",259);
    text2.setAttributeNS(null,"y",39);
    text2.appendChild(document.createTextNode("ставка"));

    const text3 = document.createElementNS(svgNS,"text");
    text3.setAttributeNS(null,"id","text3");
    text3.setAttributeNS(null,"class","st3");
    text3.setAttributeNS(null,"x",335);
    text3.setAttributeNS(null,"y",34);
    text3.appendChild(document.createTextNode("239.00"));

    const text4 = document.createElementNS(svgNS,"text");
    text4.setAttributeNS(null,"id","text4");
    text4.setAttributeNS(null,"class","st3");
    text4.setAttributeNS(null,"x",108);
    text4.setAttributeNS(null,"y",64);
    text4.appendChild(document.createTextNode("Вид оплаты"));

    const text5 = document.createElementNS(svgNS,"text");
    text5.setAttributeNS(null,"id","text5");
    text5.setAttributeNS(null,"class","st3");
    text5.setAttributeNS(null,"x",245);
    text5.setAttributeNS(null,"y",64);
    text5.appendChild(document.createTextNode("дн."));

    const text6 = document.createElementNS(svgNS,"text");
    text6.setAttributeNS(null,"id","text6");
    text6.setAttributeNS(null,"class","st3");
    text6.setAttributeNS(null,"x",275);
    text6.setAttributeNS(null,"y",64);
    text6.appendChild(document.createTextNode("час."));

    const text7 = document.createElementNS(svgNS,"text");
    text7.setAttributeNS(null,"id","text7");
    text7.setAttributeNS(null,"class","st3");
    text7.setAttributeNS(null,"x",314);
    text7.setAttributeNS(null,"y",64);
    text7.appendChild(document.createTextNode("%"));

    const text8 = document.createElementNS(svgNS,"text");
    text8.setAttributeNS(null,"id","text8");
    text8.setAttributeNS(null,"class","st3");
    text8.setAttributeNS(null,"x",343);
    text8.setAttributeNS(null,"y",64);
    text8.appendChild(document.createTextNode("Сумма"));

    const text9 = document.createElementNS(svgNS,"text");
    text9.setAttributeNS(null,"id","text9");
    text9.setAttributeNS(null,"class","st3");
    text9.setAttributeNS(null,"x",210);
    text9.setAttributeNS(null,"y",items * itemSize + 61);
    text9.appendChild(document.createTextNode("Итого начислено:"));

    const text10 = document.createElementNS(svgNS,"text");
    text10.setAttributeNS(null,"id","text10");
    text10.setAttributeNS(null,"class","st3");
    text10.setAttributeNS(null,"x",215);
    text10.setAttributeNS(null,"y",items * itemSize + 95);
    text10.appendChild(document.createTextNode("Итого удержано:"));

    const text11 = document.createElementNS(svgNS,"text");
    text11.setAttributeNS(null,"id","text11");
    text11.setAttributeNS(null,"class","st3 st4");
    text11.setAttributeNS(null,"x",125);
    text11.setAttributeNS(null,"y",items * itemSize + 109);
    text11.appendChild(document.createTextNode("ЗП за I половину месяца в Банк:"));

    const text12 = document.createElementNS(svgNS,"text");
    text12.setAttributeNS(null,"id","text12");
    text12.setAttributeNS(null,"class","st3 st4");
    text12.setAttributeNS(null,"x",123);
    text12.setAttributeNS(null,"y",items * itemSize + 121);
    text12.appendChild(document.createTextNode("ЗП за II половину месяца в Банк:"));

    const text13 = document.createElementNS(svgNS,"text");
    text13.setAttributeNS(null,"id","text13");
    text13.setAttributeNS(null,"class","st4 st5");
    text13.setAttributeNS(null,"x",37);
    text13.setAttributeNS(null,"y",items * itemSize + 73);
    text13.appendChild(document.createTextNode("[081] Плановый аванс"));

    const text14 = document.createElementNS(svgNS,"text");
    text14.setAttributeNS(null,"id","text14");
    text14.setAttributeNS(null,"class","st4 st5");
    text14.setAttributeNS(null,"x",37);
    text14.setAttributeNS(null,"y",items * itemSize + 82);
    text14.appendChild(document.createTextNode("[082] Налог с физического лица"));

    const text15 = document.createElementNS(svgNS,"text");
    text15.setAttributeNS(null,"id","text15");
    text15.setAttributeNS(null,"class","st4 st5");
    text15.setAttributeNS(null,"x",313);
    text15.setAttributeNS(null,"y",items * itemSize + 82);
    text15.appendChild(document.createTextNode(`${nfl}`));

    const text16 = document.createElementNS(svgNS,"text");
    text16.setAttributeNS(null,"id","text16");
    text16.setAttributeNS(null,"class","st3");
    text16.setAttributeNS(null,"x",321);
    text16.setAttributeNS(null,"y",items * itemSize + 61);
    text16.appendChild(document.createTextNode("Зарплата"));


    const text17 = document.createElementNS(svgNS,"text");
    text17.setAttributeNS(null,"id","text17");
    text17.setAttributeNS(null,"class","st3");
    text17.setAttributeNS(null,"x",321);
    text17.setAttributeNS(null,"y",items * itemSize + 95);
    text17.appendChild(document.createTextNode("Удержано"));

    const text18 = document.createElementNS(svgNS,"text");
    text18.setAttributeNS(null,"id","text18");
    text18.setAttributeNS(null,"class","st3");
    text18.setAttributeNS(null,"x",300);
    text18.setAttributeNS(null,"y",items * itemSize + 109);
    text18.appendChild(document.createTextNode("Аванс"));

    const text19 = document.createElementNS(svgNS,"text");
    text19.setAttributeNS(null,"id","text19");
    text19.setAttributeNS(null,"class","st3");
    text19.setAttributeNS(null,"x",300);
    text19.setAttributeNS(null,"y",items * itemSize + 121);
    text19.appendChild(document.createTextNode("Зарплата"));

    const text20 = document.createElementNS(svgNS,"text");
    text20.setAttributeNS(null,"id","text20");
    text20.setAttributeNS(null,"class","st4 st5");
    text20.setAttributeNS(null,"x",339);
    text20.setAttributeNS(null,"y",items * itemSize + 73);
    text20.appendChild(document.createTextNode("Аванс"));

    const text21 = document.createElementNS(svgNS,"text");
    text21.setAttributeNS(null,"id","text21");
    text21.setAttributeNS(null,"class","st4 st5");
    text21.setAttributeNS(null,"x",339);
    text21.setAttributeNS(null,"y",items * itemSize + 82);
    text21.appendChild(document.createTextNode("Налог"));

    zpList.appendChild(rect0);
    zpList.appendChild(rect1);
    zpList.appendChild(rect2);
    zpList.appendChild(rect3);
    zpList.appendChild(rect4);
    zpList.appendChild(line1);
    zpList.appendChild(line2);
    zpList.appendChild(line3);
    zpList.appendChild(line4);
    zpList.appendChild(line5);
    zpList.appendChild(line6);
    zpList.appendChild(line7);
    zpList.appendChild(line8);
    zpList.appendChild(line9);
    zpList.appendChild(line10);
    zpList.appendChild(line11);
    zpList.appendChild(text1);
    zpList.appendChild(text2);
    zpList.appendChild(text3);
    zpList.appendChild(text4);
    zpList.appendChild(text5);
    zpList.appendChild(text6);
    zpList.appendChild(text7);
    zpList.appendChild(text8);
    zpList.appendChild(text9);
    zpList.appendChild(text10);
    zpList.appendChild(text11);
    zpList.appendChild(text12);
    zpList.appendChild(text13);
    zpList.appendChild(text14);
    zpList.appendChild(text15);
    zpList.appendChild(text16);
    zpList.appendChild(text17);
    zpList.appendChild(text18);
    zpList.appendChild(text19);
    zpList.appendChild(text20);
    zpList.appendChild(text21);
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