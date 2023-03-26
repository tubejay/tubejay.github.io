const setAttr = (el,attr) => {
    const [key,value] = attr;
    el.setAttribute(key,value);
};

const attrs = {
    "dark-mode"        : "dark",
    "background"       : "none",
    "background-color" : "#1a1a1a",
    "tempo-scale"      : "1.3",
    "visualization"    : "PG3D"
};

document.querySelectorAll("twisty-player").forEach(
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    el => Object.entries(attrs).forEach(
        // https://stackoverflow.com/a/12274782
        attr => setAttr(el,attr)
    )
);