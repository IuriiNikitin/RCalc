'use strict';
const omh = document.getElementById("omh"), //Сверхурочные дневные часы
onh = document.getElementById("onh"), //Сверхурочные ночные часы
mhh = document.getElementById("mhh"), //Праздничные дневные часы
nhh = document.getElementById("nhh"); //Праздничные ночные часы

let link,
href = window.location.href,
search = "?";

function writeHistory() {
    search = "?";
    const history = {};
   
    let 
    schVal,
    msVal,
    lmsVal,
    lvlVal;
    sch.forEach((element, i) => {
        if(element.checked) {
    schVal = i;}});

    lms.forEach((element, i) => {
        if(element.checked) {
            lmsVal = i;}});

    lvl.forEach((element, i) => {
        if(element.checked) {
            lvlVal = i;}});

    if(ms.checked) {
        msVal = 1;
    } else {
        msVal = 0;
    }
    history.rate = rate.value;
    history.md = md.value;
    history.mh = mh.value;
    history.nd = nd.value;
    history.nh = nh.value;
    history.mdg = mdg.value;
    history.mhg = mhg.value;
    history.ndg = ndg.value;
    history.nhg = nhg.value;
    history.omd = omd.value;
    history.omh = omh.value;
    history.ond = ond.value;
    history.onh = onh.value;
    history.mhd = mhd.value;
    history.mhh = mhh.value;
    history.nhd = nhd.value;
    history.nhh = nhh.value;
    history.fnp = fnp.value;
    history.cul = cul.value;
    history.coe = coe.value;
    history.prp = prp.value;

    history.sch = schVal;
    history.ms = msVal;
    history.lms = lmsVal;
    history.lvl = lvlVal;

for(let key in history) {
    search += `${key}=${history[key]}&`;
}
search = search.slice(0, -1);
link = href + search;

console.log(link);

    // window.history.pushState('1', 'Title', search);
}
function readHistory() {
    const historyObj = {};
    const historyStr = window.location.search.substring(1);
    const historyArr = historyStr.split("&");

historyArr.forEach(item => {
    let param = item.split("=");
    historyObj[param[0]] = param[1];
});

rate.value = historyObj.rate;
md.value = historyObj.md;
mh.value = historyObj.mh;
nd.value = historyObj.nd;
nh.value = historyObj.nh;
mdg.value = historyObj.mdg;
mhg.value = historyObj.mhg;
ndg.value = historyObj.ndg;
nhg.value = historyObj.nhg;
omd.value = historyObj.omd;
omh.value = historyObj.omh;
ond.value = historyObj.ond;
onh.value = historyObj.onh;
mhd.value = historyObj.mhd;
mhh.value = historyObj.mhh;
nhd.value = historyObj.nhd;
nhh.value = historyObj.nhh;
fnp.value = historyObj.fnp;
cul.value = historyObj.cul;
coe.value = historyObj.coe;
prp.value = historyObj.prp;

sch[historyObj.sch].checked = true;
if(+historyObj.sch == 0) {
    sch14();
}
ms.checked = +historyObj.ms;
lms[historyObj.lms].checked = true;
lvl[historyObj.lvl].checked = true;
someChanged = true;
btnStatus();
}
if(window.location.search) {
    readHistory();
    window.history.pushState('1', 'Title', ".");
    // console.log("ссылка загружена");
}