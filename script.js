'use strict';

const rate = document.getElementById("rate"), //Ставка
    md = document.getElementById("md"), // Дневные  смены
    nd = document.getElementById("nd"), //Ночные смены
    omd = document.getElementById("omd"), //Сверхурочные дневные
    ond = document.getElementById("ond"), //Сверхурочные ночные
    ms = document.getElementById("ms"), //Многостаночка
    lms = document.getElementsByName("lms"), //Выслуга
    lvl = document.getElementsByName("lvl"), //Разряд
    cul = document.getElementById("cul"), //Культура
    coe = document.getElementById("coe"), //Коэффициент
    prp = document.getElementById("prp"); //Аванс
    
  
    const ZP = {
        allmd: "", //Всего Дневных смен
        allnd: "", //Всего Ночных смен
        wh: "", //Отработанное время
        oh: "", //Сверхурочные часы (Работа в выходные дни)
        pwh: "", //Одностаночные часы
        msh: "", //Многостаночные часы
        eh: "", //Вечерние часы
        nh: "", //Ночные часы
        ohm: "", //Доплата за работу в выходные дни
        ehm: "", //Доплата за Вечерние часы
        nhm: "", //Доплата за Ночные часы
        pw: "", //Сдельная оплата труда
        lms: "", //Вознаграждение за выслугу лет
        lvl: "", //Надбавка за разряд
        ms: "", //Оплата за многостаночное обслуживание
        wa: "", //Премия рабочим
        cul: "" //Премия за культуру производства
    };

    function calcDays() {
        ZP.allmd = +md.value + (+omd.value);
        ZP.allnd = +nd.value + (+ond.value);
    }

    function calcWh() {
        ZP.wh = Math.round(((ZP.allmd * 11.7) + (ZP.allnd * 11)) * 100) / 100;
    }

    function calcOh() {
        ZP.oh = (+omd.value * 11.7) + (+ond.value * 11);
    }

    function calcEh() {
        ZP.eh = Math.round(((ZP.allmd * 3.7) + (ZP.allnd * 2)) * 100) / 100;
    }

    function calcNh() {
        ZP.nh = ZP.allnd * 7.5;
    }

    function calcMsh() {
        ZP.msh = Math.round((ZP.wh * (+coe.value - 1)) * 100) / 100;
    }
    function calcPwh() {
        // ZP.pwh = Math.round((ZP.wh * (+coe.value)) * 100) / 100;
        ZP.pwh = +(ZP.wh * (+coe.value)).toFixed(2);
    }

    function calcOhm() {
        ZP.ohm = ZP.oh * +rate.value;
    }

    function calcEhm() {
        ZP.ehm = +(ZP.eh * (+rate.value * 0.2)).toFixed(2); // 20% от ставки
    }

    function calcNhm() {
        ZP.nhm = +(ZP.nh * (+rate.value * 0.4)).toFixed(2); // 40% от ставки
    }

    function calcPw() {
        if (ms.checked) {
            calcMsh();
            ZP.pw = Math.round((ZP.wh * (+rate.value)) * 100) / 100;
        } else {
            calcPwh();
            ZP.pw = Math.round((ZP.pwh * (+rate.value)) * 100) / 100;
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
    ZP.ms = Math.round(((ZP.msh * 0.75) * +rate.value) * 100) / 100;
}

function calcWa() {
    ZP.wa = Math.round(((ZP.pw + ZP.ms) * 0.3) * 100) / 100;
}

function calcCul() {
    ZP.cul = Math.round(((ZP.pw + ZP.ms) * (+cul.value / 100)) * 100) / 100;
}
function calc() {
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
    calcMs();
    calcWa();
    calcCul();
    console.log(ZP);
}