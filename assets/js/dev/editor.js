let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);

const testLine = el =>
{

    queryText         = "<br>";
    testEl.innerHTML += queryText;

    if (el instanceof String) {
        testEl.append( el )
    } else {
        testEl.append( el.outerHTML )
        testEl.innerHTML += queryText;
        testEl.append("=".repeat(30));
    };
};

testLine("test start");



try {



// https://stackoverflow.com/a/8422749

queryText        = "#loader";
const loader     = document.querySelector(queryText);
testLine("select loader");
testLine(loader);

const src        = '"https://codebeautify.org/css-to-scss-converter"';
loader.innerHTML = '<iframe src=' + src + ' width="100px" height="100px"></iframe>';
testLine("loader innerHTML");
testLine(loader.innerHTML);

queryText        = "iframe";
const ifEl       = document.querySelector(queryText);
testLine("select ifEl");
testLine(ifEl);



// https://stackoverflow.com/a/7570527
const ifDoc = ifEl.contentDocument;
testLine("select ifDoc");
testLine(ifDoc);

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html
queryText   = ".EditSession";
const edEl  = ifDoc.body.querySelector(queryText);
testLine("select edEl");
testLine(edEl);
const edDoc = edEl.doc
testLine("select edDoc");
testLine(edDoc);

docEl.forEach( line =>
    [
        testLine("line"),
        testLine(line)
    ]
);



} catch (error) {
    testLine(error.message);
};