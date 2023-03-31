/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

// test element
const testEl = document.querySelector("#test");

// append line
const testLine = el => {
    // append
    testEl.append(el);
    // new line
    const br = document.createElement("br");
    testEl.appendChild(br);
};
const testHrLine = (n=25) => testLine("=".repeat(n));
const testBrLine = () => testHrLine(0);

// append entry
const objectMaxKeyLength = obj => Math.max(
    ...Object.keys(ojb).map(
        key => key.length
    )
);
const testEntryText = (entry,length=0) => {
    const [key,value] = entry;
    return `${ length>0 ? key.padEnd(length) : key } : ${value}`;
};
const testSubEntryText = (entry,length=0) => {
    const entryText = testEntryText(entry,length);
    return `- ${ entryText }`;
};
const testEntry = (entry,length) => {
    const [key,value] = entry;
    // value : not object
    if (typeof value !== "object") {
        testLine( testEntryText(entry,length) );
    // value : object
    } else {
        testLine(key);
        const valueEntries   = Object.entries(value);
        const valueKeyLength = valueEntries.map(
            valueEntry => {
                const [valueKey,valueValue] = valueEntry;
                return valueKey.length;
            }
        );
        const valueKeyLengthMax = Math.max(...valueKeyLength);
        valueEntries.forEach(
            valueEntry => testLine( testSubEntryText(valueEntry,valueKeyLengthMax) )
        );
    }
};

const testObject = el => {
    const entries      = Object.entries(el);
    const maxKeyLength = objectMaxKeyLength(el);
    entries.map(
        entry => testEntry(entry,maxKeyLength)
    );
};
const testNodeList = els => els.forEach(
    el => {
        const elObj = {};
        const elName = el.nodeName;
        const elText = el.textContent;
        elObj["nodeName"] = elName;
        testObject(elObj);
    }
);

const testAttrs = (el,hrbr=true) => {
    // testEl exception
    if (!testEl) {return null}
    // hr
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
    // hrbr
    hrbr ? [testHrLine(),testBrLine()] : "";
};
const testTitle = text => testAttrs(text,false);

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
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// player elements
/////////////////////////
///// tag : twisty-player
/////////////////////////

queryText       = "twisty-player";
const playerEls = document.querySelectorAll(queryText);

testTitle("playerEls");
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

testTitle("comStAttrs");
testAttrs(comStAttrs);

testTitle("comElAttrs");
testAttrs(comElAttrs);

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

queryText    = "#cube";
const cubeEl = document.querySelector(queryText);
queryText    = "puzzle";
const cubePz = cubeEl.getAttribute(queryText);

testTitle("cubePz");
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
    const attrs        = createStyleElementAttrs(arr);
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

testTitle("pzInfo");
testAttrs(pzInfo);



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

testTitle("pzComAttrs");
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