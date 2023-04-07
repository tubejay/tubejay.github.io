/////////////////////////
///// let queryText
/////////////////////////

let queryText = "";





/////////////////////////
///// test function
/////////////////////////



/////////////////////////
///// spread array
/////////////////////////

const spreadArray = x =>
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    [ ...x ];



/////////////////////////
///// text format
/////////////////////////

const testText = (text,useBr=true) => {
    // https://stackoverflow.com/a/19415581
    if (!testOn) {return null;};
    cubeEl.append(text);
    const brEl = document.createElement("br");
    if (useBr) { cubeEl.appendChild( brEl ); };
};

const testHr = (n=30) =>
    testText( "=".repeat(n) );

const testBr = () =>
    testHr(0);

const testSp = n => {
    if (!testOn) {return null;};
    // https://stackoverflow.com/a/37417004
    spreadArray( Array(n) ).forEach( () =>
        // https://um-sal.tistory.com/9
        cubeEl.appendChild(
            // https://learn.microsoft.com/en-us/dotnet/api/system.char.iswhitespace?view=net-7.0
            document.createTextNode("\u00a0")
        )
    );
}

const testTextPadRight = (text,totalLength) => {
    if (!testOn) {return null;};
    testText(text,false);
    const textLength = text.length;
    const countPad   = totalLength - textLength;
    testSp(countPad);
};



/////////////////////////
///// compute length
/////////////////////////

const valueStrLength = value =>
    String(value).length;

const arrayMaxLength = arr =>
    Math.max( ...(
        arr.map( valueStrLength )
    ) );

const arrayAttrNameMaxLength = arr =>
    arrayMaxLength(
        arr.map( attr => attr.name )
    );

const objKeyMaxLength = obj =>
    arrayMaxLength(
        Object.keys(obj)
    );



/////////////////////////
///// check type
/////////////////////////

const checkObject = x => {
    // https://www.geeksforgeeks.org/how-to-check-if-the-provided-value-is-an-object-created-by-the-object-constructor-in-javascript/
    try   { return x.constructor===Object }
    catch { return false                  };
};

const checkArray = x =>
    Array.isArray(x);

const checkNodeList = x =>
    // https://stackoverflow.com/a/36857902
    x instanceof NodeList;

const checkElement = x =>
    // https://stackoverflow.com/a/36894871
    x instanceof Element;

const checkType = x =>
    // object
    checkObject(x)   ? "object"   :
    // array
    checkArray(x)    ? "array"    :
    // nodelist
    checkNodeList(x) ? "nodelist" :
    // element
    checkElement(x)  ? "element"  :
    // else
    "else";



/////////////////////////
///// test : except object
/////////////////////////

const testArray = (arr,depth=2) => {
    if (!testOn) {return null;};
    arr.forEach( (value,index) =>
        [
            testSp(depth) ,
            testText( "- " + index + " : " + value )
        ]
    );
};

const testNodeList = (nodelist,depth=2) => {
    if (!testOn) {return null;};
    nodelist.forEach( (node,index) =>
        [
            testSp(depth) ,
            testText( "- " + index + " : " + node.nodeName )
        ]
    );
};

const testElement = (el,depth=2) => {
    if (!testOn) {return null;};
    const attrArray     = Array.from(el.attributes);
    const nameLengthMax = arrayAttrNameMaxLength(attrArray);
    attrArray.forEach( attr =>
        [
            testSp(depth) , testText( "- " , false ) ,
            testTextPadRight( attr.name , nameLengthMax ) ,
            testText( " : " + attr.value )
        ]
    );
};

const testElse = (el,depth=2) => {
    if (!testOn) {return null;};
    const objEl         = {
        "typeof" : typeof el ,
        "value"  : el
    };
    const nameLengthMax = objKeyMaxLength(objEl);
    Object.entries(objEl).forEach( ([name,content]) =>
        [
            testSp(depth) , testText( "- " , false ) ,
            testTextPadRight( name , nameLengthMax ) ,
            testText( " : " + content )
        ]
    );
};



