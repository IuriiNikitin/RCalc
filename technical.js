'use strict';


const btn1 = document.getElementById("btn1"),
btn2 = document.getElementById("btn2");
const toggleVis = (element) => {element.style.display = "block";};
        
        

btn1.addEventListener("click", () => {calc(); createTable(); toggleVis(zpList); toggleVis(btn2); addAnim(zpList);});


const addAnim = (element) => {
    setTimeout(() => {element.classList += " anim";});
    element.classList.remove("anim");

};



    const toZero = (e) => { // К нулю при blur
    if(!e.target.value){e.target.value = 0;}};
    md.addEventListener("blur", toZero);
    nd.addEventListener("blur", toZero);
    omd.addEventListener("blur", toZero);
    ond.addEventListener("blur", toZero);
    mhd.addEventListener("blur", toZero);
    nhd.addEventListener("blur", toZero);

    rate.addEventListener("blur", (e) => {
    if(!e.target.value) {
        e.target.value = (239).toFixed(2);
    } else {
        e.target.value = (+e.target.value).toFixed(2);}});

    cul.addEventListener("blur", (e) => {
    if (!e.target.value) {
        e.target.value = 15;}});

    coe.addEventListener("blur", (e) => {
    if (!e.target.value) {
        e.target.value = 2;}});

    prp.addEventListener("blur", (e) => {
    if (!e.target.value) {
        e.target.value = (27840).toFixed(2);
    } else {
        e.target.value = (+e.target.value).toFixed(2);}});





    const delVaule = (e) => { // Удаление значения при focus
    e.target.value = "";};
    rate.addEventListener("focus", delVaule);
    md.addEventListener("focus", delVaule);
    nd.addEventListener("focus", delVaule);
    omd.addEventListener("focus", delVaule);
    ond.addEventListener("focus", delVaule);
    mhd.addEventListener("focus", delVaule);
    nhd.addEventListener("focus", delVaule);
    cul.addEventListener("focus", delVaule);
    coe.addEventListener("focus", delVaule);
    prp.addEventListener("focus", delVaule);

    const notNum = (e) => { // Запрет ввода не цифр
        if(isNaN(e.target.value) || e.key == "-" ||  e.key != "0"  &&  e.key != "1" && 
        e.key != "2" &&  e.key != "3" &&  e.key != "4" &&  e.key != "5" &&  e.key != "6" && 
         e.key != "7" &&  e.key != "8" &&  e.key != "9" &&  e.key != ".") 
         {e.target.value = e.target.value.slice(0, e.target.value.length-1);
   }};
    rate.addEventListener("keyup", notNum);
    md.addEventListener("keyup", notNum);
    nd.addEventListener("keyup", notNum);
    omd.addEventListener("keyup", notNum);
    ond.addEventListener("keyup", notNum);
    mhd.addEventListener("keyup", notNum);
    nhd.addEventListener("keyup", notNum);
    cul.addEventListener("keyup", notNum);
    coe.addEventListener("keyup", notNum);
    prp.addEventListener("keyup", notNum);

    const enter = (e) => { // blur при нажатии на Enter
        if(e.key == "Enter") {e.target.blur();}};
    rate.addEventListener("keyup", enter);
    md.addEventListener("keyup", enter);
    nd.addEventListener("keyup", enter);
    omd.addEventListener("keyup", enter);
    ond.addEventListener("keyup", enter);
    mhd.addEventListener("keyup", enter);
    nhd.addEventListener("keyup", enter);
    cul.addEventListener("keyup", enter);
    coe.addEventListener("keyup", enter);
    prp.addEventListener("keyup", enter);