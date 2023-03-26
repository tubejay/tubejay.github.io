const setAttributes = (el,attrs) => {
    Object.entries(attrs).forEach(
        (key,value) => el.setAttribute(key,value)
    );
};

const attrs = {
    "dark-mode"   : "dark",
    "background"  : "#1a1a1a",
    "tempo-scale" : "1.3"
};

document.querySelectorAll("twisty-player").forEach(
    el => setAttributes(el,attrs)
);