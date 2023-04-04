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
///// src for each iframe
/////////////////////////
///// define function
/////////////////////////

// get attr name
const getNamesUse = (el,namesExcept) => {
    const namesEl = el.getAttributeNames();
    const namesFilter = attrName => !namesExcept.includes(attrName);
    return namesEl.filter(namesFilter);
};
// create attrs
// https://stackoverflow.com/a/53508215
const createUseAttrs = (el,namesUse) => {
    const getElValue = attrName => el.getAttribute(attrName);
    const getElEntry = attrName => [ attrName , getElValue(attrName) ];
    const useEntries = namesUse.map(getElEntry);
    return Object.fromEntries(useEntries);
};
// get use attrs
const getUseAttrs = (el,namesExcept) => createUseAttrs( el , getNamesUse(el,namesExcept) );

// create query string
const createQueryString = (entry,sep) => {
    const [key,value] = entry;
    const queryString = sep + key + '=' + value;
    return queryString;
};
// create src
const createSrc = (getElAttrs,comElAttrs) => {
    // base url
    let src = "https://ruwix.com/widget/3d/";
    // add common attrs
    Object.entries(comElAttrs).forEach(
        (entry,index) => {
            // sep by index
            // 0    : '?'
            // else : '&'
            const sep         = index===0 ? '?' : '&';
            // query string
            const queryString = createQueryString(entry,sep);
            // add to src
            src += queryString;
        }
    );
    // add use attrs
    Object.entries(getElAttrs).forEach(
        entry => {
            // sep : '&'
            const sep         = '&';
            // query string
            const queryString = createQueryString(entry,sep);
            // add to src
            src += queryString;
        }
    );
    // return src
    return src;
};

// insert link
const insertLinkAfter = (elTarget,href,text) => {
    // create link element
    let elLink = document.createElement("a");
    // set href
    elLink.setAttribute("href",href);
    // add text
    elLink.innerText = text;
    // insert after
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
    let elParent = elLink.parentNode;
    elParent.insertBefore(elLink,elTarget.nextSibling);
};





/////////////////////////
///// src for each iframe
/////////////////////////
///// use function
/////////////////////////

// get test element
queryText        = "#test";
const iframeTest = document.querySelector(queryText);

// get use attrs
// except : id
const namesExcept = ["id"];
const getElAttrs = getUseAttrs(iframeTest,namesExcept);
// get common attrs
const comElAttrs  = {
    hover : 9,
    speed : 500,
    flags : "canvas"
};

// create src
const src = createSrc(getElAttrs,comElAttrs);
// set src
iframeTest.setAttribute("src",src);

// insert link
const linkText = "Ruwix 3D Canvas Cube Generator";
insertLinkAfter(iframeTest,src,linkText);





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
