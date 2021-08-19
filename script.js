'use strict';

const rate = document.getElementById("rate"), //Ставка
    md = document.getElementById("md"), // Дневныые  смены
    nd = document.getElementById("nd"), //Ночные смены
    mowd = document.getElementById("mowd"), //Сверхурочные дневные
    nowd = document.getElementById("nowd"), //Сверхурочные ночные
    ms = document.getElementById("ms"), //Многостаночка
    lms = document.getElementsByName("lms"), //Выслуга
    lvl = document.getElementsByName("lvl"), //Разряд
    cul = document.getElementById("cul"), //Культура
    coe = document.getElementById("coe"), //Коэффициент
    prp = document.getElementById("prp"); //Аванс



const wt = (+md.value + +mowd.value) * 12 + (+nd.value + +nowd.value) * 10.7;