/////////////////////////
///// test : object
/////////////////////////

const testObj  = (obj,depth=2) => {
    if (!testOn) {return null;};
    const keyLengthMax = objKeyMaxLength(obj);
    Object.entries(obj).forEach( ( [key,value] ) => {
        // space
        testSp(depth);
        // by type
        switch ( checkType(value) ) {
            // object
            case "object"   :
                testText( "- " + key );
                testObj( value , depth+2 );
                break;
            // array
            case "array"    :
                testText( "- " + key );
                testArray( value , depth+2 );
                break;
            // nodelist
            case "nodelist" :
                testText( "- " + key );
                testNodeList( value , depth+2)
                break;
            // element
            case "element"  :
                testText( "- " + key );
                testElement( value , depth+2 );
                break;
            // else
            case "else"     :
                testText( "- " , false );
                testTextPadRight( key , keyLengthMax);
                testText( " : " + value )
                break;
        };
    } );
};





/////////////////////////
///// test element
/////////////////////////

// element
queryText    = "#cube";
const cubeEl = document.querySelector(queryText);

// dev
// test
let devOn,testOn;
if (cubeEl) {

    // get
    queryText = "devon";
    devOn     = ( cubeEl.getAttribute(queryText)==="true" );
    queryText = "teston";
    testOn    = ( cubeEl.getAttribute(queryText)==="true" );

    // show
    testHr();
    testText("cubeEl");
    testElement(cubeEl);
    testHr();
    testText("devOn");
    testElse(devOn);
    testHr();
    testText("testOn");
    testElse(testOn);
    testHr();
    testBr()
    
};





/////////////////////////
///// TASK : START
/////////////////////////

try{





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
    Object.entries(attrs).forEach( attrEntry =>
        setAttrByAttrEntry(el,attrEntry,isStyle)
    );

// set style/element attr
const setStElAttrs = (el,StElAttrs) =>
    [
        [ StElAttrs["style"]   , true  ] ,
        [ StElAttrs["element"] , false ]
    ].forEach( attrsEntry =>
        setAttrByAttrs( el, ...attrsEntry )
    );

// merge object
// https://stackoverflow.com/a/43626263
const mergeArrObject = arrObject =>
    Object.assign( {} , ...arrObject );





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
    el.getAttributeNames().filter( attrName =>
        !namesExcept.includes(attrName)
    );
// get attr entry
const getAttrEntry = (el,attrName) =>
    [
        attrName ,
        el.getAttribute(attrName)
    ];
// get use attrs
// https://stackoverflow.com/a/53508215
const getUseAttrs = (el,namesExcept) =>
    Object.fromEntries(
        getNamesUse(el,namesExcept).map( attrName =>
            getAttrEntry(el,attrName)
        )
    );
// get all attrs
const getAllAttrs = el =>
    getUseAttrs( el , [] );
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



/////////////////////////
///// attr for each iframe
/////////////////////////
///// define attrs
/////////////////////////

// linkEl style attr
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
// https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
const linkElAttrs = {
    "width"            : "250px"    ,
    "height"           : "35px"     ,
    "font-size"        : "small"    ,
    "background-color" : "#1a1a1a"  ,
    "display"          : "flex"     ,
    "justify-content"  : "flex-end" ,
    "align-items"      : "center"   ,
    "padding-right"    : "10px"
};
// divEl style attr
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
const divElAttrs = {
    "display"        : "flex"   ,
    "flex-direction" : "column" ,
    "column-gap"     : "0"      ,
    "margin-top"     : "5px"    ,
    "margin-bottom"  : "15px"
};

testHr();
testText("linkElAttrs");
testObj(linkElAttrs);
testHr();
testText("divElAttrs");
testObj(divElAttrs);
testHr();
testBr();



/////////////////////////
///// link for each iframe
/////////////////////////
///// define function
/////////////////////////

// create link text
const createLinkText = (href,text) => {
    // create
    const linkText = document.createElement("a");
    // set href/text
    linkText.setAttribute("href",href);
    linkText.innerText = text;
    // return
    return linkText;
};
// create link element
const createLink = (href,text) => {
    // create El/Text
    const linkEl   = document.createElement("div");
    const linkText = createLinkText(href,text);
    // El : style attr
    setAttrByAttrs(linkEl,linkElAttrs,true);
    // El > Text
    linkEl.appendChild(linkText);
    // return El
    return linkEl;
};



/////////////////////////
///// insert for each iframe
/////////////////////////
///// define function
/////////////////////////

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
    const divEl     = document.createElement("div");
    parentOld.replaceChild(divEl,targetEl);
    // divEl > targetEl
    divEl.appendChild(targetEl);
    // return divEl
    return divEl;
};
// insert link
// before : targetEl
// after  : divEl > { targetEl , linkEl }
const insertLinkAfter = (targetEl,href,text) => {
    // divEl > targetEl
    const divEl = insertDivParent(targetEl);
    setAttrByAttrs(divEl,divElAttrs,true);
    // divEl > { targetEl , linkEl }
    insertAfter( targetEl , createLink(href,text) );
};



