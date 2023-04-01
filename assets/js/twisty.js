/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

// element
const testEl = document.querySelector("#test");

// function : basic
const testText = (text,useBr=true) => {
    if (!testEl) {return null;};
    testEl.append(text);
    if (useBr) {
        const br = document.createElement("br");
        testEl.appendChild(br);
    };
};
const testHr = (n=30) => testText( "=".repeat(n) );
const testBr = () => testHr(n=0);
// https://stackoverflow.com/a/4503044
// testEl.setAttribute("white-space","pre");
// https://stackoverflow.com/a/37417004
const testSp = n => {
    if (!testEl) {return null;};
    [...Array(n)].forEach(
        // https://um-sal.tistory.com/9
        () => testEl.appendChild(
            // https://learn.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-7.0
            document.createTextNode("\u00a0")
        )
    );
}
// function : format
const arrayMaxLength = arr => {
    const arrLength = arr.map(
        value => String(value).length
    );
    return Math.max(...arrLength);
};
const testTextPadRight = (text,totalLength) => {
    if (!testEl) {return null;};
    testText(text,false);
    const textLength = text.length;
    const countPad   = totalLength - textLength;
    testSp(countPad);
};

// fumction : type
const isObject = x => {
    try     { return x.constructor===Object }
    catch   { return false                  };
};
const testNodeList = (nodelist,depth=2) => {
    if (!testEl) {return null;};
    nodelist.forEach(
        (node,index) => {
            testSp(depth);
            testText( "- " + index + " : " + node.nodeName );
        }
    );
};
const testArray = (arr,depth=2) => {
    if (!testEl) {return null;};
    arr.forEach(
        (value,index) => {
            testSp(depth);
            testText( "- " + index + " : " + value );
        }
    );
};
const testElement = (el,depth=2) => {
    if (!testEl) {return null;};
    const attrArray = Array.from(el.attributes);
    const nameLengthMax = arrayMaxLength(
        attrArray.map(attr => attr.name)
    );
    attrArray.forEach(
        attr => {
            testSp(depth);
            testText( "- " , false );
            testTextPadRight( attr.name , nameLengthMax );
            testText( " : " + attr.value );
        }
    );
};
const testObj = (obj,depth=2) => {
    if (!testEl) {return null;};
    const keyLengthMax = arrayMaxLength(Object.keys(obj));
    Object.entries(obj).map(
        entry => {
            testSp(n=depth);
            const [key,value] = entry;
            // object
            if (isObject(value)) {
                testText( "- " + key );
                testObj(value,depth+2);
            // array
            } else if (Array.isArray(value)) {
                testText( "- " + key );
                testArray(value,depth+2);
            // element
            // https://stackoverflow.com/a/36894871
            } else if (value instanceof Element) {
                testText( "- " + key );
                testElement(value,depth+2);
            // else
            } else {
                testText( "- " , false );
                testTextPadRight( key , keyLengthMax );
                testText( " : " + value );
            };
        }
    );
};

// test check
// testHr();
// testText("test");
// testHr();
// testBr();





