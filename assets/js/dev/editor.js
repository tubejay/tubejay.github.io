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

queryText       = ".editor";
const editorEls = document.querySelectorAll(queryText);
testLine("editorEls selected");

editorEls.forEach( editorEl => {
  editorEl.style[ "position" ] = "relative";
  editorEl.style[ "width"    ] = "350px";
  editorEl.style[ "height"   ] = "150px";
} );
testLine("editorEls styled");



try {

    // https://ajaxorg.github.io/ace-api-docs/index.html
    // https://ace.c9.io/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#nav=embedding

    // https://ajaxorg.github.io/ace-api-docs/modules.html#edit
    testLine("set edit");
    const editorInput  = ace.edit("editorInput");
    const editorOutput = ace.edit("editorOutput");
    const editorArr    = [ editorInput , editorOutput ];

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
    testLine("set mode");
    editorInput.session.setMode("ace/mode/scss");
    editorOutput.session.setMode("ace/mode/css");

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
    testLine("set theme");
    const themeFolder = "ace/theme/";
    const themeName   = "tomorrow_night_bright";
    const themePath   = themeFolder + themeName;
    editorArr.forEach( editor =>
      editor.setTheme(themePath)
    );

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#insert
    const codeInsert = "h2 {\n\ta {\n\t\tcolor:blue\n\t}\n}";
    testLine("code insert");
    editorInput.insert(codeInsert);

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
    testLine("code read");
    const codeRead = editorInput.session.getValue();
    testLine(codeRead);

    // https://sass-lang.com/documentation/js-api/
    // https://sass-lang.com/documentation/js-api/modules

    // https://sass-lang.com/documentation/js-api/modules#compileString
    // testLine("code convert");
    // const codeConvert = sass.compileString(codeRead);
    // testLine(codeConvert);

    // https://github.com/medialize/sass.js/blob/master/docs/api.md
    // https://cdnjs.com/libraries/sass.js
    testLine("code convert");
    let codeConvert;
    Sass.compile( codeRead,result => {
      codeConvert = result;
      testLine(codeConvert);
      testLine(codeConvert.text);
    } );

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
    testLine("code paste");
    editorOutput.session.setValue(codeRead);


} catch (error) {
    testLine(error);
};