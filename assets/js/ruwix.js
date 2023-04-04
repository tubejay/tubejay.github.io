/////////////////////////
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// function
/////////////////////////

// set attr by attrEntry
// isStyle
// true : style attr
// else : element attr
const setAttrByAttrEntry = (el,[key,value],isStyle) =>
    isStyle
    ? [ el.style[key]=value ]
    : [ el.setAttribute(key,value) ];


// set attr by attrs
// https://stackoverflow.com/a/12274782
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const setAttrByAttrs = (el,attrs,isStyle) =>
    Object.entries(attrs).forEach(
        attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
    );

// set style/element attr
const setStElAttrs = (el,StElAttrs) =>
    [
        [ StElAttrs["style"]   , true  ] ,
        [ StElAttrs["element"] , false ]
    ].forEach( attrsEntry => setAttrByAttrs( el, ...attrsEntry ) );





/////////////////////////
///// iframe elements
/////////////////////////
///// tag : iframe
/////////////////////////

queryText       = "iframe";
const iframeEls = document.querySelectorAll(queryText);





/////////////////////////
///// src for each iframe
/////////////////////////
///// define function
/////////////////////////

// get attr name
const getNamesUse = (el,namesExcept) =>
    el.getAttributeNames().filter(
        attrName => !namesExcept.includes(attrName)
    );
// create attrs
// https://stackoverflow.com/a/53508215
const createUseAttrs = (el,namesUse) =>
    Object.fromEntries( namesUse.map(
        attrName => [ attrName , el.getAttribute(attrName) ]
    ) );
// get use attrs
const getUseAttrs = (el,namesExcept) =>
    createUseAttrs( el , getNamesUse(el,namesExcept) );

// base URL
const baseURL = "https://ruwix.com/widget/3d/";
// create query string
// "key=value"
const createQueryString = ( [key,value] ) =>
    key + '=' + value;
// create src
// base url + "?" + quert string
const createSrc = allElAttrs =>
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // "key=value&key=value"
    baseURL + "?" + Object.entries(allElAttrs).map(createQueryString).join("&");

// insert after
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// before : targetEl
// after  : [ targetEl , insertEl ]
const insertAfter = (targetEl,insertEl) =>
    targetEl.parentNode.insertBefore(
        insertEl , targetEl.nextSibling
    );
// create link element
// set : href/text
const createLink = (href,text) => {
    // create
    const linkEl = document.createElement("a");
    // set href/text
    linkEl.setAttribute("href",href);
    linkEl.innerText = text;
    // set style
    const linkStyle = {
        "font-size"     : "small"   ,
        "margin-top"    : "-15px"   ,
        "margin-bottom" : "10px"    ,
        "border-style"  : "solid"   ,
        "border-color"  : "#1a1a1a" ,
        "border-width"  : "3px"
    };
    setAttrByAttrs(linkEl,linkStyle,true);
    // return
    return linkEl;
};
// insert link
// before : targetEl
// after  : [ targetEl , { divEl > linkEl } ]
const insertLinkAfter = (targetEl,href,text) => {
    // create elements
    // divEl > linkEl
    const divEl  = document.createElement("div");
    divEl.appendChild( createLink(href,text) );
    // insert divEl
    // [ targetEl , divEl ]
    insertAfter(targetEl,divEl);
};



/////////////////////////
///// src for each iframe
/////////////////////////
///// use function
/////////////////////////

// get test element
queryText           = "#test";
const iframeTestEls = document.querySelectorAll(queryText);

// attr name except : id
const namesExcept = ["id"];
// common element attr
// hover/speed/flags
const comElAttrs  = {
    hover : 9,
    speed : 500,
    flags : "canvas"
};
// link text
const linkText = "Ruwix 3D Canvas Cube Generator";

// insert link for every iframe
iframeTestEls.forEach( iframeTest => {
    // create src
    // https://stackoverflow.com/a/43626263
    const src = createSrc( Object.assign(
        {} , ...( [
            comElAttrs ,
            getUseAttrs(iframeTest,namesExcept)
        ] )
    ) );
    // set src
    iframeTest.setAttribute("src",src);
    // insert link
    insertLinkAfter(iframeTest,src,linkText);
} );





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
iframeEls.forEach( iframe =>
    setStElAttrs( iframe , comStElAttrs )
);





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
imageEls.forEach( image =>
    setAttrByAttrs( image , imgStAttrs , true )
);





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

imageRotateEls.forEach( image => {
    // deg of image
    queryText     = "deg";
    const deg     = image.getAttribute(queryText);
    // stAttrs : style attr
    const stAttrs = {
        "transform" : `rotate(${deg}deg)`
    };
    // set style attr
    setAttrByAttrs( image , stAttrs , true );
} );





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

imageTranslateEls.forEach( image => {
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
} );





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

divWrapperEls.forEach( wrapper => {
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
} );
