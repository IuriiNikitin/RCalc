'use strict';

const rate = document.getElementById("rate"), //Ставка
    sch = document.getElementsByName("sch"), //График
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
        percent = {nfl: 13},//Налог с физического лица
        ZP = {
        final: {}
        };


    let items = ""; //Количество строчек зарплаты
   
const calcDays = () => {
    time.allmd = +md.value + (+omd.value);
    time.allnd = +nd.value + (+ond.value);
    time.alld = time.allmd + time.allnd;};



const calcAllod = () => {if(+omd.value || +ond.value) {time.allod = (+omd.value) + (+ond.value);}},
    calcWh = () => {time.wh = round((time.allmd * 11.7) + (time.allnd * 11));},
    calcOh = () => {time.oh = round((+omd.value * 11.7) + (+ond.value * 11));},
    calcEh = () => {time.eh = round((time.allmd * 3.7) + (time.allnd * 2));},
    calcNh = () => {time.nh = time.allnd * 7.5;},
    calcMsh = () => {time.msh = round(time.wh * (+coe.value - 1));},
    calcPwh = () => {time.pwh = round(time.wh * (+coe.value));},
    calcHdh = () => {time.hdh = (ms.checked) ? (+mhd.value * 11.7) + (+nhd.value * 7) : (+mhd.value * 11) + (+nhd.value * 7);};
    
    

function calcOhm() {
    if (+omd.value || +ond.value) {
        calcOh();
        ZP.ohm = round(time.oh * +rate.value);
    }
}

function calcHdm() {
    if (+mhd.value || +nhd.value) {
        time.allhd = (+mhd.value) + (+nhd.value);
        calcHdh();
        ZP.hdm = round(time.hdh * rate.value);
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

function calcPw() {
    if (ms.checked) {
        calcMsh();
        calcMs();
        ZP.pw = round(time.wh * (+rate.value));
    } else {
        calcPwh();
        ZP.pw = round(time.pwh * (+rate.value));
    }
}

    const calcEhm = () => {if(sch[1].checked){ calcEh();ZP.ehm = round((time.eh * (+rate.value * 0.2)));}}, // 20% от ставки
    calcNhm = () => {if (time.allnd) {calcNh(); ZP.nhm = round((time.nh * (+rate.value * 0.4)));}}, // 40% от ставки 
    calcMs = () => {ZP.ms = round((time.msh * 0.75) * +rate.value);},
    calcWa = () => {ZP.wa = (ms.checked) ? round((ZP.pw + ZP.ms) * 0.3) : round(ZP.pw * 0.3);},
    calcCul = () =>  ZP.cul = (ms.checked) ? round((ZP.pw + ZP.ms) * (+cul.value / 100)) : round(ZP.pw * (+cul.value / 100)),
    calcItems = () => {items = Object.keys(ZP).length;},
    calcZpd = () => {ZP.final.zpd = round(sum(ZP));}, //Грязная  зарплата
    calcTax = () => {ZP.final.tax = Math.round(ZP.final.zpd * (percent.nfl / 100));}, //Налог
    calcWit = () => {ZP.final.wit = ZP.final.tax + (+prp.value);},// Удержано
    calcZpc = () => {ZP.final.zpc = round(ZP.final.zpd - ZP.final.tax);},// Чистая  зарплата (без вычета аванса)
    calcZp = () => {ZP.final.zp = round(ZP.final.zpc - (+prp.value));},// Зарплата
    calcPrp = () => {ZP.final.prp = +prp.value;};




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

function round(value) {
    value = (Math.round(value * 100))/100;
    return value;
}

function fixed(obj) {
    for(let key in obj) {
        if (typeof(obj[key]) != "object") {
            obj[key] = obj[key].toFixed(2);
        } else {
            fixed(obj[key]);
        }

    }
}
function space(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) != "object") {
            if (obj[key].length == 7) {
                obj[key] = obj[key].slice(0, 1) + " " + obj[key].slice(1);
            } else if (obj[key].length == 8) {
                obj[key] = obj[key].slice(0, 2) + " " + obj[key].slice(2);
            } else if (obj[key].length == 9) {
                obj[key] = obj[key].slice(0, 3) + " " + obj[key].slice(3);
            }
        } else{
            space(obj[key]);
        }
    }
}


function calc() {
    clear(time);
    clear(ZP);
    calcDays();
    calcAllod();
    calcWh();
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
    calcPrp();
    fixed(ZP);
    space(ZP);
    calcItems();
    // console.log(time, ZP);
}
