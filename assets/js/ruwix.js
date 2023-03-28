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

const iframeEls = document.querySelectorAll("iframe");



/////////////////////////
///// common attr for every iframe
/////////////////////////

// comStAttrs : style attr
const comStAttrs = {
    width              : "250px",
    height             : "300px",
    "background-color" : "#1a1a1a",
    "border-style"     : "none",
    "border-color"     : "transparent",
    "border-width"     : "0px",
    "margin-top"       : "5px",
    "margin-bottom"    : "5px",
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