/////////////////////////
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// test
/////////////////////////
///// id : test
/////////////////////////

// element
queryText    = "#test";
const testEl = document.querySelector(queryText);

// function : basic
const testText = (text,useBr=true) => {
    if (!testEl) {return null;};
    testEl.append(text);
    if (useBr) { testEl.appendChild( document.createElement("br") ); };
};
const testHr = (n=30) => testText( "=".repeat(n) );
const testBr = () => testHr(n=0);
// https://stackoverflow.com/a/37417004
const testSp = n => {
    if (!testEl) {return null;};
    [...Array(n)].forEach( () =>
        testEl.appendChild( document.createTextNode("\u00a0") )
        // https://um-sal.tistory.com/9
        // https://learn.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-7.0
    );
}

// function : sub
const arrayMaxLength = arr => {
    const arrLength = arr.map( value => String(value).length );
    return Math.max(...arrLength);
};
// https://www.geeksforgeeks.org/how-to-check-if-the-provided-value-is-an-object-created-by-the-object-constructor-in-javascript/
const isObject = x => {
    try     { return x.constructor===Object }
    catch   { return false                  };
};

// function : print
const testTextPadRight = (text,totalLength) => {
    if (!testEl) {return null;};
    testText(text,false);
    const textLength = text.length;
    const countPad   = totalLength - textLength;
    testSp(countPad);
};
const testNodeList = (nodelist,depth=2) => {
    if (!testEl) {return null;};
    nodelist.forEach( (node,index) =>
        [ testSp(depth) , testText( "- " + index + " : " + node.nodeName ) ]
    );
};
const testArray = (arr,depth=2) => {
    if (!testEl) {return null;};
    arr.forEach( (value,index) =>
        [ testSp(depth) ,  testText( "- " + index + " : " + value ) ]
    );
};
const testElement = (el,depth=2) => {
    if (!testEl) {return null;};
    const attrArray     = Array.from(el.attributes);
    const nameLengthMax = arrayMaxLength( attrArray.map(attr => attr.name) );
    attrArray.forEach( attr => [
        testSp(depth) , testText( "- " , false ) ,
        testTextPadRight( attr.name , nameLengthMax ),
        testText( " : " + attr.value )
    ] );
};
const testObj = (obj,depth=2) => {
    if (!testEl) {return null;};
    const keyLengthMax = arrayMaxLength(Object.keys(obj));
    Object.entries(obj).map(
        entry => {

            // space
            testSp(n=depth);

            // key,value
            const [key,value] = entry;

            // object
            if (isObject(value)) {
                [ testText( "- " + key ) , testObj(value,depth+2) ]
                
            // array
            } else if (Array.isArray(value)) {
                [ testText( "- " + key ) , testArray(value,depth+2) ]

            // element
            // https://stackoverflow.com/a/36894871
            } else if (value instanceof Element) {
                [ testText( "- " + key ) , testElement(value,depth+2) ]

            // else
            } else { [
                testText( "- " , false ) , testTextPadRight( key , keyLengthMax ) ,
                testText( " : " + value )
            ] };

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
///// style attr
///// element attr
/////////////////////////

// create common attr
const comStElAttrs = {

    // style attr
    "style" : {
            "background-color"        : "#1a1a1a"     ,
            "margin-top"              : "5px"         ,
            "margin-bottom"           : "25px"        ,
            "border-style"            : "none"        ,
            "border-color"            : "transparent" ,
            "border-width"            : "0px"
    },

    // element attr
    "element" : {
            "dark-mode"               : "none"        ,
            "background"              : "none"        ,
            "visualization"           : "PG3D"        ,
            "hint-facelets"           : "floating"    ,
            "back-view"               : "none"        ,
            "experimental-drag-input" : "none"        ,
            "control-panel"           : "bottom-row"  ,
            "tempo-scale"             : "1.3"
    }

};

testHr();
testText("comStElAttrs");
testObj(comStElAttrs);
testHr();
testBr();

// set common attr for every player
playerEls.forEach( player => setStElAttrs( player , comStElAttrs ) );





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
///// function to create attrs
/////////////////////////
///// style
///// element : short / long
/////////////////////////

// style attr : width,height
const createStyleAttrs = (width,height) => ({
    "width"  : `${width}px`  ,
    "height" : `${height}px`
});
// element attr
// short : puzzle
const createShortAttrs = (puzzle) => ({
    "puzzle"      : puzzle    ,
    "viewer-link" : "twizzle"
});
// element attr
// long  : pzdesc,latitude,longitude
const createLongAttrs = (pzdesc,latitude,longitude) => ({
    "experimental-puzzle-description" : pzdesc    ,
    "camera-latitude"                 : latitude  ,
    "camera-longitude"                : longitude ,
    "viewer-link"                     : "experimental-twizzle-explorer"
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

// style + element
const createStyleElementAttrs = attrArr => {

    // array length
    const attrArrLen = attrArr.length;

    switch (attrArrLen) {
        // length : 3
        // width,height,puzzle
        // style + short
        case 3:
            return createStyleShortAttrs(...attrArr);
            break;
        // length : 5
        // width,height,pzdesc,latitude,longitude
        // style + long
        case 5:
            return createStyleLongAttrs(...attrArr);
            break;
    };

};



/////////////////////////
///// function to create info
/////////////////////////

// preInfoEntry -> InfoEntry
// preInfoEntry : [puzzleEnd,attrArr]
// InfoEntry    : [puzzle,attrs]
const preInfoEntryToInfoEntry = (preInfoEntry,puzzleStart) => {
    // puzzleEnd,attrArr
    const [puzzleEnd,attrArr] = preInfoEntry;
    // puzzleEnd -> puzzle
    const puzzle = puzzleStart + puzzleEnd;
    // attrArr -> attrs
    const attrs  = createStyleElementAttrs(attrArr);
    // return
    return [puzzle,attrs];
};
// preSet -> Info
// preSet : [preInfo,puzzleStart]
// Info   : {puzzle:attrs}
const preSetToInfo = preSet => {

    // preInfo,puzzleStart
    const [preInfo,puzzleStart] = preSet;

    // preInfo -> [preInfoEntry]
    // Object.entries
    const preInfoEntries = Object.entries( preInfo );

    // [preInfoEntry] -> [InfoEntry]
    // preInfoEntryToInfoEntry
    const InfoEntries = preInfoEntries.map( preInfoEntry => preInfoEntryToInfoEntry( preInfoEntry , puzzleStart ) );

    // [InfoEntry] -> Info
    // Object.fromEntries
    const Info = Object.fromEntries( InfoEntries );

    // return
    return Info;

};

// preSetArray -> infoArray -> infoCollect
const preSetArrayToInfoCollect = preSetArray => {

    // preSetArray -> infoArray
    // preSetToInfo
    const infoArray = preSetArray.map(preSetToInfo);

    // infoArray -> infoCollect
    // https://stackoverflow.com/a/43626263
    // Object.assign
    const infoCollect = Object.assign( {} , ...infoArray );

    // return
    return infoCollect;

};





/////////////////////////
///// collect puzzle info
/////////////////////////


// preSet : [preInfo,puzzleStart]
const preSetArray = [

    // NNN
    [
        {
            "2x2x2" : [200,180,"2x2x2"] ,
            "4x4x4" : [260,250,"4x4x4"] ,
            "5x5x5" : [300,300,"5x5x5"] ,
            "6x6x6" : [340,350,"6x6x6"] ,
            "7x7x7" : [380,400,"7x7x7"]
        },
        "NxNxN / "
    ],

    // tetra / face
    [
        {
            "2x2" : [250,200,"t f 0"        ,30,0] ,
            "3x3" : [250,200,"pyraminx"          ] ,
            "4x4" : [300,250,"t v 0 v 1 v 2",30,0]
        },
        "tetra / face / "
    ],

    // tetra / edge
    [
        {
            "2x2" : [200,180,"t e 0"                ,30,0] ,
            "3x3" : [300,250,"t e 0.346184634065199",30,0]
        },
        "tetra / edge / "
    ],

    // octa / face
    [
        {
            "2x2" : [200,180,"o f 0"      ,-30,0] ,
            "3x3" : [250,250,"fto"              ] ,
            "4x4" : [300,300,"o f 0.5 f 0",-30,0]
        },
        "octa / face / "
    ]

];

// preSetArray -> infoCollect
const infoCollect = preSetArrayToInfoCollect(preSetArray);

testHr();
testText("infoCollect");
testObj(infoCollect);
testHr();
testBr();



/////////////////////////
///// select puzzle info
/////////////////////////

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
playerEls.forEach( player => setStElAttrs( player , infoSelect ) );





/////////////////////////
///// get common attr
/////////////////////////
///// element attr
///// by page
/////////////////////////

// get attr
// except : id/puzzle
// https://stackoverflow.com/a/53508215
const namesExcept = ["id","puzzle"];
const nameFilter  = entry => {
    const [key,value] = entry;
    return !namesExcept.includes(key)
};
const pzComAttrs  = Object.fromEntries(
    Object.entries(cubeEl).filter( nameFilter )
);

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
playerEls.forEach( player => setAttrByAttrs( player , pzComAttrs , false ) );



} catch (error) { testText(error) };
