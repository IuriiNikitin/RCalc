'use strict';

const tableWrapper = document.querySelector(".tableWrapper"),
    btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    night = document.querySelectorAll(".night"),
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
    saveSvg(zpList, `Зарплата ${date}.svg`)
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
const notNum = (e) => { // Запрет ввода не цифр
    if (Number.isNaN(+e.target.value) || e.key == "-" || e.key == "e" || e.target.value < 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1);

    }
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
mdg.value = md.value;
};
const ndgVal = () => {
    ndg.value = nd.value;
    };

tableWrapper.addEventListener("focusout", (e) => {
    if (e.target && e.target.matches("input.zero[type='number']")) {
        toZero(e, 0);
    }
    if (e.target && e.target.matches("input#rate[type='number']")) {
        toZero(e, (239).toFixed(2), true);
    }
    if (e.target && e.target.matches("input#mdg[type='number']")) {
        toZero(e, md.value);
        if(+mdg.value < +md.value) {
            mdg.value = +md.value;
        }
    }
    if (e.target && e.target.matches("input#ndg[type='number']")) {
        toZero(e, nd.value);
        if(+ndg.value < +nd.value) {
            ndg.value = +nd.value;
        }
    }
    if (e.target && e.target.matches("input#cul[type='number']")) {
        toZero(e, 15);
    }
    if (e.target && e.target.matches("input#coe[type='number']")) {
        if(ms.checked) {
            toZero(e, 2);
        } else {
            toZero(e, 1.2);
        }
        
    }
    if (e.target && e.target.matches("input#prp[type='number']")) {
        toZero(e, (27840).toFixed(2), true);
    }
});
tableWrapper.addEventListener("focusin", (e) => {
    if (e.target && e.target.matches("input[type='number']")) {
        delVaule(e);
    }
});
tableWrapper.addEventListener("keyup", (e) => {
    if (e.target && e.target.matches("input[type='number']")) {
        notNum(e);
        enter(e);
    }
});


    tableWrapper.addEventListener("keyup", (e) => {
    if (e.target && e.target.matches("input#md[type='number']" )) {
        btnStatus();
        mdgVal();
    }
    if (e.target && e.target.matches("input#nd[type='number']" )) {
        btnStatus();
        ndgVal();
    }
}); 


tableWrapper.addEventListener("focusout", (e) => {
    if (e.target && e.target.matches("input#md[type='number']" )) {
        btnStatus();
        mdgVal();

    }
    if (e.target && e.target.matches("input#nd[type='number']" )) {
        btnStatus();
        ndgVal();
    }
});

tableWrapper.addEventListener("change", (e) => {
    if (e.target && e.target.matches("input[name='sch']")) {
        if (e.target.value == 14) {
            night.forEach(row => {
                hideElement(row);
                nd.value = 0;
                ndg.value = 0;
                btnStatus();
            });
        }
        if (e.target.value == 16) {
            night.forEach(row => {
                showRow(row);
                
            });
        }

    }
    if (e.target && e.target.matches("input[type='checkbox']")) {
        if (ms.checked) {
            coe.value = 2;
        } else {
            coe.value = 1.2;
        }
    }

    if(e.target && e.target.matches("input[type='radio'],input[type='checkbox']")) {
        someChanged = true;
    }
});


