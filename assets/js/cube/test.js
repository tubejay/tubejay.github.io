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
///// export module
/////////////////////////

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features
export {
    testText , testHr , testBr ,
    testArray , testNodeList , testElement , testElse ,
    testObj
};
