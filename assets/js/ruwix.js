/////////////////////////
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// test function
/////////////////////////

// basic
const testText = (text,useBr=true) => {
    // https://stackoverflow.com/a/19415581
    if (testOn !== "true") {return null;};
    cubeEl.append(text);
    const brEl = document.createElement("br");
    if (useBr) { cubeEl.appendChild( brEl ); };
};
const testHr = (n=30) =>
    testText( "=".repeat(n) );
const testBr = () =>
    testHr(0);
const testSp = n => {
    // https://stackoverflow.com/a/37417004
    if (testOn !== "true") {return null;};
    [...Array(n)].forEach( () =>
        cubeEl.appendChild( document.createTextNode("\u00a0") )
        // https://um-sal.tistory.com/9
        // https://learn.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-7.0
    );
}

// sub
const valueStrLength = value =>
    String(value).length;
const arrayMaxLength = arr =>
    Math.max( ...(
        arr.map( valueStrLength )
    ) );
const isObject = x => {
    // https://www.geeksforgeeks.org/how-to-check-if-the-provided-value-is-an-object-created-by-the-object-constructor-in-javascript/
    try     { return x.constructor===Object }
    catch   { return false                  };
};

// print
const testTextPadRight = (text,totalLength) => {
    if (testOn !== "true") {return null;};
    testText(text,false);
    const textLength = text.length;
    const countPad   = totalLength - textLength;
    testSp(countPad);
};
const testNodeList = (nodelist,depth=2) => {
    if (testOn !== "true") {return null;};
    nodelist.forEach( (node,index) =>
        [ testSp(depth) , testText( "- " + index + " : " + node.nodeName ) ]
    );
};
const testArray = (arr,depth=2) => {
    if (testOn !== "true") {return null;};
    arr.forEach( (value,index) =>
        [ testSp(depth) ,  testText( "- " + index + " : " + value ) ]
    );
};
const testElement = (el,depth=2) => {
    if (testOn !== "true") {return null;};
    const attrArray     = Array.from(el.attributes);
    const nameLengthMax = arrayMaxLength( attrArray.map(attr => attr.name) );
    attrArray.forEach( attr => [
        testSp(depth) , testText( "- " , false ) ,
        testTextPadRight( attr.name , nameLengthMax ) ,
        testText( " : " + attr.value )
    ] );
};
const testObj = (obj,depth=2) => {
    if (testOn !== "true") {return null;};
    const keyLengthMax = arrayMaxLength( Object.keys(obj) );
    Object.entries(obj).forEach( ( [key,value] ) => {
            // space
            testSp(depth);
            // object
            if (isObject(value)) {
                [
                    testText( "- " + key ) ,
                    testObj(value,depth+2)
                ]
            // array
            } else if (Array.isArray(value)) {
                [
                    testText( "- " + key ) ,
                    testArray(value,depth+2)
                ]
            // element
            // https://stackoverflow.com/a/36894871
            } else if (value instanceof Element) {
                [
                    testText( "- " + key ) ,
                    testElement(value,depth+2)
                ]
            // else
            } else {
                [
                    testText( "- " , false ) ,
                    testTextPadRight( key , keyLengthMax ) ,
                    testText( " : " + value )
                ]
            };
    } );
};





/////////////////////////
///// test check
/////////////////////////

// element
queryText    = "#cube";
const cubeEl = document.querySelector(queryText);

// test
queryText    = "teston";
const testOn = cubeEl.getAttribute(queryText);





