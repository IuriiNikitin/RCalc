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
        wh: "", //Количество ВСЕХ часов
        oh: "", //Сверхурочные часы
        eh: "", //Вечерние часы
        nh: "", //Ночные часы
        pw: "", //Сдельная оплата труда
    };

    function calcDays() {
        ZP.allmd = +md.value + (+omd.value);
        ZP.allnd = +nd.value + (+ond.value);
    }

    function calcWh() {
        ZP.wh = (ZP.allmd) * 12 + (ZP.allnd) * 10.7;
    }

    function calcOh() {
        ZP.oh = (+omd.value) * 12 + (+ond.value) * 10.7;
    }

    function calcEh() {
        ZP.eh = (ZP.allmd * 3.7) + (ZP.allnd * 2);
    }

    function calcNh() {
        ZP.nh = ZP.allnd * 7.5;
    }

    function calcPw() {
        ZP.pw = ZP.wh * (+rate.value);
    }