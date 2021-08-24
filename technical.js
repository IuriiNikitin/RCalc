'use strict';


rate.onfocus = md.onfocus = 
nd.onfocus = omd.onfocus = 
ond.onfocus = mhd.onfocus = 
nhd.onfocus = cul.onfocus = 
coe.onfocus = prp.onfocus = function () {
    this.value = "";
};
rate.onblur = function () {
    if (!this.value) {
        this.value = 239.00;
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
        }
    };

    