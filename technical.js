'use strict';
const btn1 = document.getElementById("btn1"),
btn2 = document.getElementById("btn2");
const toggleVis = () => {zpList.style.display = "block"; btn2.style.display = "block";};
btn1.addEventListener("click", () => {calc(); createTable(); toggleVis();});

rate.onfocus = md.onfocus = 
nd.onfocus = omd.onfocus = 
ond.onfocus = mhd.onfocus = 
nhd.onfocus = cul.onfocus = 
coe.onfocus = prp.onfocus = function () {
    this.value = "";
};
rate.onblur = function () {
    if (!this.value) {
        this.value = 239;
        this.value = (+this.value).toFixed(2);
    }
    else {
        this.value = (+this.value).toFixed(2);
    }
};
md.onblur = nd.onblur = 
omd.onblur = ond.onblur = 
mhd.onblur = nhd.onblur = function () {
    if (!this.value) {
        this.value = 0;
    }
    };
    cul.onblur = function () {
        if (!this.value) {
            this.value = 15;
        }
    };
    coe.onblur = function () {
        if (!this.value) {
            this.value = 2;
        }
    };
    prp.onblur = function () {
        if (!this.value) {
            this.value = 27840;
            this.value = (+this.value).toFixed(2);
        }
        else {
            this.value = (+this.value).toFixed(2);
        }
    };

    const notNum = (e) => {
if(isNaN(+e.key)) {
    e.target.value = "";
}
    };

    rate.addEventListener("keyup", notNum);
    md.addEventListener("keyup", notNum);
    nd.addEventListener("keyup", notNum);
    omd.addEventListener("keyup", notNum);
    ond.addEventListener("keyup", notNum);
    mhd.addEventListener("keyup", notNum);
    nhd.addEventListener("keyup", notNum);
    cul.addEventListener("keyup", notNum);

    prp.addEventListener("keyup", notNum);