'use strict';


const btn1 = document.getElementById("btn1"),
btn2 = document.getElementById("btn2");
const toggleVis = (element) => {element.style.display = "block";};
let someChanged = false,
numOfClick = 0;
        
        

btn1.addEventListener("click", () => {
    if(someChanged) {
    calc();
    createTable();
    toggleVis(zpList);
    toggleVis(btn2);
    numOfClick = 0;
    }
    addAnim(zpList);
    someChanged = false;
    numOfClick++;
    if(numOfClick > 20) {
        alert("Ты шо, больной? o_0");
        btn1.disabled = true;
    }
});
btn2.addEventListener("click", () => {const date = new Date().toLocaleDateString(); saveSvg(zpList, `Зарплата ${date}.svg`)});


const addAnim = (element) => { //Анимация появления
    setTimeout(() => {element.classList.add("anim");});
    element.classList.remove("anim");

};

    const toZero = (e) => { // К нулю при blur
    if (!e.target.value) {e.target.value = 0;} someChanged = true;};
    md.addEventListener("blur", toZero);
    nd.addEventListener("blur", toZero);
    omd.addEventListener("blur", toZero);
    ond.addEventListener("blur", toZero);
    mhd.addEventListener("blur", toZero);
    nhd.addEventListener("blur", toZero);
    fnp.addEventListener("blur", toZero);

    rate.addEventListener("blur", (e) => {
    if(!e.target.value) {
        e.target.value = (239).toFixed(2);
    } else {
        e.target.value = (+e.target.value).toFixed(2);
    }
    someChanged = true;
    });

    cul.addEventListener("blur", (e) => {
        if (!e.target.value) {
            e.target.value = 15;
        }
        someChanged = true;
    });

    coe.addEventListener("blur", (e) => {
        if (!e.target.value) {
            e.target.value = 2;
        }
        someChanged = true;
    });

    prp.addEventListener("blur", (e) => {
        if (!e.target.value) {
            e.target.value = (27840).toFixed(2);
        } else {
            e.target.value = (+e.target.value).toFixed(2);
        }
        someChanged = true;
    });





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
    fnp.addEventListener("focus", delVaule);

    const notNum = (e) => { // Запрет ввода не цифр
        if(Number.isNaN(+e.target.value) || e.key == "-" || e.target.value<0) 
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
    fnp.addEventListener("keyup", notNum);

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
    fnp.addEventListener("keyup", enter);


    const btnStatus = () => {       //Активность кнопки при отсутствии ночных или дневных смен
        if(md.value > 0 || nd.value > 0) 
    {btn1.disabled=false;} 
    else{btn1.disabled=true;}};
    md.addEventListener("keyup", btnStatus);
    nd.addEventListener("keyup", btnStatus);
    md.addEventListener("blur", btnStatus);
    nd.addEventListener("blur", btnStatus);





sch.forEach(radio => {
    radio.addEventListener("change", () => {someChanged = true;});
});
lms.forEach(radio => {
    radio.addEventListener("change", () => {someChanged = true;});
});
lvl.forEach(radio => {
    radio.addEventListener("change", () => {someChanged = true;});
});
ms.addEventListener("change", () => {
    someChanged = true;
});

// document.querySelector("td").addEventListener("select", () => {
// console.log("fdxs");
// });