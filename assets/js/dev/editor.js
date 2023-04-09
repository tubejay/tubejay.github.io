let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);

const testLine = el =>
{

    queryText         = "<br>";
    testEl.innerHTML += queryText;
    testEl.append( el )

    testEl.innerHTML += queryText;
    testEl.append("=".repeat(30));
};

testLine("test start");

queryText      = "#editor";
const editorEl = document.querySelector(queryText);
testLine("editor selected");

editorEl.style[ "position" ] = "relative";
editorEl.style[ "width"    ] = "350px";
editorEl.style[ "height"   ] = "150px";
testLine("editor style");



try {

    // https://ajaxorg.github.io/ace-api-docs/index.html
    // https://ace.c9.io/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#nav=embedding
    const editor = ace.edit("editor")
    testLine("set mode");
    editor.session.setMode("ace/mode/scss");

    // https://ace.c9.io/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#nav=howto
    testLine("set theme");
    editor.setTheme("ace/theme/tomorrow_night_bright");

    const codeInsert = "h2 {\n\tcolor:blue\n}";
    testLine("code insert");
    editor.insert(codeInsert);

    testLine("code read");
    const codeRead = editor.session.getValue();
    testLine(codeRead);

    // https://sass-lang.com/documentation/js-api/
    // https://sass-lang.com/documentation/js-api/modules

} catch (error) {
    testLine(error.message);
};