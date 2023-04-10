let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);
const testOn = ( testEl.getAttribute("test") === "true" );

const testLine = el =>
{
    if (!testOn) {return null};

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

const setStAttrs = (el,attrs) =>
  Object.entries(el).forEach( ( [key,value] ) =>
    el.style[key] = value
  );
const editorStAttrs = {
  position : "relative" ,
  width    : "350px"    ,
  height   : "150px"
};
editorEls.forEach( editorEl =>
  setStAttrs(editorEl,editorStAttrs)
);
testLine("editorEls styled");



queryText        = "#convertButton";
const convertBtn = document.querySelector(queryText);
testLine("convertBtn selected");

const btnStAttrs = {
  width              : "350px"  ,
  height             : "50px"   ,
  "background-color" : "gray"   ,
  display            : "flex"   ,
  "justify-content"  : "center" ,
  "align-items"       : "center"
};
setStAttrs(convertBtn,btnStAttrs);
testLine("convertBtn styled");



queryText     = "#editorDemo";
const demoDiv = document.querySelector(queryText);
testLine("demoDiv selected");

const demoStAttrs = {
  display          : "flex"   ,
  "flow-direction" : "column" ,
  "column-gap"     : "0"
};
setStAttrs(demoDiv,demoStAttrs);
testLine("demoDiv styled");



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
/*
    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#insert
    testLine("code insert");
    const codeInsert = "h2 {\n\ta {\n\t\tcolor : blue;\n\t}\n}";
    editorInput.insert(codeInsert);

    // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
    testLine("code read");
    const codeRead = editorInput.session.getValue();
    testLine(codeRead);

    // https://stackoverflow.com/a/75716055
    testLine("code convert");
    Sass.compile( codeRead , result => {

      // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
      const codeConvert = result.text;
      testLine(codeConvert);

      // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
      testLine("code paste");
      editorOutput.session.setValue(codeConvert);

    } );
*/


} catch (error) {
    testLine(error);
};