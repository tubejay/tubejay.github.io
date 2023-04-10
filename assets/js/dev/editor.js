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



try {



queryText       = ".editor";
const editorEls = document.querySelectorAll(queryText);
testLine("editorEls selected");

const demoWidth = "350px";
const btnWidth  = "70px";
const modeWidth = "140px";

const edHeight = "200px:"
const spHeight = "50px";

const setStAttrs = (el,attrs) =>
  Object.entries(attrs).forEach( ( [key,value] ) =>
    el.style[key] = value
  );
const editorStAttrs = {
  position : "relative" ,
  width    : demoWidth  ,
  height   : edHeight
};
editorEls.forEach( editorEl =>
  setStAttrs(editorEl,editorStAttrs)
);
testLine("editorEls styled");



queryText        = "#convertButton";
const convertBtn = document.querySelector(queryText);
testLine("convertBtn selected");

const btnStAttrs = {
  width              : btnWidth ,
  height             : spHeight ,
  "background-color" : "black"  ,
  "font-size"        : "13px"   ,
  "font-weight"      : "bold"   ,
  display            : "flex"   ,
  "justify-content"  : "center" ,
  "align-items"      : "center"
};
setStAttrs(convertBtn,btnStAttrs);
testLine("convertBtn styled");



queryText     = ".mode";
const modeArr = document.querySelectorAll(queryText);
testLine("mode selected");

const mdStAttrs = {
  width  : modeWidth ,
  height : spHeight
};
modeArr.forEach( mode =>
  setStAttrs(mode,mdStAttrs)
);
testLine("mode styled");



queryText       = "#convertSpace";
const convertSp = document.querySelector(queryText);
testLine("convertSp selected");

const spStAttrs = {
  width        : demoWidth ,
  height       : spHeight  ,
  display      : "flex"   ,
  "column-gap" : "0"
};
setStAttrs(convertSp,spStAttrs);
testLine("convertSp styled");



queryText     = "#editorDemo";
const demoDiv = document.querySelector(queryText);
testLine("demoDiv selected");

const demoStAttrs = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"
};
setStAttrs(demoDiv,demoStAttrs);
testLine("demoDiv styled");



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



    // editor
    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace#editor-options


    // renderer
    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace#renderer-options


    // mouseHandler
    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace#mousehandler-options


    // session
    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace#session-options


    // extension
    // https://github.com/ajaxorg/ace/wiki/Configuring-Ace#editor-options-defined-by-extensions




const convertInputToOutput = () => {

    testLine("click event");

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

};

convertBtn.addEventListener(
  "click",
  convertInputToOutput
);




} catch (error) {
    testLine(error);
};