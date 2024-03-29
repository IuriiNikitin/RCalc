'use strict';

const rate = document.getElementById("rate"), //Ставка
    sch = document.getElementsByName("sch"), //График
    md = document.getElementById("md"), // Дневные  смены
    nd = document.getElementById("nd"), //Ночные смены
    mdg = document.getElementById("mdg"), // Дневные  смены по графику
    ndg = document.getElementById("ndg"), //Ночные смены по графику
    omd = document.getElementById("omd"), //Сверхурочные дневные
    ond = document.getElementById("ond"), //Сверхурочные ночные
    mhd = document.getElementById("mhd"), //Праздничные дневные
    nhd = document.getElementById("nhd"), //Праздничные ночные
    fnp = document.getElementById("fnp"), //Фонд начальника подразделения
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
       time.allmd = +md.value + (+omd.value); // Все дневные смены (вкл сверхурочные)
       time.allnd = +nd.value + (+ond.value); // Все ночные смены (вкл сверхурочные)
       time.alld0 = +md.value + (+nd.value); // Все смены (без сверхурочных)
       time.alld = time.allmd + time.allnd; // Все смены
       if (+omd.value || +ond.value) {
        time.allod = (+omd.value) + (+ond.value); //Все сверхурочные дни
    }
       if (+mhd.value || +nhd.value) {
        time.allhd = (+mhd.value) + (+nhd.value); // Все праздничные смены
    }
       if (time.allhd) {
        time.wdlvl = time.alld0 - time.allhd; // Дни надбавки за разряд (все смены без сверхурочных и праздничных)
       } else {
        time.wdlvl = time.alld0;
       }
};

const
    calcWh0 = () => {time.wh0 = round((+md.value * 11.7) + (+nd.value * 11));},
    calcWh = () => {time.wh = round((time.allmd * 11.7) + (time.allnd * 11));},
    calcEh = () => {time.eh = round((time.allmd * 3.7) + (time.allnd * 2));},
    calcNh = () => {time.nh = round((+nd.value * 7.5) + (+ond.value * 8));},
    calcMsh = () => {time.msh = round(time.wh * (+coe.value - 1));},
    calcPwh = () => {time.pwh = round(time.wh * (+coe.value));},
    calcHdh = () => {time.hdh = round((+mhd.value * 11.7) + (+nhd.value * 11));},
    calcOh = () => {time.oh = round((+omd.value * 11.7) + (+ond.value * 11));},
    calcWhlvl = () => {time.whlvl = round(time.wh - ((+mhd.value * 11.7) + (+nhd.value * 11) + (+omd.value * 11.7) + (+ond.value * 11)));};
    
function calcOhm() {
    if (time.allod) {
        calcOh();
        ZP.ohm = round(time.oh * +rate.value);
}}

function calcHdm() {
    if (time.allhd) {
        calcHdh();
        ZP.hdm = round(time.hdh * rate.value);
}}

function calcRadio(radio, writeObj, key) {
    if (typeof(writeObj) == "object") {
    radio.forEach(btn => {
        if (btn.selected && +btn.value) {
            writeObj[key] = +btn.value;
        }});} 
        else {
    let rez = 0;
    radio.forEach(btn => {
        if (btn.selected && +btn.value) {
            rez = +btn.value;
        }});
    return rez;
}}

function calcLvl() {
            const lvlVal = calcRadio(lvl);
            if (lvlVal) {
                const mh0 = (+mdg.value * 11.7), //Дневные часы по графику
                    nh0 = (+ndg.value * 11), // Ночные часы по графику
                    gh = nh0 + mh0,  //Все часы по графику
                    dayPercent = mh0/(gh/100), //Процент дневных часов
                    nightPercent = nh0/(gh/100), // Процент ночных часов
                    dayMoney = lvlVal * (dayPercent / 100), //Деньги за все дневные смены
                    nightMoney = lvlVal * (nightPercent / 100), //Деньги за все ночные смены
                    oneDayMoney = round(dayMoney / +mdg.value), //Деньги за одну дневную смену
                    oneNightMoney = round(nightMoney / +ndg.value), //Деньги за одну ночную смену
                    oneDayHourMoney = oneDayMoney / 11.7, //Деньги за один дневной час
                    oneNightHourMoney = oneNightMoney / 11; //Деньги за один ночной час
                    
                let lvlm;
                if (sch[0].checked || ndg.value == 0) {
                    lvlm = round(lvlVal / +mdg.value) * +md.value;
                    // console.log("Посчитано как 14 график");
                } else {
                    lvlm = round(oneDayHourMoney * (+md.value * 11.7)) + round(oneNightHourMoney * (+nd.value * 11));
                    // console.log("Посчитано как 16 график");
                }
                if (lvlm > lvlVal) {
                    lvlm = lvlVal;
                }
                ZP.lvl = lvlm;
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
}}

    const calcEhm = () => {if(sch[1].checked){ calcEh();ZP.ehm = round((time.eh * (+rate.value * 0.2)));}}, // 20% от ставки
    calcNhm = () => {if (time.allnd) {calcNh(); ZP.nhm = round((time.nh * (+rate.value * 0.4)));}}, // 40% от ставки 
    calcMs = () => {ZP.ms = round((time.msh * 0.75) * +rate.value);},
    calcFnp = () => {if(+fnp.value){ZP.fnp = +fnp.value;}},
    calcWa = () => {ZP.wa = (ms.checked) ? round((ZP.pw + ZP.ms) * 0.3) : round(ZP.pw * 0.3);},
    calcCul = () =>  {if(+cul.value){ZP.cul = (ms.checked) ? round((ZP.pw + ZP.ms) * (+cul.value / 100)) : round(ZP.pw * (+cul.value / 100))}},
    calcItems = () => {items = Object.keys(ZP).length;},
    calcZpd = () => {ZP.final.zpd = round(sum(ZP));}, //Грязная  зарплата
    calcTax = () => {ZP.final.tax = Math.trunc(ZP.final.zpd * (percent.nfl / 100));}, //Налог
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
}}}

function sum(obj) {
        let rez = 0;
        for(let key in obj) {
            if(!isNaN(obj[key])){
                rez += obj[key];
            }}
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
}}}

function space(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) != "object") {
            
            switch(obj[key].length) {
                case 7:
                    obj[key] = obj[key].slice(0, 1) + " " + obj[key].slice(1);
                    break;
                case 8:
                    obj[key] = obj[key].slice(0, 2) + " " + obj[key].slice(2);
                    break;
                case 9:
                    obj[key] = obj[key].slice(0, 3) + " " + obj[key].slice(3);
                    break;
            }
        } else{
            space(obj[key]);
}}}

function calc() {
    clear(time);
    clear(ZP);
    calcDays();
    calcWh();
    calcWh0();
    calcOhm();
    calcHdm();
    calcWhlvl();
    calcEhm();
    calcNhm();
    calcPw();
    calcFnp();
    calcWa();
    calcCul();    
    calcRadio(lms, ZP, "lms");
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
    // console.log("Зарплата посчитана");
}