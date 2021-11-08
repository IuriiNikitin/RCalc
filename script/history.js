'use strict';
const omh = document.getElementById("omh"), //Сверхурочные дневные часы
onh = document.getElementById("onh"), //Сверхурочные ночные часы
mhh = document.getElementById("mhh"), //Праздничные дневные часы
nhh = document.getElementById("nhh"); //Праздничные ночные часы


function writeHistory() {
    let schVal;
    sch.forEach((element, i) => {
if(element.checked) {
    schVal = i;
}
    });
    window.history.pushState('1', 'Title', `?rate=${rate.value}&sch=${schVal}&md=${md.value}&mh=${mh.value}&nd=${nd.value}&nh=${nh.value}&mdg=${mdg.value}&mhg=${mhg.value}&ndg=${ndg.value}&nhg=${nhg.value}&omd=${omd.value}&omh=${omh.value}&ond=${ond.value}&onh=${onh.value}&mhd=${mhd.value}&mhh=${mhh.value}&nhd=${nhd.value}&nhh=${nhh.value}`);
}