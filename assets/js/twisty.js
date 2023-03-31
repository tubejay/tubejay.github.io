/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

// test element
const testEl = document.querySelector("#test");

// test function
const testText = (text,useBr=true) => {
    testEl.append(text);
    if (useBr) {
        const br = document.createElement("br");
        testEl.appendChild(br);
    };
};
const testHr   = (n=30) => testText( "=".repeat(n) );
const testBr   = () => testHr(n=0);
// https://stackoverflow.com/a/4503044
testEl.setAttribute("white-space","pre");
// https://um-sal.tistory.com/9
const testSp   = (n=1) => {
    // https://learn.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-7.0
    const spEl   = document.createTextNode("\u0020");
    // https://stackoverflow.com/a/37417004
    [...Array(n)].forEach(
        () => testEl.appendChild(spEl)
    )
};
const isObject = x => {
    try {
        return x.constructor===Object
    } catch {
        return false
    };
};
const testObj  = (obj,depth=0) => Object.entries(obj).map(
    entry => {
        const [key,value] = entry;
        testSp(depth);
        testText("-" + key,false);
        if (isObject(value)) {
            testBr();
            testObj(value,depth+1);
        } else {
            testSp(1);
            testText(": " + value);
        };
    }
);
const testNodeList = nodelist => nodelist.forEach(
    node => testText( "- nodeName : " + node.nodeName )
);

// test check
testHr();
testText("test");
testHr();
testBr();

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

testHr();
testText("playerEls");
testNodeList(playerEls);
testHr();
testBr()



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

testHr();
testText("comStAttrs");
testObj(comStAttrs);
testHr();
testText("comElAttrs");
testObj(comElAttrs);
testHr();
testBr()

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

testHr();
testText("cubePz : "+cubePz);
testHr();
testBr();





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

testHr();
testText("preInfoNNN");
testObj(preInfoNNN);
testHr();
testBr();

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

testHr();
testText("preInfoTetraFace");
testObj(preInfoTetraFace);
testHr();
testBr();

const preInfoEntries = [
    preInfoEntryNNN       ,
    preInfoEntryTetraFace
];
const infoByPz = preInfoEntriesToInfo(preInfoEntries);

testHr();
testText("infoByPz");
testObj(infoByPz);
testHr();
testBr();





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

testHr();
testText("pzInfo");
testObj(pzInfo);
testHr();
testBr();



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

testHr();
testText("pzComAttrs");
testObj(pzComAttrs);
testHr();
testBr();



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



} catch (error) {
    testText(error)
};
