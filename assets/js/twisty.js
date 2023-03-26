const setAttr = (el,attr) => {
    const [key,value] = attr;
    el.setAttribute(key,value);
};

const attrs = {
    "background"       : "none",
    "tempo-scale"      : "1.3",
    "visualization"    : "PG3D"
};

document.querySelectorAll("twisty-player").forEach(
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    el => {
        el.style.backgroundColor = "#1a1a1a";
        Object.entries(attrs).forEach(
            // https://stackoverflow.com/a/12274782
            attr => setAttr(el,attr)
        );
    }
);