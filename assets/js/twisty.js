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
const testHrLine = (n=25) => testLine("=".repeat(n));
const testBrLine = () => testHrLine(0);

// append entry
const testEntryText = entry => {
    const [key,value] = entry;
    return `${key} : ${value}`;
};
const testSubEntryText = entry => {
    const entryText = testEntryText(entry);
    return `- ${entryText}`;
};
const testEntry = entry => {
    const [key,value] = entry;
    // value : not object
    if (typeof value !== "object") {
        testLine( testEntryText(entry) );
    // value : object
    } else {
        testLine(key);
        const valueEntries = Object.entries(value);
        valueEntries.forEach(
            valueEntry => testLine( testSubEntryText(valueEntry) )
        );
    }
};

const testObject = el => Object.entries(el).forEach(testEntry);
const testNodeList = els => els.forEach(
    el => {
        const elObj = {};
        const elName = el.nodeName;
        const elText = el.textContent;
        elObj["nodeName"] = elName;
        testObject(elObj);
    }
);

const testAttrs = el => {
    // testEl exception
    if (!testEl) {return null}
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
    } else {
        testLine(el);
    };
    // end
    testHrLine();
};

testAttrs("test starts");


try {


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
///// puzzle name
/////////////////////////
///// id   : cube
///// attr : puzzle
/////////////////////////

const cubeEl = document.querySelector("#cube");
const cubePz = cubeEl.getAttribute("puzzle");
testAttrs(cubePz);





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
// style + short
// style + long
const createStyleElementAttrs = arr => {
    // array length
    const arrLen = arr.length;
    // 3 : style + short
    if (arrLen===3) {
        return createStyleShortAttrs(...arr);
    // 5 : style + long
    } else if (arrLen===5) {
        return createStyleLongAttrs(...arr);
    };
};

// preInfoEntry
// [text,array]
// -> [puzzle,arr]
// -> [puzzle,attrs]
const preInfoEntryToInfoEntry = (preInfoEntry,entryMap) => {
    const [puzzle,arr] = entryMap(...preInfoEntry);
    const attrs = createStyleElementAttrs(arr);
    return [puzzle,attrs];
};
// preInfo
// {text:array}
// -> [[text,array]]
// -> [[puzzle,attrs]]
// -> {puzzle:attrs}
const preInfoToInfo = (preInfo,entryMap) => Object.fromEntries(
    // preInfoEntry
    // [text,array]
    // -> [puzzle,attrs]
    Object.entries(preInfo).map(
        preInfoEntry => preInfoEntryToInfoEntry(preInfoEntry,entryMap)
    )
);
// preInfoEntries -> Info
const preInfoEntriesToInfo = preInfoEntries => {
    // preInfoEntry -> Info
    // preInfoEntry : [preInfo,entryMap]
    // Info         : {text:object}
    const infoArray = preInfoEntries.map(
        preInfoEntry => preInfoToInfo(...preInfoEntry)
    );
    // mergeInfo
    // [Info,...,Info] -> mergeInfo
    // https://stackoverflow.com/a/43626263
    const mergeInfo = Object.assign(
        {},
        ...infoArray
    );
    // return
    return mergeInfo;
};



/////////////////////////
///// info by puzzle
/////////////////////////
///// style + short
///// style + long
/////////////////////////

const preInfoNNN = {
    "2x2x2" : [200,180],
    "4x4x4" : [260,250],
    "5x5x5" : [300,300],
    "6x6x6" : [340,350],
    "7x7x7" : [380,400]
};
const entryMapNNN = (puzzle,attrs) => {
    // attrs
    //// [width,height]
    //// -> [width,height,puzzle]
    attrs.push(puzzle);
    //// -> object
    // puzzle
    //// "2x2x2"
    //// -> "NxNxN / 2x2x2"
    puzzle = "NxNxN / " + puzzle;
    // [puzzle,attrs]
    return [puzzle,attrs];
};
const preInfoEntryNNN = [
    preInfoNNN  ,
    entryMapNNN
];

const preInfoTetraFace = {
    "2x2" : [250,200,"t f 0",30,0]         ,
    "3x3" : [250,200,"pyraminx"]           ,
    "4x4" : [300,250,"t v 0 v 1 v 2",30,0]
};
const entryMapTetraFace = (puzzle,attrs) => {
    // attrs
    //// array
    // puzzle
    //// "2x2"
    //// -> "tetra / face / 2x2"
    puzzle = "tetra / face / " + puzzle;
    // [puzzle,attrs]
    return [puzzle,attrs]
};
const preInfoEntryTetraFace = [
    preInfoTetraFace  ,
    entryMapTetraFace
];

const preInfoEntries = [
    preInfoEntryNNN       ,
    preInfoEntryTetraFace
];
const infoByPz = preInfoEntriesToInfo(preInfoEntries);
testAttrs(infoByPz);

/*
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
    "tetra / face / 2x2" : createStyleLongAttrs(
        250,200,
        "t f 0",30,0
    ),
    "tetra / face / 3x3" : createStyleShortAttrs(
        250,200,
        "pyraminx"
    ),
    "tetra / face / 4x4" : createStyleLongAttrs(
        300,250,
        "t v 0 v 1 v 2",30,0
    ),
};
*/





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





/////////////////////////
///// get common attr
/////////////////////////
///// element attr
///// by page
/////////////////////////

// attr name
// except : id/puzzle
// https://stackoverflow.com/a/53508215
const namesExcept    = ["id","puzzle"];
const pzAttrsName    = cubeEl.getAttributeNames();
const pzComAttrsName = pzAttrsName.filter(
    attrName => !namesExcept.includes(attrName)
);
// attr
const pzComAttrsEntry = pzComAttrsName.map(
    attrName => [attrName,cubeEl.getAttribute(attrName)]
);
const pzComAttrs      = Object.fromEntries(pzComAttrsEntry);
testAttrs(pzComAttrs);



/////////////////////////
///// set common attr
/////////////////////////

// set attr for every player
playerEls.forEach(
    player => setAttrByAttrs(
        player     ,
        pzComAttrs ,
        false
    )
);

testAttrs("test ends");

} catch (error) {
    testAttrs(error)
};