try {

/////////////////////////
///// function
/////////////////////////

// set attr by attrEntry
const setAttrByAttrEntry = (el,attrEntry,isStyle) => {
    // attrEntry : [key,value]
    const [key,value] = attrEntry;
    // style attr
    if      ( isStyle===true    ) { el.style[key] = value;      }
    // element attr
    else if ( isStyle===false   ) { el.setAttribute(key,value); }
};

// set attr by attrs
// https://stackoverflow.com/a/12274782
const setAttrByAttrs = (el,attrs,isStyle) => {
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    Object.entries(attrs).forEach(
        attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
    );
};

// set style/element attr
const setStElAttrs = (el,stAttrs,elAttrs) => [
    // stAttrs
    // isStyle : true
    [stAttrs,true],
    // elAttrs
    // isStyle : false
    [elAttrs,false]
].forEach( attrsEntry => setAttrByAttrs( el, ...attrsEntry ) );





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
const comAttrs = {
    "style"   : comStAttrs ,
    "element" : comElAttrs
};

testHr();
testText("comAttrs");
testObj(comAttrs);
testHr();
testBr();

// set attr for every player
playerEls.forEach( player => setStElAttrs(
    player     ,
    comStAttrs ,
    comElAttrs
) );





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
testText( "cubeEl" );
testElement(cubeEl);
testHr();
testText( "cubePz : " + cubePz );
testHr();
testBr();





/////////////////////////
///// function to create info
/////////////////////////
///// style / short / long
/////////////////////////

// style attr
// width
// height
const createStyleAttrs = (width,height) => ({
    "width"  : `${width}px`  ,
    "height" : `${height}px`
});
// short attr
// puzzle
const createShortAttrs = (puzzle) => ({
    "puzzle" : puzzle
});
// long attr
// pzdesc
// latitude
// longitude
const createLongAttrs = (pzdesc,latitude,longitude) => ({
    "experimental-puzzle-description"   : pzdesc    ,
    "camera-latitude"                   : latitude  ,
    "camera-longitude"                  : longitude ,
    "viewer-link"                       : "experimental-twizzle-explorer"
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
    if      (arrLen===3) { return createStyleShortAttrs(...arr);    }
    // 5 : style + long
    else if (arrLen===5) { return createStyleLongAttrs(...arr);     };
};

// preInfoEntry -> InfoEntry
// preInfoEntry : [text,array]
// InfoEntry    : [puzzle,attrs]
const preInfoEntryToInfoEntry = (preInfoEntry,entryMap) => {
    // [text,array] -> [puzzle,arr]
    const [puzzle,arr] = entryMap(...preInfoEntry);
    // [puzzle,arr] -> [puzzle,attrs]
    const attrs        = createStyleElementAttrs(arr);
    // return
    return [puzzle,attrs];
};
// preSet -> Info
// preSet : [preInfo,entryMap]
// Info   : {puzzle:attrs}
const preSetToInfo = preSet => {
    // preInfo,entryMap
    const [preInfo,entryMap] = preSet;
    // preInfo -> [preInfoEntry]
    // Object.entries
    const preInfoEntries = Object.entries( preInfo );
    // [preInfoEntry] -> [InfoEntry]
    // map + preInfoEntryToInfoEntry
    const InfoEntries = preInfoEntries.map(
        preInfoEntry => preInfoEntryToInfoEntry( preInfoEntry , entryMap )
    );
    // [InfoEntry] -> Info
    // Object.fromEntries
    const Info = Object.fromEntries( InfoEntries );
    // return
    return Info;
};





/////////////////////////
///// info by puzzle
/////////////////////////
///// preInfo
///// entryMap
///// push
/////////////////////////

let infoArray = [];

// NNN
const preInfoNNN = {
    // "2x2x2" : [width,height]
    "2x2x2"    : [200,180] ,
    "4x4x4"    : [260,250] ,
    "5x5x5"    : [300,300] ,
    "6x6x6"    : [340,350] ,
    "7x7x7"    : [380,400]
};
const entryMapNNN = (text,array) => {
    // "NxNxN / 2x2x2"
    const puzzle = "NxNxN / " + text;
    // [width,height,"2x2x2"]
    const arr = [ ...array , text ];
    // return
    return [puzzle,arr];
};
const preSetNNN = [ preInfoNNN , entryMapNNN ];
const infoNNN   = preSetToInfo(preSetNNN);
infoArray.push(infoNNN);

// TetraFace
const preInfoTetraFace = {
    // "3x3" : [width,height,puzzle]
    "3x3"    : [250,200,"pyraminx"          ] ,
    // "2x2" : [width,height,pzdesc,latitude,longitude]
    "2x2"    : [250,200,"t f 0"        ,30,0] ,
    "4x4"    : [300,250,"t v 0 v 1 v 2",30,0]
};
const entryMapTetraFace = (text,array) => {
    // "tetra / face / 2x2"
    const puzzle = "tetra / face / " + text;
    // [width,height,puzzle]
    // [width,height,pzdesc,latitude,longitude]
    const arr = array;
    // return
    return [puzzle,arr]
};
const preSetTetraFace = [ preInfoTetraFace , entryMapTetraFace ];
const infoTetraFace   = preSetToInfo(preSetTetraFace);
infoArray.push(infoTetraFace);

// TetraEdge
const preInfoTetraEdge = {
    // "2x2" : [width,height,pzdesc,latitude,longitude]
    "2x2"    : [200,180,"t e 0"                ,30,0] ,
    "3x3"    : [300,250,"t e 0.346184634065199",30,0]
};
const entryMapTetraEdge = (text,array) => {
    // "tetra / edge / 2x2"
    const puzzle = "tetra / edge / " + text;
    // [width,height,pzdesc,latitude,longitude]
    const arr = array;
    // return
    return [puzzle,arr];
};
const preSetTetraEdge = [ preInfoTetraEdge , entryMapTetraEdge ];
const infoTetraEdge   = preSetToInfo(preSetTetraEdge);
infoArray.push(infoTetraEdge);





/////////////////////////
///// get puzzle info
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// collect puzzle info
// https://stackoverflow.com/a/43626263
// Object.assign
// ...infoArray
const infoCollect = Object.assign(
    {}, ...infoArray
);

// select puzzle info
const infoSelect = infoCollect[cubePz];

testHr();
testText("infoSelect");
testObj(infoSelect);
testHr();
testBr();



/////////////////////////
///// set puzzle attr
/////////////////////////

// set attr for every player
playerEls.forEach(
    player => setStElAttrs(
        player                ,
        infoSelect["style"]   ,
        infoSelect["element"]
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
    attrName => [ attrName , cubeEl.getAttribute(attrName) ]
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
// isStyle : false
playerEls.forEach(
    player => setAttrByAttrs( player , pzComAttrs , false )
);



} catch (error) { testText(error) };
