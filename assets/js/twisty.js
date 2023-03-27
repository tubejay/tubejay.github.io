// common attr for every player

//// bgColor : style attr
const bgColor = "#1a1a1a";
//// elAttrs : element attr
const elAttrs = {
    "background"    : "none",
    "tempo-scale"   : "1.3",
    "visualization" : "PG3D"
};

//// set attribute by attrEntry
const setAttrByAttrEntry = (el,attrEntry) => {
    //// attrEntry : [key,value]
    const [key,value] = attrEntry;
    //// set attr by key,value
    el.setAttribute(key,value);
};

//// set attribute for every player
const playerEls = document.querySelectorAll("twisty-player");
playerEls.forEach(
    el => {
        //// bgColor : style attribute
        el.style.backgroundColor = bgColor;
        //// elAttrs : element attribute
        //// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        const attrEntries = Object.entries(elAttrs);
        attrEntries.forEach(
            //// https://stackoverflow.com/a/12274782
            attrEntry => setAttrByAttrEntry(el,attrEntry)
        );
    }
);



// specific attribute by cube

//// get puzzle
const cubeEl     = document.querySelector("#cube");
const cubePuzzle = cubeEl.getAttribute("puzzle");

//// set puzzle for every player
playerEls.forEach(
    player => player.setAttribute("puzzle",cubePuzzle)
);