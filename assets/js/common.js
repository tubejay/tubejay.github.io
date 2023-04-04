/////////////////////////
///// define function
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
///// export function
/////////////////////////

// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#syntax
export {
    testText,testHr,testBr,testSp,
    valueStrLength,arrayMaxLength,isObject,
    testTextPadRight,testNodeList,testArray,testElement,testObj
};
