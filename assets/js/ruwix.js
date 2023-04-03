/////////////////////////
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// function
/////////////////////////

// set attr by attrEntry
const setAttrByAttrEntry = (el,attrEntry,isStyle) => {

    // attrEntry : [key,value]
    const [key,value] = attrEntry;

    switch (isStyle) {
        // style attr
        case true:
            el.style[key] = value;
            break;
        // element attr
        case false:
            el.setAttribute(key,value);
            break;
    };

};

// set attr by attrs
// https://stackoverflow.com/a/12274782
const setAttrByAttrs = (el,attrs,isStyle) => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    Object.entries(attrs).forEach( attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle) );
};

// set style/element attr
const setStElAttrs = (el,StElAttrs) => [
    [ StElAttrs["style"] , true  ] , [ StElAttrs["element"] , false ]
].forEach( attrsEntry => setAttrByAttrs( el, ...attrsEntry ) );





/////////////////////////
///// iframe elements
/////////////////////////
///// tag : iframe
/////////////////////////

queryText       = "iframe";
const iframeEls = document.querySelectorAll(queryText);



/////////////////////////
///// common attr for every iframe
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// create common attr
const comStElAttrs = {

    // style attr
    "style" : {
            "width"            : "250px"       ,
            "height"           : "300px"       ,
            "background-color" : "#1a1a1a"     ,
            "border-style"     : "none"        ,
            "border-color"     : "transparent" ,
            "border-width"     : "0px"         ,
            "margin-top"       : "5px"         ,
            "margin-bottom"    : "5px"
    },

    // element attr
    "element" : {
            "scrolling"        : "no"
    }

};

// set attr for every iframe
iframeEls.forEach( iframe => setStElAttrs( iframe , comStElAttrs ) );





/////////////////////////
///// image elements
/////////////////////////

queryText = "img";
const imageEls = document.querySelectorAll(queryText);





/////////////////////////
///// common attr for every image
/////////////////////////

// imgStAttrs : style attr
const imgStAttrs = {
    "max-width" : "96px"
};

// set attr for every image
imageEls.forEach( image => setAttrByAttrs( image , imgStAttrs , true ) );





/////////////////////////
///// image elements
/////////////////////////
///// class : rotate
///// attr  : deg
/////////////////////////

queryText            = "img.rotate";
const imageRotateEls = document.querySelectorAll(queryText);



/////////////////////////
///// style attr
/////////////////////////
///// key   : transform
///// value : rotate
/////////////////////////

imageRotateEls.forEach(
    image => {
        // deg of image
        queryText     = "deg";
        const deg     = image.getAttribute(queryText);
        // stAttrs : style attr
        const stAttrs = {
            "transform" : `rotate(${deg}deg)`
        };
        // set style attr
        setAttrByAttrs( image , stAttrs , true );
    }
);





/////////////////////////
///// image elements
///// class : translate
///// attr  : axis/disp
/////////////////////////

queryText               = "img.translate";
const imageTranslateEls = document.querySelectorAll(queryText);



/////////////////////////
///// style attr
///// max-width  : initial
///// max-height : initial
///// transform  : translate
/////////////////////////

imageTranslateEls.forEach(
    image => {
        // axis of image
        queryText     = "axis";
        const axis    = image.getAttribute(queryText);
        // disp of image
        queryText     = "disp";
        const disp    = image.getAttribute(queryText);
        // stAttrs : style attr
        const stAttrs = {
            "max-width"  : "initial",
            "max-height" : "initial",
            "transform"  : `translate${axis}(${disp})`
        };
        // set style attr
        setAttrByAttrs( image , stAttrs , true );
    }
);





/////////////////////////
///// div elements
///// class : wrapper
/////////////////////////

queryText           = "div.wrapper";
const divWrapperEls = document.querySelectorAll(queryText);



/////////////////////////
///// style attr
/////////////////////////
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
        setAttrByAttrs( wrapper , stAttrs , true );
    }
);
