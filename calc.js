'use strict';

const rate = document.getElementById("rate"), //Ставка
    md = document.getElementById("md"), // Дневные  смены
    nd = document.getElementById("nd"), //Ночные смены
    omd = document.getElementById("omd"), //Сверхурочные дневные
    ond = document.getElementById("ond"), //Сверхурочные ночные
    mhd = document.getElementById("mhd"), //Праздничные дневные
    nhd = document.getElementById("nhd"), //Праздничные ночные
    ms = document.getElementById("ms"), //Многостаночка
    lms = document.getElementsByName("lms"), //Выслуга
    lvl = document.getElementsByName("lvl"), //Разряд
    cul = document.getElementById("cul"), //Культура
    coe = document.getElementById("coe"), //Коэффициент
    prp = document.getElementById("prp"); //Аванс


    const time = {},
        percent = {
            nfl: 13, //Налог с физического лица
        },
        ZP = {
            final: {}
        };


    let items = ""; //Количество строчек зарплаты
   
   
   
   


const calcDays = () => {
    time.allmd = +md.value + (+omd.value);
    time.allnd = +nd.value + (+ond.value);
    time.alld = time.allmd + time.allnd;
};

    function calcAllod() {
        if(+omd.value || +ond.value) {
            time.allod = (+omd.value) + (+ond.value);
        }
    }

    const calcWh = () => {time.wh = Math.round(((time.allmd * 11.7) + (time.allnd * 11)) * 100) / 100;},
    calcOh = () => {time.oh = Math.round(((+omd.value * 11.7) + (+ond.value * 11)) * 100) / 100;},
    calcEh = () => {time.eh = Math.round(((time.allmd * 3.7) + (time.allnd * 2)) * 100) / 100;},
    calcNh = () => {time.nh = time.allnd * 7.5;},
    calcMsh = () => {time.msh = Math.round((time.wh * (+coe.value - 1)) * 100) / 100;},
    calcPwh = () => {time.pwh = Math.round((time.wh * (+coe.value)) * 100) / 100;};
    
    
    function calcHdh() {
        if (ms.checked) {
            time.hdh = (+mhd.value * 11.7) + (+nhd.value * 7);
        } else {
            time.hdh = (+mhd.value * 11) + (+nhd.value * 7);
        }
    }



    function calcOhm() {
        if (+omd.value || +ond.value) {
            calcOh();
            ZP.ohm = Math.round((time.oh * +rate.value) * 100) / 100;
        }
    }

    function calcHdm() {
        if (+mhd.value || +nhd.value) {
            time.allhd = (+mhd.value) + (+nhd.value);
            calcHdh();
            ZP.hdm = Math.round((time.hdh * rate.value) * 100) / 100;
        }
    }

    const calcEhm = () => {ZP.ehm = +(time.eh * (+rate.value * 0.2)).toFixed(2);}; // 20% от ставки

    function calcNhm() {
        if (time.allnd) {
            calcNh();
            ZP.nhm = +(time.nh * (+rate.value * 0.4)).toFixed(2); // 40% от ставки
        }
    }

    function calcPw() {
        if (ms.checked) {
            calcMsh();
            calcMs();
            ZP.pw = Math.round((time.wh * (+rate.value)) * 100) / 100;
        } else {
            calcPwh();
            ZP.pw = Math.round((time.pwh * (+rate.value)) * 100) / 100;
        }
    }
function calcLms() {
    if (lms[0].checked) {} else if (lms[1].checked) {
        ZP.lms = +lms[1].value;
    } else if (lms[2].checked) {
        ZP.lms = +lms[2].value;
    }
}

function calcLvl() {
    if (lvl[0].checked) {} else if (lvl[1].checked) {
        ZP.lvl = +lvl[1].value;
    } else if (lvl[2].checked) {
        ZP.lvl = +lvl[2].value;
    }
}
const calcMs = () => {ZP.ms = Math.round(((time.msh * 0.75) * +rate.value) * 100) / 100;};

function calcWa() {
    if (ms.checked) {
        ZP.wa = Math.round(((ZP.pw + ZP.ms) * 0.3) * 100) / 100;
    } else {
        ZP.wa = Math.round((ZP.pw * 0.3) * 100) / 100;
    }
}

const calcCul = () => {if (ms.checked) {ZP.cul = Math.round(((ZP.pw + ZP.ms) * (+cul.value / 100)) * 100) / 100;} 
                       else {ZP.cul = Math.round((ZP.pw * (+cul.value / 100)) * 100) / 100;}};





    const calcItems = () => {items = Object.keys(ZP).length;},
    calcZpd = () => {ZP.final.zpd = (Math.round(sum(ZP) * 100)) / 100;}, //Грязная  зарплата
    calcTax = () => {ZP.final.tax = (Math.round(ZP.final.zpd * percent.nfl)) / 100;}, //Налог
    calcWit = () => {ZP.final.wit = ZP.final.tax + (+prp.value);},// Удержано
    calcZpc = () => {ZP.final.zpc = ZP.final.zpd - ZP.final.tax;},// Чистая  зарплата (без вычета аванса)
    calcZp = () => {ZP.final.zp = ZP.final.zpc - (+prp.value);};// Зарплата




    function clear(obj) {
        for (let key in obj) {
            if (typeof(obj[key]) != "object") {
                delete obj[key];
            }
            else {
                clear(obj[key]);
                }
            }
        }

    function sum(obj) {
        let rez = 0;
        for(let key in obj) {
            if(!isNaN(obj[key])){
                rez += obj[key];
            }
        }
        return rez;
    }



function calc() {
    clear(time);
    clear(ZP);
    calcDays();
    calcAllod();
    calcWh();
    calcEh();
    calcOhm();
    calcHdm();
    calcEhm();
    calcNhm();
    calcPw();
    calcWa();
    calcCul();
    calcLms();
    calcLvl();
    calcZpd();
    calcTax();
    calcWit();
    calcZpc();
    calcZp();
    calcItems();
    console.log(time, ZP);
}
// calc();