/////////////////////////
///// insert for each iframe
/////////////////////////
///// common attr
///// page attr
///// link text
/////////////////////////

// common element attr
const comElAttrs  = {
    hover : 9,
    speed : 500,
    flags : "canvas"
};
// page element attr
const pageElAttr =
    // condition : devOn
    devOn
    // true  -> except : id/teston/devon
    ? getUseAttrs( cubeEl , ["id","teston","devon"] )
    // false -> empty
    : {};
// link text
const linkText = "Ruwix 3D Cube Generator";

testHr();
testText("comElAttrs");
testObj(comElAttrs);
testHr();
testText("pageElAttr");
testObj(pageElAttr);
testHr();
testText("linkText : "+linkText);
testHr();
testBr();



/////////////////////////
///// each iframe
/////////////////////////
///// set src
///// insert link
/////////////////////////

// create src
const srcByIframe = iframe =>
    createSrc( mergeArrObject(
        [
            comElAttrs ,
            pageElAttr ,
            getAllAttrs(iframe) ,
        ]
    ) );
// set src
// insert link
const srcSetInsert = (el,src) =>
    [
        el.setAttribute("src",src) ,
        insertLinkAfter(el,src,linkText)
    ];
// condition : devOn
if (devOn) {
    iframeEls.forEach( iframe =>
        srcSetInsert(
            iframe ,
            srcByIframe(iframe)
        )
    );
};



/////////////////////////
///// common attr for every iframe
/////////////////////////
///// style attr
///// element attr
/////////////////////////

// create common attr
const comStElAttrs = {
    "style" : {
            "width"            : "250px"       ,
            "height"           : "295px"       ,
            "background-color" : "#1a1a1a"     ,
            "border-style"     : "none"        ,
            "border-color"     : "transparent" ,
            "border-width"     : "0px"         ,
            "margin-top"       : "0px"         ,
            "margin-bottom"    : "0px"         ,
    },
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

queryText      = "img";
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
    // style attr
    const stAttrsRotate = {
        "transform" : `rotate(${deg}deg)`
    };
    // set style attr
    setAttrByAttrs( image , stAttrsRotate , true );
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
    // style attr
    const stAttrsTranslate = {
        "max-width"  : "initial",
        "max-height" : "initial",
        "transform"  : `translate${axis}(${disp})`
    };
    // set style attr
    setAttrByAttrs( image , stAttrsTranslate , true );
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

// style attr
const stAttrsDiv = {
    // https://www.w3schools.com/css/css_inline-block.asp
    "display"    : "inline-block" ,
    "max-width"  : "96px"         ,
    "max-height" : "96px"         ,
    "overflow"   : "hidden"
};
divWrapperEls.forEach( wrapper =>
    setAttrByAttrs( wrapper , stAttrsDiv , true )
);





/////////////////////////
///// TASK : END
/////////////////////////

} catch (error) {
    testText(error)
};
