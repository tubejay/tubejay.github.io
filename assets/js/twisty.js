// common attr for every player

//// bgColor : style attr
const bgColor = "#1a1a1a";
//// elAttrs : element attr
const elAttrs = {
    "background"    : "none",
    "tempo-scale"   : "1.3",
    "visualization" : "PG3D"
};

//// set attr by attrEntry
const setAttrByAttrEntry = (el,attrEntry,isStyle) => {
    //// attrEntry : [key,value]
    const [key,value] = attrEntry;
    //// set attr by key,value
    if (isStyle===true) {
        el.style[key] = value;
    } else {
        el.setAttribute(key,value);
    }
};

//// set attr by attrs
const setAttrByAttrs = (el,attrs,isStyle) => {
    //// elAttrs : element attr
    //// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    const attrEntries = Object.entries(attrs);
    attrEntries.forEach(
        //// https://stackoverflow.com/a/12274782
        attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
    );
};

//// set attr for every player
const playerEls = document.querySelectorAll("twisty-player");
playerEls.forEach(
    el => {
        //// bgColor : style attr
        el.style.backgroundColor = bgColor;
        //// elAttrs : element attr
        setAttrByAttrs(el,elAttrs,true);
    }
);



// specific attr by cube

//// attrsByPuzzle : attrs by puzzle
const attrsByPuzzle = {
    "2x2x2" : {
        "width"  : "200px",
        "height" : "180px"
    },
    "4x4x4" : {
        "width"  : "260px",
        "height" : "250px"
    }
};

//// test
const testEl = document.querySelector("#test");

//// get puzzle
const cubeEl     = document.querySelector("#cube");
const cubePuzzle = cubeEl.getAttribute("puzzle");
testEl.append(cubePuzzle)

//// get attrs
const cubeAttrs = attrsByPuzzle[cubePuzzle];
testEl.append(cubeAttrs)

//// set puzzle/attrs for every player
playerEls.forEach(
    player => {
        //// set puzzle
        player.setAttribute("puzzle",cubePuzzle);
        //// set attrs
        setAttrByAttrs(player,cubeAttrs,true);
    }
);