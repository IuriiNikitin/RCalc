'use strict';
const omh = document.getElementById("omh"), //Сверхурочные дневные часы
onh = document.getElementById("onh"), //Сверхурочные ночные часы
mhh = document.getElementById("mhh"), //Праздничные дневные часы
nhh = document.getElementById("nhh"), //Праздничные ночные часы
spoiler = document.querySelectorAll("details");

let link,
href,
search = "?";

function writeHistory() {
    search = "?",
    href = window.location.href;
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
        if(element.selected) {
            lmsVal = i;}});

    lvl.forEach((element, i) => {
        if(element.selected) {
            lvlVal = i;}});

    if(ms.checked) {
        msVal = 1;
    } else {
        msVal = 0;
    }

    history.rate = rate.value;

    if(+md.value){
    history.md = md.value;
    }
    if(+nd.value) {
    history.nd = nd.value;
    }
    if(+mdg.value) {
    history.mdg = mdg.value;
    }
    if(+ndg.value) {
    history.ndg = ndg.value;
    }
    if(+omd.value) {
    history.omd = omd.value;
    }
    if(+ond.value) {
    history.ond = ond.value;
    }
    if(+mhd.value) {
    history.mhd = mhd.value;
    }
    if(+nhd.value) {
    history.nhd = nhd.value;
    }
    if(+fnp.value) {
    history.fnp = fnp.value;
    }
    if(+cul.value) {
    history.cul = cul.value;
    }

    history.coe = coe.value;

    if(+prp.value) {
    history.prp = prp.value;
    }
    
    history.sch = schVal;

    if(msVal) {
    history.ms = msVal;
    }
    if(lmsVal) {
    history.lms = lmsVal;
    }
    if(lvlVal) {
    history.lvl = lvlVal;
    }


    if(omd.value != 0 || ond.value != 0 || mhd.value != 0 || nhd.value != 0) {
        history.spoiler1 = 1;
    }

for(let key in history) {
    search += `${key}=${history[key]}&`;
}
search = search.slice(0, -1);
link = href + search;

// console.log(link);

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

if(historyObj.rate){rate.value = historyObj.rate;}

if(historyObj.md){
    md.value = historyObj.md;
    mh.value = roundHours(historyObj.md * 11.7);
}
if(historyObj.nd){
    nd.value = historyObj.nd;
    nh.value = roundHours(historyObj.nd * 11);
}

if(historyObj.mdg){
    mdg.value = historyObj.mdg;
    mhg.value = roundHours(historyObj.mdg * 11.7);
}

if(historyObj.ndg){
    ndg.value = historyObj.ndg;
    nhg.value = roundHours(historyObj.ndg * 11);
}

if(historyObj.omd){
    omd.value = historyObj.omd;
    omh.value = roundHours(historyObj.omd * 11.7);
}

if(historyObj.ond){
    ond.value = historyObj.ond;
    onh.value = roundHours(historyObj.ond * 11);
}
if(historyObj.mhd){
    mhd.value = historyObj.mhd;
    mhh.value = roundHours(historyObj.mhd * 11.7);
}

if(historyObj.nhd){
    nhd.value = historyObj.nhd;
    nhh.value = roundHours(historyObj.nhd * 7);
}

if(historyObj.fnp){fnp.value = historyObj.fnp;}

if (historyObj.cul) {
    cul.value = historyObj.cul;
} else{
    cul.value = 0;
}
if (historyObj.coe) {
    coe.value = historyObj.coe;
}
if (historyObj.prp) {
    prp.value = historyObj.prp;
} else {
    prp.value = 0;
}

if (historyObj.sch) {
    sch[historyObj.sch].checked = true;
    if (+historyObj.sch == 0) {
        sch14();
    }
}
if (historyObj.ms) {
    ms.checked = true;
} else {
    ms.checked = false;
}



if (historyObj.lms) {
    lms[historyObj.lms].selected = true;
} else{
    lms[0].selected = true;
}


if (historyObj.lvl) {
    lvl[historyObj.lvl].selected = true;
} else {
    lvl[0].selected = true;
}

if(historyObj.spoiler1) {
    spoiler[0].open = true;
    // console.log("спойлер открыт");
}
someChanged = true;
btnStatus();
}
if(window.location.search) {
    readHistory();
    window.history.pushState('1', 'Title', ".");
    // console.log("ссылка загружена");
}