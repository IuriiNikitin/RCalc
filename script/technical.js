'use strict';

const tableWrapper = document.querySelector(".tableWrapper"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    night = document.querySelectorAll(".night"),
    days = document.querySelectorAll(".days"),
    dayhours = document.querySelectorAll(".dayhours"),
    nights = document.querySelectorAll(".nights"),
    nighthours = document.querySelectorAll(".nighthours"),
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
        showElement(btn2);
        numOfClick = 0;
    }
    addAnim(zpList);
    someChanged = false;
    numOfClick++;
    if (numOfClick > 20) {
        alert("Ты шо, больной? o_0");
        btn1.disabled = true;
    }
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
mdg.value = Math.round(md.value);
};
const ndgVal = () => {
    ndg.value = Math.round(nd.value);
};

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

});
tableWrapper.addEventListener("keyup", (e) => {
    if (e.target && e.target.matches("input[type='number']")) {
        btnStatus();
        enter(e);
    }
    if (e.target && e.target.matches("input#md[type='number']" )) {
        btnStatus();
        mdgVal();
    }
    if (e.target && e.target.matches("input#nd[type='number']" )) {
        btnStatus();
        ndgVal();
 }});
tableWrapper.addEventListener("focusout", (e) => {

    if (e.target && e.target.matches("input.zero[type='number']")) {
        toZero(e, 0);
    }
    if (e.target && e.target.matches("input#rate[type='number']")) {
        toZero(e, (239).toFixed(2), true);
    }
    if (e.target && e.target.matches("input#mdg[type='number']")) {
        toZero(e, Math.round(md.value));
        if(+mdg.value < +md.value) {
            mdg.value = Math.round(+md.value);
        }}
    if (e.target && e.target.matches("input#ndg[type='number']")) {
        toZero(e, Math.round(nd.value));
        if(+ndg.value < +nd.value) {
            ndg.value = Math.round(+nd.value);
        }}
    if (e.target && e.target.matches("input#cul[type='number']")) {
        toZero(e, 15);
    }
    if (e.target && e.target.matches("input#coe[type='number']")) {
        if(ms.checked) {toZero(e, 2);
        } else {toZero(e, 1.2);}
        }
    if (e.target && e.target.matches("input#prp[type='number']")) {
        toZero(e, (27840).toFixed(2), true);
    }
    if (e.target && e.target.matches("input#md[type='number']" )) {
        btnStatus();
        mdgVal();
    }
    if (e.target && e.target.matches("input#nd[type='number']" )) {
        btnStatus();
        ndgVal();
    }
    if (e.target && e.target.matches("input.days[type='number']")) {
        days.forEach((day, i) => {
            if (day == e.target) {
                dayhours[i].value = round(days[i].value * 11.7);
            }
        });
    }
    if (e.target && e.target.matches("input.nights[type='number']")) {
        nights.forEach((night, i) => {
            if (night == e.target) {
                nighthours[i].value = round(nights[i].value * 11);
            }
        });
    }
if (e.target && e.target.matches("input.dayhours[type='number']")) {
    dayhours.forEach((hours, i) => {
        if (hours == e.target) {
            days[i].value = hours.value / 11.7;
            btnStatus();
        }
    });
}
if (e.target && e.target.matches("input.nighthours[type='number']")) {
    nighthours.forEach((hours, i) => {
        if (hours == e.target) {
            nights[i].value = hours.value / 11;
            btnStatus();
        }
    });
}
});
tableWrapper.addEventListener("change", (e) => {
    if (e.target && e.target.matches("input[name='sch']")) {
        if (e.target.value == 14) {
            night.forEach(row => {
                hideElement(row);
                nd.value = 0;
                ndg.value = 0;
                nighthours[0].value = 0;
                btnStatus();
            });}
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
        // e.target.value = e.target.value.replace(/[^\d]/g, '');
        // e.target.value = e.target.value.replace(/[^0-9.]/g, "");
        // e.target.value = e.target.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
        // e.target.value = e.target.value.replace(/[^0-9\.\,]/g, '');
        e.target.value = e.target.value.replace(/[^\d\.]/g, "");
        // console.log(e.target.value);

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
    // dayhours.forEach((hours, i) => {
    //     if (hours == nextInput || hours == previousInput) {
    //         days[i].value = hours.value / 11.7;
    //     }
    // });
convertHours(dayhours, days, nextInput, 11.7);
convertHours(dayhours, days, previousInput, 11.7);

    }

if (nextInput && nextInput.classList.contains("nighthours") || previousInput && previousInput.classList.contains("nighthours")) {
    nighthours.forEach((hours, i) => {
        if (hours == nextInput || hours == previousInput) {
            nights[i].value = hours.value / 11;
        }
        });
        }
    
        btnStatus();
        mdgVal();
        ndgVal();
}

});




function convertHours(convertItem, writePlace, element, hoursInDay) {
// convertItem что конвертируем
// writePlace куда пишем
// element текущий элемент
// hoursInDay количество часов в дне для конвертации
convertItem.forEach((hours, i) => {
    if (hours == element) {
        writePlace[i].value = hours.value / hoursInDay;
    }
    });


}