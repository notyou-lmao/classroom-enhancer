javascript:(function() {
    'use strict';

console.log("Initialized");

    var style = `
body {
    background: #2c2c2c;
    color: #fff;
}
.vzcr8 {
color: #39ff43;
}
.q6oraf .VfPpkd-StrnGf-rymPhb {
color: #ffffff !important;
}
.Rj2Mlf:not(:disabled) {
color: rgb(255 255 255) !important;
border-color: rgb(255 0 0) !important;
}
.Po14Kd {
    background-color: rgb(104 62 62);
}
.BWOvob {
    background-color: rgb(232 26 26);
}
.OLiIxf .PDpWxe .P62QJc {
border-width: 2px !important;
}
.nCP5yc:not(:disabled) {
background-color: rgb(232 26 26) !important;
}
.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) {
background-color: #2c2c2c;
}
.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) .VfPpkd-fmcmS-wGMbrd {
color: #ffffff;
}
.WmnPA .VfPpkd-fmcmS-wGMbrd {
caret-color: #9c00ff;
}
.WmnPA:not(.VfPpkd-fmcmS-yrriRe-OWXEXe-OWB6Me) .VfPpkd-RWgCYc-ksKsZd::after {
border-bottom-color: #9c00ff;
}
.zuzKle.xVPuB, .zuzKle.vnnr5e {
color: rgb(255 255 255);
}
.apFsO.onkcGd {
color: rgb(255 54 54) !important;
}
.WMQb5e .oBSRLe:first-of-type {
color: #fff;
}
.xVPuB .Aworge {
color: #fff0000;
}
.xVPuB .snByac, .vnnr5e .snByac {
    color: #ffffff;
}
.VfPpkd-xl07Ob-XxIAqe {
background-color: #414141;
}
.mwJvDe .KEDCCd {
border-bottom: .0625rem solid rgb(124 3 158);
}
.B7SYid {
color:#ff4444;
}
.CbuVcc:focus .Pce5Kb, .CbuVcc:hover .Pce5Kb {
color: #9c00ff;
}
.GWZ7yf {
border-radius: 1.2rem;
}
.s8kOBc .VfPpkd-rymPhb-ibnC6b.VfPpkd-rymPhb-ibnC6b-OWXEXe-gk6SMd {
background-color: rgb(126 28 28);
}
.s8kOBc .VfPpkd-rymPhb-ibnC6b-OWXEXe-gk6SMd .VfPpkd-rymPhb-fpDzbe-fmcmS {
color: rgb(255 255 255);
}
.s8kOBc .VfPpkd-rymPhb-Gtdoyb, .s8kOBc .VfPpkd-rymPhb-fpDzbe-fmcmS {
color: #ff5555;
}
.onkcGd:hover, .onkcGd, .onkcGd:visited, .onkcGd:visited:hover {
color: #9c00ff;
}
.ReCbLb:not(.VfPpkd-O1htCb-OWXEXe-OWB6Me) .VfPpkd-uusGie-fmcmS {
    color: rgb(255 255 255);
}
.ReCbLb:not(.VfPpkd-O1htCb-OWXEXe-OWB6Me):not(.VfPpkd-O1htCb-OWXEXe-XpnDCe) .VfPpkd-TkwUic:hover .VfPpkd-NSFCdd-i5vt6e .VfPpkd-NSFCdd-MpmGFe {
    border-color: rgb(255 6 6);
}
.Aopndd {
background: #3c3c3c;
border: solid;
border-radius: 1.4rem;
overflow: hidden;
border-width: .2rem .2rem 0rem 0rem;
}
.LjDxcd:not(:disabled) {
    color: rgb(255, 124, 124);
    color: rgb(255 124 124);
}
.IzVHde {
    background-color: #313131;
}
.S3aLQd.bFjUmb-Wvd9Cc, .S3aLQd .bFjUmb-Wvd9Cc {
background-color: rgb(0 0 0 / 11%);
}
.PFLqgc {
height: 0%;
}
.Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover.rXdid, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover.h7Ww0, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover .rXdid, .Iwp0Ue:not(.xp2dJ):not(.rZXyy):hover .h7Ww0, .xWw7yd:hover.rXdid, .xWw7yd:hover.h7Ww0, .xWw7yd:hover .rXdid, .xWw7yd:hover .h7Ww0 {
background-color: rgb(65 20 85);
}
.YrFhrf-ZoZQ1 {
color: #da56ff;
}
.qyN25 {
    height: 6rem;
    position: relative;
    width: 100%;
    background: #3c3c3c;
    }
    .ksBjEc:not(:disabled) {
        color: #eb7cff !important;
    color: var(--gm-colortextbutton-ink-color, #eb7cff) !important;
    }
.gb_Ea svg, .gb_Oc svg, .gb_rd .gb_sd, .gb_1c .gb_sd {
color:#9d00ff;
}
.OjOEXb, .ZizeYd, .O7utsb, .ZmqAt, .ee1HBc.CNpREd .bFjUmb-Tvm9db {
background-color: #2c2c2c;
}
.mwJvDe .KEDCCd {
background-color: #333333;
}
.N6nSod {
background-color: #1c1c1c;
}
.Tabkde .OX4Vcb {
background-color:#3c3c3c;
}
.NMm5M {
color:#fff;
}
.NMm5M:hover {
color: #9d00ff;
}
.rpo4wf-J3yWx, .Pce5Kb, .dR850e {
color:#fff;
}
/* help btn */
.K2mXPb {
    color: #fff;
    fill: #fff;
}

/* links */
a {
    color: dodgerblue;
}
a:visited {
    color: mediumorchid;
}

/* top bar */
.joJglb {
    background: #3c3c3c;
    border-bottom: none;
}
.joJglb, .joJglb.kLHn3 {
    box-shadow: 0px 0px 6px 4px rgba(28, 28, 28, .4);
}

/* google apps */
.gb_qa svg, .gb_C[aria-expanded="true"] .gb_Ve {
    fill: #fff;
}

/* icons */
.IqJTee, .ViCi4, .xSP5ic, .cjq2Db {
    color: #fff;
}

/* classroom elems */
.Aopndd {
    background: #3c3c3c;
    border-color: #5c5c5c;
}
.SZ0kZe {
    border-top: none !important;
}
.apFsO.onkcGd,
.apFsO.onkcGd:visited {
    color: #fff;
}
.oBSRLe {
    color: #fff;
}
.JPdR6b {
    background: #3c3c3c;
    box-shadow: 0px 0px 2px 1px rgba(28, 28, 28, .4);
}

/* nav menu */
.asQXV {
    color: #fff;
}
.dDKhVc, .iLjzDc {
    color: #afafaf;
}
.kCtYwe {
    border-color: #4c4c4c !important;
}
.ETRkCe {
    background-color: #3c3c3c !important;
}
.DShyMc-AaTFfe .Xi8cpb.qs41qe .LlcfK, .bFjUmb-Ysl7Fe, .VUoKZ {
    background-color: #4c4c4c !important;
}
.Xi8cpb:hover .LlcfK {
    background-color: rgba(76, 76, 76, .5) !important;
}
.UAJaRc {
    height: 27px;
    width: 28px;
    overflow: visible;
}

/* calendar */
.Evt7cb, .Evt7cb:visited, .fKz7Od .TpQm9d {
    color: #fff !important;
}
.BOW64 {
    border-color: #5c5c5c !important;
}
.wQuPk .JsqLM.N4XV7d {
    color: #afafaf !important;
}
.ybOdnf .OA0qNb .LMgvRb[aria-selected="true"] {
    background-color: rgba(76, 76, 76, .5) !important;
}
.ncFHed .MocG8c.KKjvXb {
    background-color: #4c4c4c !important;
}

/* todo page */
.Xp0OCe, .ncFHed {
    background-color: #3c3c3c !important;
}
.Xp0OCe {
    border: none !important;
}
.HZ3kWc, .WOPwXe, .gJk24c, .asQXV-FGzYL {
    color: #fff;
}
.MHxtic:not(:last-child), .LKqFXc {
    border-color: #4c4c4c !important;
}
.MHxtic:hover {
    box-shadow: none !important;
    background-color: #4c4c4c;
}

/* class page */
.d4Fe0d {
    background-color: #3c3c3c !important;
    border-color: #4c4c4c !important;
}
.EZrbnd, .A6dC2c, .O98Lj, .rpo4wf, .tLDEHd, .cSyPgb, .wZTANe .J1raN:hover, .udxSmc, .lziZub, .lziZub:visited {
    color: #fff !important;
}
.sdDCme, .K6Ovqd, .T8rTjd, .Lzdwhd-BrZSOd, .onkcGd, .onkcGd:visited, .wZTANe .J1raN {
    color: #ccc;
}
.VnOHwf-Tvm9db, .BEAGS:not(.RDPZE), .VnOHwf-Wvd9Cc, .CJXzee a:active,
.CJXzee a:focus, .CJXzee a:hover, .sdDCme, .K6Ovqd, .vnnr5e .snByac,
.vnnr5e .Aworge, .XpxsVb .Aworge, .UQuaGc, .wCDkmf, .ksaOtd {
    color: #fff !important;
}
.MymH0d:hover .VBEdtc-Wvd9Cc, .l3F1ye:not(.RDPZE), .IMvYId, .IMvYId:visited, .nRLOzd:hover, .nRLOzd:hover *, .O98Lj, .Lzdwhd-BrZSOd {
    color: #ccc !important;
}
.GWZ7yf, .hgjBDc, .vnnr5e .CIy9F, .qk0lee:focus::after {
    background-color: #3c3c3c !important;
    box-shadow: none !important;
}
.vnnr5e .I9OJHe {
    background-color: #3c3c3c !important;
}
.ndcsBf.cjzpkc-Wvd9Cc {
    border-color: #5c5c5c;
}
.Y5FYJe.RDPZE {
    fill: #ccc;
    color: #ccc;
}
.OZ6W0d:not(.RDPZE), .l3F1ye:not(.RDPZE) .TpQm9d, .wwnMtb:not(.RDPZE) {
    fill: #fff !important;
    color: #fff !important;
}
.z3vRcc {
color: #ffffff;
}
.ZoT1D:hover.idtp4e, .tUJKGd:not(.xp2dJ):not(.rZXyy):hover .idtp4e, .tUJKGd:not(.xp2dJ).ndcsBf .idtp4e, .V8apv, .P3W0Dd-Ysl7Fe:focus {
    background-color: #4c4c4c !important;
}
.Niache, .QTD2uf {
    border-color: #3c3c3c !important;
}
.UISY8d-Ysl7Fe:hover {
    background-color: #3c3c3c !important;
    color: #ccc;
}
.eumXzf:after {
    border-color: #fff !important;
}
.tUJKGd:not(:first-child), .ySjuvd .eqqrO, .s2g3Xd, .oleV8d, .ZNE4y, .PeGHgb.Q8U8uc .Ono85c+.oh9CFb, .O9YpHb, .u73Apc, .d6CWTd {
    border-color: #4c4c4c !important;
}
.lXuxY {
    -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.75)
}
.BEAGS, .P02DYb, .ycbm1d {
    border-color: #4c4c4c !important;
}
.Y5sE8d:not(.RDPZE) {
    background-color: #2c2c2c !important;
}
.Y5sE8d:not(.RDPZE):hover {
    box-shadow: none !important;
}
.ksaOtd {
    color: #1e8e3e;
}
.uO32ac {
    border-color: #5c5c5c !important;
}
.uQ3ESd {
    background-color: #3c3c3c !important;
}

/* dialog */
.iph-dialog {
    background-color: #4c4c4c !important;
}
.iph-dialog-title, .iph-dialog-content {
    color: #fff !important;
}

/* join classroom */
.gKkZCe, .D3oBEe .n9IS1:before, .AeAAkf {
    border-color: #4c4c4c;
}
.D3oBEe .qTs5Xc {
    background-color: #3c3c3c;
}
.qTs5Xc, .poFWNe {
    color: #fff;
}
.I7OXgf.ZEeHrd, .NZ9wdc, .i5sehe, .kox42c {
    background-color: #2c2c2c !important;
}`;

var elem = document.createElement('style');
    elem.innerText = style;
    document.head.appendChild(elem);
console.log("Styles applied successfully");

    function updateImages() {
        const imgElements = document.querySelectorAll("img.UAJaRc");
        imgElements.forEach(function(imgElement) {
            imgElement.src = "https://adamsdrivingschool.com/wp-content/uploads/2024/02/icons8_google_classroom_480px.png";
        });
    }

    function updateElementHeight() {
        const elements = document.querySelectorAll(".PFLqgc");
        elements.forEach(element => {
            if (!element.closest('[aria-hidden="true"]')) {
                element.style.height = "0%";
            }
        });
    }

    function updateElementAttributes() {
        const elements = document.querySelectorAll(".qyN25");
        elements.forEach(element => {
            if (!element.closest('[aria-hidden="true"]')) {
                element.setAttribute("data-custom", "true");
                element.style.height = "6rem";
                element.style.position = "relative";
                element.style.width = "100%";
                element.style.background = "#3c3c3c";
            }
        });
    }
console.log("Images updated successfully");

    function createLoadingBanner() {
        const banner = document.createElement('div');
        banner.id = 'loading-banner';
        banner.style.position = 'fixed';
        banner.style.top = '0';
        banner.style.left = '0';
        banner.style.width = '100%';
        banner.style.height = '2rem';
        banner.style.textAlign = 'left';
        banner.style.lineHeight = '2rem';
        banner.style.paddingLeft = '1rem';
        banner.style.fontSize = '1rem';
        banner.style.fontWeight = 'bold';
        banner.style.zIndex = '9999';
        banner.style.backgroundColor = '#9d00ff';
        banner.style.color = '#ffffff';
        banner.innerText = "The script is loading, please wait.";

        document.body.appendChild(banner);

        return banner;
    }

    function startFlashing(banner) {
        let toggle = true;
        const flashInterval = setInterval(() => {
            if (toggle) {
                banner.style.backgroundColor = '#9d00ff';
                banner.style.color = '#ffffff';
            } else {
                banner.style.backgroundColor = '#ffffff';
                banner.style.color = '#9d00ff';
            }
            toggle = !toggle;
        }, 800);

        return flashInterval;
    }

    function stopFlashing(banner, flashInterval) {
        clearInterval(flashInterval);
        banner.style.backgroundColor = '#9d00ff';
        banner.style.color = '#ffffff';
        banner.innerText = "Script loaded. Enjoy! Buy me a coffee? buymeacoffee.com/nyltheemoboy";

        setTimeout(function() {
            banner.style.transition = 'opacity 0.7s';
            banner.style.opacity = '0';

            setTimeout(function() {
                banner.remove();
            }, 1000);
        }, 3200);
    }
console.log("Loaded banner 1/2 successfully");

    const banner = createLoadingBanner();
    const flashInterval = startFlashing(banner);

    updateImages();
    updateElementHeight();
    updateElementAttributes();

    const debounce = (fn, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), delay);
        };
    };


    const imageObserver = new MutationObserver(debounce(() => {
        updateImages();
    }, 300));

    imageObserver.observe(document.body, {
        childList: true,
        subtree: true
    });

    const heightObserver = new MutationObserver(debounce(() => {
        updateElementHeight();
    }, 300));

    heightObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    const attributesObserver = new MutationObserver(debounce(() => {
        updateElementAttributes();
    }, 300));

    attributesObserver.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });

    console.log("Script applied. Updates for images, .PFLqgc, and .qyN25 elements are persistent.");

    setTimeout(function() {
        stopFlashing(banner, flashInterval);
    }, 6000);


console.log("Loaded banner 2/2 successfully");

console.log("Success! Applied script. Buy me a coffee? https://www.buymeacoffee.com/nyltheemoboy");
})();
