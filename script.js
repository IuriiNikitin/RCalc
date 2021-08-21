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
    
    const time = {
        // allmd: "", //Всего Дневных смен
        // allnd: "", //Всего Ночных смен
        // wh: "", //Отработанное время
        // oh: "", //Сверхурочные часы (Работа в выходные дни)
        // pwh: "", //Одностаночные часы
        // msh: "", //Многостаночные часы
        // eh: "", //Вечерние часы
        // nh: "", //Ночные часы
    };
    const ZP = {
        // ohm: "", //Доплата за работу в выходные дни
        // ehm: "", //Доплата за Вечерние часы
        // nhm: "", //Доплата за Ночные часы
        // pw: "", //Сдельная оплата труда
        // lms: "", //Вознаграждение за выслугу лет
        // lvl: "", //Надбавка за разряд
        // ms: "", //Оплата за многостаночное обслуживание
        // wa: "", //Премия рабочим
        // cul: "" //Премия за культуру производства
    };

    function clearTime() {
        for (let key in time) {
            delete time[key];
        }
    }
    function clearZP() {
        for (let key in ZP) {
            delete ZP[key];
        }
    }

    function calcDays() {
        time.allmd = +md.value + (+omd.value);
        time.allnd = +nd.value + (+ond.value);
    }

    function calcWh() {
        time.wh = Math.round(((time.allmd * 11.7) + (time.allnd * 11)) * 100) / 100;
    }

    function calcOh() {
        time.oh = Math.round(((+omd.value * 11.7) + (+ond.value * 11)) * 100) / 100;
    }

    function calcEh() {
        time.eh = Math.round(((time.allmd * 3.7) + (time.allnd * 2)) * 100) / 100;
    }

    function calcNh() {
        time.nh = time.allnd * 7.5;
    }

    function calcMsh() {
        time.msh = Math.round((time.wh * (+coe.value - 1)) * 100) / 100;
    }
    function calcPwh() {
        // time.pwh = Math.round((time.wh * (+coe.value)) * 100) / 100;
        time.pwh = +(time.wh * (+coe.value)).toFixed(2);
    }

    function calcOhm() {
        ZP.ohm = Math.round((time.oh * +rate.value) * 100) / 100;
    }

    function calcEhm() {
        ZP.ehm = +(time.eh * (+rate.value * 0.2)).toFixed(2); // 20% от ставки
    }

    function calcNhm() {
        ZP.nhm = +(time.nh * (+rate.value * 0.4)).toFixed(2); // 40% от ставки
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
        if(lms[0].checked) {
            ZP.lms = +lms[0].value;
        }
        else if(lms[1].checked) {
            ZP.lms = +lms[1].value;
        }
        else if(lms[2].checked) {
            ZP.lms = +lms[2].value;
        }
    }

    function calcLvl() {
        if(lvl[0].checked) {
            ZP.lvl = +lvl[0].value;
        }
        else if(lvl[1].checked) {
            ZP.lvl = +lvl[1].value;
        }
        else if(lvl[2].checked) {
            ZP.lvl = +lvl[2].value;
        }
    }
function calcMs() {
    ZP.ms = Math.round(((time.msh * 0.75) * +rate.value) * 100) / 100;
}

function calcWa() {
    if (ms.checked) {
        ZP.wa = Math.round(((ZP.pw + ZP.ms) * 0.3) * 100) / 100;
    } else {
        ZP.wa = Math.round((ZP.pw * 0.3) * 100) / 100;
    }
}

function calcCul() {
    if (ms.checked) {
        ZP.cul = Math.round(((ZP.pw + ZP.ms) * (+cul.value / 100)) * 100) / 100;
    } else {
        ZP.cul = Math.round((ZP.pw * (+cul.value / 100)) * 100) / 100;
    }
}

function calc() {
    clearTime();
    clearZP();
    calcDays();
    calcWh();
    calcOh();
    calcEh();
    calcNh();
    calcOhm();
    calcEhm();
    calcNhm();
    calcPw();
    calcLms();
    calcLvl();
    calcWa();
    calcCul();
    console.log(time, ZP);
}