////////////////////
///// query function
////////////////////

let query;

const queryEl  = query => document.querySelector(query);
const queryEls = query => document.querySelectorAll(query);


////////////////////
///// style function
////////////////////

const setStyleEl = (el,attrs) =>
  Object.entries(attrs).forEach( ( [key,value] ) =>
    el.style[key] = value
  );

const setStyleEls = (elArr,attrs) =>
  elArr.forEach( el =>
    setStyleEl(el,attrs)
  );


////////////////////
///// test function
////////////////////

query = "#test";
const testEl = queryEl(query);
const testOn = ( testEl.getAttribute("test") === "true" );

const testLine = el =>
{
    if (!testOn) {return null};

    query  = "<br>";
    testEl.innerHTML += query;
    testEl.append( el )

    testEl.innerHTML += query;
    testEl.append("=".repeat(30));
};





////////////////////
///// test try catch
////////////////////

testLine("test start");

try {





////////////////////
///// width height
////////////////////

const demoWidth = "350px";

const edHeight  = "200px";
const spHeight  = "50px";

const modeWidth = "130px";
const btnWidth  = "90px";


////////////////////
///// editor demo
////////////////////

query = "#editorDemo";
const demoDiv = queryEl(query);
testLine("demoDiv selected");

const demoStAttrs = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"
};
setStyleEl(demoDiv,demoStAttrs);
testLine("demoDiv styled");


////////////////////
///// editor
////////////////////

query = ".editor";
const editorEls = queryEls(query);
testLine("editorEls selected");

const editorStAttrs = {
  position : "relative" ,
  width    : demoWidth  ,
  height   : edHeight
};
setStyleEls(editorEls,editorStAttrs);
testLine("editorEls styled");


////////////////////
///// convert space
////////////////////

query = "#convertSpace";
const convertSp = queryEl(query);
testLine("convertSp selected");

const spStAttrs = {
  display      : "flex" ,
  "column-gap" : "0"
};
setStyleEl(convertSp,spStAttrs);
testLine("convertSp styled");


////////////////////
///// button
////////////////////

query = "#convertButton";
const convertBtn = queryEl(query);
testLine("convertBtn selected");

const btnStAttrs = {
  width              : btnWidth   ,
  height             : spHeight   ,
  "background-color" : "darkblue" ,
  display            : "flex"     ,
  "justify-content"  : "center"   ,
  "align-items"      : "center"
};
setStyleEl(convertBtn,btnStAttrs);
testLine("convertBtn styled");


////////////////////
///// mode
////////////////////

query = ".mode";
const modeArr = queryEls(query);
testLine("mode selected");

const mdStAttrs = {
  width              : modeWidth ,
  height             : spHeight  ,
  "background-color" : "darkred" ,
  display            : "flex"    ,
  "justify-content"  : "center"  ,
  "align-items"      : "center"
};
setStyleEls(modeArr,mdStAttrs);
testLine("mode styled");





////////////////////
///// set ACE : editor
////////////////////

testLine("set ACE : editor");
// https://ajaxorg.github.io/ace-api-docs/modules.html#edit
query = "editorInput";
const editorInput  = ace.edit(query);
query = "editorOutput";
const editorOutput = ace.edit(query);
const editorArr    = [ editorInput , editorOutput ];


////////////////////
///// set ACE : mode
////////////////////

testLine("set ACE : mode");
// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
const modePath = "ace/mode/";
let inputMode  = "scss";
let outputMode = "css";
editorInput.session.setMode(modePath+inputMode);
editorOutput.session.setMode(modePath+outputMode);


////////////////////
///// set ACE : theme
////////////////////

testLine("set ACE : theme");
// https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
const themePath = "ace/theme/";
const themeName = "tomorrow_night_bright";
editorArr.forEach( editor =>
  editor.setTheme(themePath+themeName)
);


////////////////////
///// set ACE : option
////////////////////

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





////////////////////
///// use ACE : value
////////////////////

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
const edGetValue = editor => editor.session.getValue();

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
const edSetValue = (editor,value) => editor.session.setValue(value)


////////////////////
///// use ACE : convert
////////////////////

const edConvert = (editorInput,editorOutput) => {

  const codeRead = edGetValue(editorInput);

  const codeWrite = result =>
    edSetValue(
      editorOutput ,
      // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
      result.text
    );

  // https://stackoverflow.com/a/75716055
  Sass.compile(
    codeRead ,
    codeWrite
  );

};





////////////////////
///// event : convert
////////////////////

const eventConvert = () =>
  edConvert(editorInput,editorOutput);

convertBtn.addEventListener(
  "click",
  eventConvert
);





////////////////////
///// test try catch
////////////////////

} catch (error) {
    testLine(error);
};