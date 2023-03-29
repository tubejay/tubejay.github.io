/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

let   queryId = "#test";
const testEl  = document.querySelector(queryId);

const testAppend = el => {
    // append
    testEl.append(el);
    // create
    let   elTag = "br";
    const br    = document.createElement(elTag);
    // append
    testEl.appendChild(br);
};
if (testEl) {
    testAppend("first");
    testAppend("second");
};





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
///// player elements
/////////////////////////
///// tag : twisty-player
/////////////////////////

let   queryTag  = "twisty-player";
const playerEls = document.querySelectorAll(queryTag);



/////////////////////////
///// common attr for every player
/////////////////////////

// comStAttrs : style attr
const comStAttrs = {
    "background-color" : "#1a1a1a"     ,
    "margin-top"       : "5px"         ,
    "margin-bottom"    : "25px"        ,
    "border-style"     : "none"        ,
    "border-color"     : "transparent" ,
    "border-width"     : "0px"
};
// comElAttrs : element attr
const comElAttrs = {
    "dark-mode"        : "dark" ,
    "background"       : "none" ,
    "tempo-scale"      : "1.3"  ,
    "visualization"    : "PG3D"
};

// set attr for every player
playerEls.forEach(
    player => setStElAttrs(
        player     ,
        comStAttrs ,
        comElAttrs
    )
);





/////////////////////////
///// function to create info
/////////////////////////
///// style / short / long
/////////////////////////

// style attr
const createStyleAttrs = (width,height) => ({
    "width"  : `${width}px`  ,
    "height" : `${height}px`
});
// short attr
const createShortAttrs = (puzzle) => ({
    "puzzle" : puzzle
});
// long attr
const createLongAttrs = (pzdesc,latitude,longitude) => ({
    "experimental-puzzle-description" : pzdesc ,
    "viewer-link"      : "experimental-twizzle-explorer" ,
    "camera-latitude"  : latitude  ,
    "camera-longitude" : longitude ,
});

// style + short
const createStyleShortAttrs = (width,height,puzzle) => ({
    style   = createStyleAttrs(width,height),
    element = createShortAttrs(puzzle)
});
// style + long
const createStyleLongAttrs = (width,height,pzdesc,latitude,longitude) => ({
    style   = createStyleAttrs(width,height),
    element = createLongAttrs(pzdesc,latitude,longitude)
});



/////////////////////////
///// info by puzzle
/////////////////////////
///// style + short
///// style + long
/////////////////////////

const infoByPz = {
    "NxNxN / 2x2x2" : createStyleShortAttrs(
        200,180,
        "2x2x2"
    ),
    "NxNxN / 4x4x4" : createStyleShortAttrs(
        260,250,
        "4x4x4"
    ),
    "NxNxN / 5x5x5" : createStyleShortAttrs(
        300,300,
        "5x5x5"
    ),
    "NxNxN / 6x6x6" : createStyleShortAttrs(
        340,350,
        "6x6x6"
    ),
    "NxNxN / 7x7x7" : createStyleShortAttrs(
        380,400,
        "7x7x7"
    ),
    "tetra / face / 4x4" : createStyleLongAttrs(
        300,250,
        "t v 0 v 1 v 2",30,0
    )
};



/////////////////////////
///// puzzle name
/////////////////////////
///// id   : cube
///// attr : puzzle
/////////////////////////

let   queryId  = "#cube"
const cubeEl   = document.querySelector(queryId);
let   attrName = "puzzle";
const cubePz   = cubeEl.getAttribute(attrName);



/////////////////////////
///// get puzzle info
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// puzzle info
const pzInfo = infoByPz[cubePz];

// style attr
const pzStAttrs = pzInfo["style"];
// element attr
const pzElAttrs = pzInfo["element"];



/////////////////////////
///// set puzzle attr
/////////////////////////

// set attr for every player
playerEls.forEach(
    player => setStElAttrs(
        player    ,
        pzStAttrs ,
        pzElAttrs
    )
);