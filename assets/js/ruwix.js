/////////////////////////
///// function
/////////////////////////

// set attr by attrEntry
const setAttrByAttrEntry = (el,attrEntry,isStyle) => {
    // attrEntry : [key,value]
    const [key,value] = attrEntry;
    // set attr by key,value
    if (isStyle===true) {
        // style attr
        el.style[key] = value;
    } else if (isStyle===false) {
        // element attr
        el.setAttribute(key,value);
    }
};

// set attr by attrs
// https://stackoverflow.com/a/12274782
const setAttrByAttrs = (el,attrs,isStyle) => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    const attrEntries = Object.entries(attrs);
    attrEntries.forEach(
        attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
    );
};

// set style/element attr
const setStElAttrs = (el,stAttrs,elAttrs) => {
    // stAttrs
    // isStyle : true
    setAttrByAttrs(
        el      ,
        stAttrs ,
        true
    );
    // elAttrs
    // isStyle : false
    setAttrByAttrs(
        el      ,
        elAttrs ,
        false
    );
};



/////////////////////////
///// iframe elements
/////////////////////////

let   queryTag  = "iframe";
const iframeEls = document.querySelectorAll(queryTag);

/////////////////////////
///// common attr for every iframe
/////////////////////////

// comStAttrs : style attr
const comStAttrs = {
    width              : "250px"       ,
    height             : "300px"       ,
    "background-color" : "#1a1a1a"     ,
    "border-style"     : "none"        ,
    "border-color"     : "transparent" ,
    "border-width"     : "0px"         ,
    "margin-top"       : "5px"         ,
    "margin-bottom"    : "5px"
};
// comElAttrs : element attr
const comElAttrs = {
    scrolling          : "no"
};

// set attr for every iframe
iframeEls.forEach(
    iframe => setStElAttrs(
        iframe     ,
        comStAttrs ,
        comElAttrs
    )
);



/////////////////////////
///// image elements
/////////////////////////

let   queryTag = "img";
const imageEls = document.querySelectorAll(queryTag);

/////////////////////////
///// common attr for every image
/////////////////////////

// imgStAttrs : style attr
const imgStAttrs = {
    "max-width" : "96px"
};

// set attr for every image
imageEls.forEach(
    image => setAttrByAttrs(
        image      ,
        imgStAttrs ,
        true
    )
);



/////////////////////////
///// image elements
///// class : rotate
///// attr  : deg
/////////////////////////

let   queryTagClass  = "img.rotate";
const imageRotateEls = document.querySelectorAll(queryTagClass);

/////////////////////////
///// style attr
///// key   : transform
///// value : rotate
/////////////////////////

imageRotateEls.forEach(
    image => {
        // deg of image
        let   attrName = "deg";
        const deg      = image.getAttribute(attrName);
        // stAttrs : style attr
        const stAttrs = {
            "transform" : `rotate(${deg}deg)`
        };
        // set style attr
        setAttrByAttrs(
            image   ,
            stAttrs ,
            true
        );
    }
);



/////////////////////////
///// image elements
///// class : translate
///// attr  : axis/disp
/////////////////////////

let   queryTagClass     = "img.translate";
const imageTranslateEls = document.querySelectorAll(queryTagClass);

/////////////////////////
///// style attr
///// max-width  : initial
///// max-height : initial
///// transform  : translate
/////////////////////////

imageTranslateEls.forEach(
    image => {
        // axis of image
        let   attrName = "axis";
        const axis     = image.getAttribute(attrName);
        // disp of image
        let   attrName = "disp";
        const disp     = image.getAttribute(attrName);
        // stAttrs : style attr
        const stAttrs = {
            "max-width"  : "initial",
            "max-height" : "initial",
            "transform"  : `translate${axis}(${disp})`
        };
        // set style attr
        setAttrByAttrs(
            image   ,
            stAttrs ,
            true
        );
    }
);



/////////////////////////
///// div elements
///// class : wrapper
/////////////////////////

let   queryTagClass = "div.wrapper";
const divWrapperEls = document.querySelectorAll(queryTagClass);

/////////////////////////
///// style attr
///// display    : inline-block
///// max-width  : 96px
///// max-height : 96px
///// overflow   : hidden
/////////////////////////

divWrapperEls.forEach(
    wrapper => {
        // stAttrs : style attr
        const stAttrs = {
            // https://www.w3schools.com/css/css_inline-block.asp
            "display"    : "inline-block" ,
            "max-width"  : "96px"         ,
            "max-height" : "96px"         ,
            "overflow"   : "hidden"
        };
        // set style attr
        setAttrByAttrs(
            wrapper,
            stAttrs,
            true
        );
    }
);
