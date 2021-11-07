'use strict';

const tableWrapper = document.querySelector(".tableWrapper"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    night = document.querySelectorAll(".night"),
    days = document.querySelectorAll(".days"),
    dayhours = document.querySelectorAll(".dayhours"),
    nights = document.querySelectorAll(".nights"),
    nighthours = document.querySelectorAll(".nighthours"),
    nighthd =  document.querySelector(".nighthd"),
    nighthourshd = document.querySelector(".nighthourshd"),
    mhg = document.getElementById("mhg"),
    nhg =document.getElementById("nhg"),
    mh = document.getElementById("mh"),
    nh =document.getElementById("nh"),
    showElement = (element) => {
        element.classList.remove("hide");
        element.classList.add("show");
    },
    showRow = (element) => {
        element.classList.remove("hide");
        element.classList.add("showRow");
    },
    hideElement = (element) => {
        element.classList.remove("show");
        element.classList.remove("showRow");
        element.classList.add("hide");
    };
let someChanged = false,
    numOfClick = 0;

btn1.addEventListener("click", () => {
    if (someChanged) {
        calc();
        createTable();
        showElement(zpList);
        numOfClick = 0;
    }
    addAnim(zpList);
    someChanged = false;
    numOfClick++;
    if (numOfClick > 20) {
        alert("Ты шо, больной? o_0");
        btn1.disabled = true;
    }
    btn2.disabled = false;
});
btn2.addEventListener("click", () => {
    const date = new Date().toLocaleDateString();
    saveSvg(zpList, `Зарплата ${date}.svg`);
});
const addAnim = (element) => { //Анимация появления
    setTimeout(() => {
        element.classList.add("anim");
    });
    element.classList.remove("anim");

};
const toZero = (e, value1, fixed) => { // К value1 при blur, fixed(2) введённое значение
    if (!e.target.value) {
        e.target.value = value1;
    } else if (fixed) {
        e.target.value = (+e.target.value).toFixed(2);
    }
    someChanged = true;
};
const delVaule = (e) => { // Удаление значения при focus
    e.target.value = "";
};
const enter = (e) => { // blur при нажатии на Enter
    if (e.key == "Enter") {
        e.target.blur();
    }
};
const btnStatus = () => { //Активность кнопки при отсутствии ночных или дневных смен
    if (md.value > 0 || nd.value > 0) {
        btn1.disabled = false;
    } else {
        btn1.disabled = true;
    }
};
const mdgVal = () => {
    mdg.value = Math.ceil(md.value);
};
const ndgVal = () => {
    ndg.value = Math.ceil(nd.value);
};
const mhgVal = () =>{
     mhg.value = mh.value;
};
const nhgVal = () =>{
    nhg.value = nh.value;
};
function convertHours(convertItem, writePlace, element, hoursInDay) {
    // convertItem что конвертируем
    // writePlace куда пишем
    // element текущий элемент
    // hoursInDay количество часов в дне для конвертации
    convertItem.forEach((hours, i) => {
        if (hours == element) {
            writePlace[i].value = roundHours(hours.value / hoursInDay);
        }
        });
}
function convertDays(convertItem, writePlace, element, hoursInDay) {
    // convertItem что конвертируем
    // writePlace куда пишем
    // element текущий элемент
    // hoursInDay количество часов в дне для конвертации
    convertItem.forEach((day, i) => {
        if (day == element) {
            writePlace[i].value = round(day.value * hoursInDay);
        }
        });

}
function roundHours(value) {
    value = (Math.round(value * 10000000000000)) / 10000000000000;
    return value;
}
tableWrapper.addEventListener("focusin", (e) => {
    if (e.target && e.target.matches("input.delvalue[type='number']")) {
        delVaule(e);
    }
    if (e.target && e.target.matches("input.dayhours[type='number']")) {
        if(+e.target.value == 0){
            delVaule(e);
        }}
    if (e.target && e.target.matches("input.nighthours[type='number']")) {
        if(+e.target.value == 0){
            delVaule(e);
    }}
    // if (e.target && e.target.matches("input#mh[type='number']")) {
    //     mhgVal();
    // }
    // if (e.target && e.target.matches("input#nh[type='number']")) {
    //     nhgVal();
    // }

});
tableWrapper.addEventListener("keyup", (e) => {
    if (e.target && e.target.matches("input[type='number']")) {
        btnStatus();
        enter(e);
    }
    if (e.target && e.target.matches("input#md[type='number']" )) {
        btnStatus();
        mdgVal();
        convertDays(days, dayhours, e.target, 11.7);
        mhgVal();
    }
    if (e.target && e.target.matches("input#nd[type='number']" )) {
        btnStatus();
        ndgVal();
        convertDays(nights, nighthours, e.target, 11);
        nhgVal();
}});
tableWrapper.addEventListener("focusout", (e) => {

    if (e.target && e.target.matches("input.zero[type='number']")) {
        toZero(e, 0);
    }
    if (e.target && e.target.matches("input#rate[type='number']")) {
        toZero(e, (251).toFixed(2), true);
    }
    if (e.target && e.target.matches("input#cul[type='number']")) {
        toZero(e, 15);
    }
    if (e.target && e.target.matches("input#coe[type='number']")) {
        if (ms.checked) {
            toZero(e, 2);
        } else {
            toZero(e, 1.2);
        }
    }
    if (e.target && e.target.matches("input#prp[type='number']")) {
        toZero(e, (27840).toFixed(2), true);
    }
    if (e.target && e.target.matches("input#md[type='number']")) {
        btnStatus();
        mdgVal();
        const mhgTimer = setTimeout(mhgVal, 100);
    }
    if (e.target && e.target.matches("input#nd[type='number']")) {
        btnStatus();
        ndgVal();
        const nhgTimer = setTimeout(nhgVal, 100);
    }
    if (e.target && e.target.matches("input#mdg[type='number']")) {
        toZero(e, Math.round(md.value));
        if (+mdg.value < +md.value) {
            mdg.value = Math.ceil(+md.value);
        }
    }
    if (e.target && e.target.matches("input#ndg[type='number']")) {
        toZero(e, Math.round(nd.value));
        if (+ndg.value < +nd.value) {
            ndg.value = Math.ceil(+nd.value);
        }
    }
    if (e.target && e.target.matches("input#mhg[type='number']")) {
        if(mhg.value < mh.value) {
            mhg.value = mh.value;
        }
    }
    if (e.target && e.target.matches("input#nhg[type='number']")) {
        if(nhg.value < nh.value) {
            nhg.value = nh.value;
        }
    }
    if (e.target && e.target.matches("input.days[type='number']")) {
        convertDays(days, dayhours, e.target, 11.7);
    }
    if (e.target && e.target.matches("input.nights[type='number']")) {
        convertDays(nights, nighthours, e.target, 11);
    }
    if (e.target && e.target.matches("input.nighthd[type='number']")) {
        nighthourshd.value = round(nighthd.value * 7);
    }
    if (e.target && e.target.matches("input.dayhours[type='number']")) {
        convertHours(dayhours, days, e.target, 11.7);
        btnStatus();
    }
    if (e.target && e.target.matches("input.nighthours[type='number']")) {
        convertHours(nighthours, nights, e.target, 11);
        btnStatus();
    }
    if (e.target && e.target.matches("input.nighthourshd[type='number']")) {
        nighthd.value = nighthourshd.value / 7;
    }
});
tableWrapper.addEventListener("change", (e) => {
    if (e.target && e.target.matches("input[name='sch']")) {
        if (e.target.value == 14) {
            night.forEach(row => {
                hideElement(row);});
            hideElement(night[0].nextElementSibling);
            hideElement(night[1].nextElementSibling);
            nd.value = 0;
            ndg.value = 0;
            nighthours[0].value = 0;
            nighthours[1].value = 0;
            btnStatus();
        }
        if (e.target.value == 16) {
            night.forEach(row => {
                showRow(row);
            });}}

    if (e.target && e.target.matches("input[type='checkbox']")) {
        if (ms.checked) {
            coe.value = 2;
        } else {
            coe.value = 1.2;
        }}
    if(e.target && e.target.matches("input[type='radio'],input[type='checkbox']")) {
        someChanged = true;
    }
});
tableWrapper.addEventListener("input", (e) => { //Запрет ввода не цифр
    if (e.target && e.target.matches("input[type='number']")) {
        e.target.value = e.target.value.replace(/[^\d\.]/g, "");

        }
});
tableWrapper.addEventListener("click", (e) => {
    const nextInput = e.target.nextElementSibling,
    previousInput = e.target.previousElementSibling;

    if(e.target && e.target.matches('.input-number__minus')){
        if(nextInput.value > 0){
            nextInput.value = +nextInput.value - 1;
            someChanged = true;}
    }
    if(e.target && e.target.matches('.input-number__plus')){
        previousInput.value = +previousInput.value + 1;
        someChanged = true;
    }
    if(e.target && e.target.matches('.input-number__plus') || e.target.matches('.input-number__minus')){

if(nextInput && nextInput.classList.contains("dayhours") || previousInput && previousInput.classList.contains("dayhours")) {
convertHours(dayhours, days, nextInput, 11.7);
convertHours(dayhours, days, previousInput, 11.7);
    }

if (nextInput && nextInput.classList.contains("nighthours") || previousInput && previousInput.classList.contains("nighthours")) {
    convertHours(nighthours, nights, nextInput, 11);
    convertHours(nighthours, nights, previousInput, 11);
    }
    if (nextInput && nextInput.classList.contains("nighthourshd") || previousInput && previousInput.classList.contains("nighthourshd")) {
        nighthd.value = nighthourshd.value / 7;
    }

    if (nextInput && nextInput.matches("#mh") || previousInput && previousInput.matches("#mh")) {
        btnStatus();
        mdgVal();
        mhg.value = roundHours(+mdg.value * 11.7);
    }
    if (nextInput && nextInput.matches("#nh") || previousInput && previousInput.matches("#nh")) {
        btnStatus();
        ndgVal();
        nhg.value = roundHours(+ndg.value * 11);
    }
    if (nextInput && nextInput.matches("#mhg") || previousInput && previousInput.matches("#mhg")) {
        if(+mhg.value <= +mh.value){
            mhg.value = mh.value;
            mdg.value = md.value;
        }
    }
    if (nextInput && nextInput.matches("#nhg") || previousInput && previousInput.matches("#nhg")) {
        if(+nhg.value <= +nh.value){
            nhg.value = nh.value;
            ndg.value = nd.value;
        }
    }

}
    if(e.target && e.target.matches(".altDays")) {
        hideElement(e.target.parentElement.parentElement.parentElement);
        showRow(e.target.parentElement.parentElement.parentElement.nextElementSibling);
    }
    if(e.target && e.target.matches(".altHours")) {
        hideElement(e.target.parentElement.parentElement.parentElement);
        showRow(e.target.parentElement.parentElement.parentElement.previousElementSibling);
    }
});