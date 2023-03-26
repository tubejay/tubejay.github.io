const setAttr = (el,attr) => {
    const [key,value] = attr;
    el.setAttribute(key,value);
};

const attrs = {
    "background"       : "none",
    "tempo-scale"      : "1.3",
    "visualization"    : "PG3D"
};
const bgcolor = "#1a1a1a";

document.querySelectorAll("twisty-player").forEach(
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    el => {
        // element
        // bgcolor
        el.style.backgroundColor = bgcolor;
        // attr
        // setAttr
        Object.entries(attrs).forEach(
            // https://stackoverflow.com/a/12274782
            attr => setAttr(el,attr)
        );
    }
);

const cubeElOld = document.querySelector(".page-cube");
const cubeText = cubeElOld.textContent;

const cubeElNew = document.createElement("div");
const cubeNewText = document.createTextNode(cubeText);
cubeElNew.appendChild(cubeNewText);

document.body.insertBefore(cubeElNew,cubeElOld);