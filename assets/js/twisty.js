/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

// test element
const testEl = document.querySelector("#test");

// append line
const testLine = el => {
    // new line
    const br = document.createElement("br");
    testEl.appendChild(br);
    // append
    testEl.append(el);
};
const testHrLine = n => testLine("=".repeat(n));
const testBrLine = () => testHrLine(0);

// append entry
const testEntryText = entry => {
    const [key,value] = entry;
    return `${key} : ${value}`;
};
const testEntry = entry => {
    const [key,value] = entry;
    // value : not object
    if (typeof value !== "object") {
        testLine( testEntryText(entry) );
    // value : object
    } else {
        testLine(key);
        Object.entries(value).forEach(
            entry => `- ${testEntryText(entry)}`
        ).forEach(testLine);
    }
};

const testNodeList = els => els.forEach(
    el => {
        const nodeObject = {};
        nodeObject[el.nodeName] = {
            "nodeType"  : el.nodeType  ,
            "nodeValue" : el.nodeValue
        };
        testEntry( Object.entries(nodeObject) );
    }
);
const testObject = el => Object.entries(el).forEach(testEntry);

const testAttrs = el => {
    // start
    testBrLine();
    testHrLine();
    // string
    if (typeof el === "string") {
        testLine(el);
    // nodelist
    } else if (el instanceof NodeList) {
        testNodeList(el);
    // object
    } else if (typeof el === "object") {
        testObject(el);
    };
    // end
    testHrLine();
};

if (testEl) {
    testAttrs("test starts");
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

const playerEls = document.querySelectorAll("twisty-player");
testAttrs(playerEls);



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
testAttrs({
    style   : comStAttrs ,
    element : comElAttrs
});

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
    style   : createStyleAttrs(width,height),
    element : createShortAttrs(puzzle)
});
// style + long
const createStyleLongAttrs = (width,height,pzdesc,latitude,longitude) => ({
    style   : createStyleAttrs(width,height),
    element : createLongAttrs(pzdesc,latitude,longitude)
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

const cubeEl = document.querySelector("#cube");
const cubePz = cubeEl.getAttribute("puzzle");
testAttrs(cubePz);



/////////////////////////
///// get puzzle info
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// puzzle info
const pzInfo = infoByPz[cubePz];
testAttrs(pzInfo);

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
testAttrs("test ends");
