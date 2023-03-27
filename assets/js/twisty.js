/////////////////////////
///// test
/////////////////////////

const testEl = document.querySelector("#test");

const testAppend = el => {
    testEl.append('<br>');
    testEl.append(el);
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
        el		,
        stAttrs	,
        true
    );
    // elAttrs
    // isStyle : false
    setAttrByAttrs(
        el		,
        elAttrs	,
        false
    );
};

// get attr or empty
const getAttrOrEmpty = (obj,key) => obj.hasOwnPoperty(key) ? obj[key] : {};



/////////////////////////
///// player elements
/////////////////////////

const playerEls = document.querySelectorAll("twisty-player");



/////////////////////////
///// common attr for every player
/////////////////////////

// comStAttrs : style attr
const comStAttrs = {
    "background-color"	: "#1a1a1a"
};
// comElAttrs : element attr
const comElAttrs = {
    "background"		: "none",
    "tempo-scale"		: "1.3",
    "visualization"		: "PG3D"
};

// set attr for every player
playerEls.forEach(
    player => setStElAttrs(
        player		,
        comStAttrs	,
        comElAttrs
    )
);



/////////////////////////
///// specific attr for cube
/////////////////////////

// cubePz : puzzle for cube
const cubeEl = document.querySelector("#cube");
const cubePz = cubeEl.getAttribute("puzzle");

// cubeStAttrs : style attr
const infoPzStAttrs = {
    "2x2x2" : {
        width		: "200px",
        height  	: "180px"
    },
    "4x4x4" : {
        width		: "260px",
        height  	: "250px"
    },
    "5x5x5" : {
        width		: "300px",
        height  	: "300px"
    },
};
const cubeStAttrs = infoPzStAttrs[cubePz];

// cubeElAttrs : element attr 
const infoPzElAttrs = {
};
testAppend("before cubeElAttrs");
const cubeElAttrs = getAttrOrEmpty(infoPzElAttrs,cubePz);
testAppend("after cubeElAttrs");
cubeElAttrs.puzzle = cubePz;
testAppend("after puzzle");

// set attr for every player
playerEls.forEach(
    player => setStElAttrs(
        player		,
        cubeStAttrs	,
        cubeElAttrs
    )
);