try {





/////////////////////////
///// function
/////////////////////////

// set attr by attrEntry
// isStyle
// true : style attr
// else : element attr
const setAttrByAttrEntry = (el,[key,value],isStyle) =>
    isStyle
    ? [ el.style[key]=value ]
    : [ el.setAttribute(key,value) ];


// set attr by attrs
// https://stackoverflow.com/a/12274782
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const setAttrByAttrs = (el,attrs,isStyle) =>
    Object.entries(attrs).forEach(
        attrEntry => setAttrByAttrEntry(el,attrEntry,isStyle)
    );

// set style/element attr
const setStElAttrs = (el,StElAttrs) =>
    [
        [ StElAttrs["style"]   , true  ] ,
        [ StElAttrs["element"] , false ]
    ].forEach( attrsEntry => setAttrByAttrs( el, ...attrsEntry ) );





/////////////////////////
///// iframe elements
/////////////////////////
///// tag : iframe
/////////////////////////

queryText       = "iframe";
const iframeEls = document.querySelectorAll(queryText);

testHr();
testText("iframeEls");
testNodeList(iframeEls);
testHr();
testBr()





/////////////////////////
///// src for each iframe
/////////////////////////
///// define function
/////////////////////////

// get attr name
const getNamesUse = (el,namesExcept) =>
    el.getAttributeNames().filter(
        attrName => !namesExcept.includes(attrName)
    );
// create attrs
// https://stackoverflow.com/a/53508215
const createUseAttrs = (el,namesUse) =>
    Object.fromEntries( namesUse.map(
        attrName => [ attrName , el.getAttribute(attrName) ]
    ) );
// get use attrs
const getUseAttrs = (el,namesExcept) =>
    createUseAttrs( el , getNamesUse(el,namesExcept) );

// base URL
const baseURL = "https://ruwix.com/widget/3d/";
// create query string
// "key=value"
const createQueryString = ( [key,value] ) =>
    key + '=' + value;
// create src
// base url + "?" + quert string
const createSrc = allElAttrs =>
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    // "key=value&key=value"
    baseURL + "?" + Object.entries(allElAttrs).map(createQueryString).join("&");

// insert after
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
// before : targetEl
// after  : [ targetEl , insertEl ]
const insertAfter = (targetEl,insertEl) =>
    targetEl.parentNode.insertBefore(
        insertEl , targetEl.nextSibling
    );
// insert div parent
// https://stackoverflow.com/a/6938316
// before : targetEl
// after  : divEl > targetEl
const insertDivParent = targetEl => {
    // parentOld > targetEl
    const parentOld = targetEl.parentNode;
    // parentOld > divEl
    const divEl = document.createElement("div");
    parentOld.replaceChild(divEl,targetEl);
    // divEl > targetEl
    divEl.appendChild(targetEl);
    // return divEl
    return divEl;
};
// create link element
// set : href/text
const createLink = (href,text) => {
    // create
    const linkEl   = document.createElement("div");
    const linkText = document.createElement("a");
    // set href/text
    linkText.setAttribute("href",href);
    linkText.innerText = text;
    // set style
    // https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    const linkStyle = {
            "width"            : "250px"   ,
            "height"           : "30px"    ,
            "font-size"        : "small"   ,
            "background-color" : "#1a1a1a" ,
            "text-align"       : "end"     ,
            "display"          : "flex"    ,
            "align-items"      : "center"
    };
    setAttrByAttrs(linkEl,linkStyle,true);
    // linkEl > linkText
    linkEl.appendChild(linkText);
    // return
    return linkEl;
};
// insert link
// before : targetEl
// after  : divEl > { targetEl , linkEl }
const insertLinkAfter = (targetEl,href,text) => {
    // divEl > targetEl
    const divEl = insertDivParent(targetEl);
    // divEl > { targetEl , linkEl }
    insertAfter(
        targetEl ,
        createLink(href,text)
    );
    // divEl style attr
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
    const divAttrs = {
            "display"        : "flex"   ,
            "flex-direction" : "column" ,
            "column-gap"     : "0"      ,
            "margin-top"     : "5px"    ,
            "margin-bottom"  : "15px"
    };
    setAttrByAttrs(divEl,divAttrs,true);
};



/////////////////////////
///// src for each iframe
/////////////////////////
///// use function
/////////////////////////

// get test element
queryText           = "#test";
const iframeTestEls = document.querySelectorAll(queryText);

testHr();
testText("iframeTestEls");
testNodeList(iframeTestEls);
testHr();
testBr()

// attr name except : id
const namesExcept = ["id"];
// common element attr
// hover/speed/flags
const comElAttrs  = {
    hover : 9,
    speed : 500,
    flags : "canvas"
};
testHr();
testText("comElAttrs");
testObj(comElAttrs);
testHr();
testBr();
// link text
const linkText = "Ruwix 3D Cube Generator";

