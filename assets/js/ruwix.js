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
    // isStyle
    // true : style attr
    // else : element attr
    return isStyle ? [ el.style[key]=value ] : el.setAttribute(key,value);
};

// set attr by attrs
// https://stackoverflow.com/a/12274782
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const setAttrByAttrs = (el,attrs,isStyle) => Object.entries(attrs).forEach(
    attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
);

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
///// src for each iframe
/////////////////////////
///// define function
/////////////////////////

// get attr name
const getNamesUse = (el,namesExcept) => el.getAttributeNames().filter(
    attrName => !namesExcept.includes(attrName)
);
// create attrs
// https://stackoverflow.com/a/53508215
const createUseAttrs = (el,namesUse) => Object.fromEntries( namesUse.map(
    attrName => [ attrName , el.getAttribute(attrName) ]
) );
// get use attrs
const getUseAttrs = (el,namesExcept) => createUseAttrs( el , getNamesUse(el,namesExcept) );

// create query string
const createQueryString = (entry,sep) => {
    const [key,value] = entry;
    return sep + key + '=' + value;
};
// get sep by index
// 0    : '?'
// else : '&'
const getSepByIndex = (index=null) => index===0 ? '?' : '&';
// create src
const createSrc = (getElAttrs,comElAttrs) => {
    // base url
    let src = "https://ruwix.com/widget/3d/";
    // all element attrs
    const allElAttrs = { ...getElAttrs , ...comElAttrs };
    // update src
    Object.entries(allElAttrs).forEach( (entry,index) => src += createQueryString(
        entry , getSepByIndex(index)
    ) );
    // return src
    return src;
};

// insert after
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// before : targetEl
// after  : [ targetEl , insertEl ]
const insertAfter = (targetEl,insertEl) => targetEl.parentNode.insertBefore(
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
    divEl.appendChild(createLink(href,text));
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
// hover
// speed
// flags
const comElAttrs  = {
    hover : 9,
    speed : 500,
    flags : "canvas"
};
// link text
const linkText = "Ruwix 3D Canvas Cube Generator";

// insert link for every iframe
iframeTestEls.forEach( iframeTest => {
    // get attr
    const getElAttrs = getUseAttrs(iframeTest,namesExcept);
    // create/set src
    const src = createSrc(getElAttrs,comElAttrs);
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