// insert link for every iframe
iframeTestEls.forEach( iframeTest => {
    // create src
    // https://stackoverflow.com/a/43626263
    const src = createSrc( Object.assign(
        {} , ...( [
            comElAttrs ,
            getUseAttrs(iframeTest,namesExcept)
        ] )
    ) );
    // set src
    iframeTest.setAttribute("src",src);
    // insert link
    insertLinkAfter(iframeTest,src,linkText);
} );





/////////////////////////
///// common attr for every iframe
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// create common attr
const comStElAttrs = {
    // style attr
    "style" : {
            "width"            : "250px"       ,
            "height"           : "300px"       ,
            "background-color" : "#1a1a1a"     ,
            "border-style"     : "none"        ,
            "border-color"     : "transparent" ,
            "border-width"     : "0px"         ,
            "margin-top"       : "0px"         ,
            "margin-bottom"    : "0px"         ,
    },
    // element attr
    "element" : {
            "scrolling"        : "no"
    }
};

testHr();
testText("comStElAttrs");
testObj(comStElAttrs);
testHr();
testBr();

// set attr for every iframe
iframeEls.forEach( iframe =>
    setStElAttrs( iframe , comStElAttrs )
);





/////////////////////////
///// image elements
/////////////////////////

queryText = "img";
const imageEls = document.querySelectorAll(queryText);

testHr();
testText("imageEls");
testNodeList(imageEls);
testHr();
testBr()





/////////////////////////
///// common attr for every image
/////////////////////////

// imgStAttrs : style attr
const imgStAttrs = {
    "max-width" : "96px"
};

// set attr for every image
imageEls.forEach( image =>
    setAttrByAttrs( image , imgStAttrs , true )
);





/////////////////////////
///// image elements
/////////////////////////
///// class : rotate
///// attr  : deg
/////////////////////////

queryText            = "img.rotate";
const imageRotateEls = document.querySelectorAll(queryText);

testHr();
testText("imageRotateEls");
testNodeList(imageRotateEls);
testHr();
testBr()



/////////////////////////
///// style attr
/////////////////////////
///// key   : transform
///// value : rotate
/////////////////////////

imageRotateEls.forEach( image => {
    // deg of image
    queryText     = "deg";
    const deg     = image.getAttribute(queryText);
    // stAttrs : style attr
    const stAttrs = {
        "transform" : `rotate(${deg}deg)`
    };
    // set style attr
    setAttrByAttrs( image , stAttrs , true );
} );





/////////////////////////
///// image elements
///// class : translate
///// attr  : axis/disp
/////////////////////////

queryText               = "img.translate";
const imageTranslateEls = document.querySelectorAll(queryText);

testHr();
testText("imageTranslateEls");
testNodeList(imageTranslateEls);
testHr();
testBr()



/////////////////////////
///// style attr
///// max-width  : initial
///// max-height : initial
///// transform  : translate
/////////////////////////

imageTranslateEls.forEach( image => {
    // axis of image
    queryText     = "axis";
    const axis    = image.getAttribute(queryText);
    // disp of image
    queryText     = "disp";
    const disp    = image.getAttribute(queryText);
    // stAttrs : style attr
    const stAttrs = {
        "max-width"  : "initial",
        "max-height" : "initial",
        "transform"  : `translate${axis}(${disp})`
    };
    // set style attr
    setAttrByAttrs( image , stAttrs , true );
} );





/////////////////////////
///// div elements
///// class : wrapper
/////////////////////////

queryText           = "div.wrapper";
const divWrapperEls = document.querySelectorAll(queryText);

testHr();
testText("divWrapperEls");
testNodeList(divWrapperEls);
testHr();
testBr()



/////////////////////////
///// style attr
/////////////////////////
///// display    : inline-block
///// max-width  : 96px
///// max-height : 96px
///// overflow   : hidden
/////////////////////////

divWrapperEls.forEach( wrapper => {
    // stAttrs : style attr
    const stAttrs = {
        // https://www.w3schools.com/css/css_inline-block.asp
        "display"    : "inline-block" ,
        "max-width"  : "96px"         ,
        "max-height" : "96px"         ,
        "overflow"   : "hidden"
    };
    // set style attr
    setAttrByAttrs( wrapper , stAttrs , true );
} );





} catch (error) { testText(error) };