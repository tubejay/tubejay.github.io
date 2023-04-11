////////////////////
///// query function
////////////////////

let query;

const queryEl  = () => document.querySelector(query);
const queryEls = () => document.querySelectorAll(query);


////////////////////
///// element function
////////////////////

const setElementEl = (el,attrs) =>
  Object.entries(attrs).forEach( ( [key,value] ) =>
    el.setAttribute(key,value)
  );


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
const testEl = queryEl();
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

const demoWidth    = "350px";
const buttonWidth  = "150px";
// modeWidth = demoWidth - buttonWidth
const modeWidth    = "200px";

const editorHeight = "200px";
const spaceHeight  = "80px";


////////////////////
///// editor demo
////////////////////

query = "#editorDemo";
const editorDemo = queryEl();
testLine("editorDemo selected");

const demoStAttrs = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"
};
setStyleEl(editorDemo,demoStAttrs);
testLine("editorDemo styled");


////////////////////
///// editor
////////////////////

query = ".editor";
const editorEls = queryEls();
testLine("editorEls selected");

const editorStAttrs = {
  position : "relative" ,
  width    : demoWidth  ,
  height   : editorHeight
};
setStyleEls(editorEls,editorStAttrs);
testLine("editorEls styled");


////////////////////
///// convert space
////////////////////

query = "#convertSpace";
const convertSpace = queryEl();
testLine("convertSpace selected");

const spStAttrs = {
  display      : "flex" ,
  "column-gap" : "0"
};
setStyleEl(convertSpace,spStAttrs);
testLine("convertSpace styled");





////////////////////
///// mode : input
////////////////////
///// style
////////////////////

query = "#modeInput";
const modeInput = queryEl();
testLine("modeInput selected");

const modeStAttrs = {
  width              : modeWidth           ,
  height             : spaceHeight         ,
  border             : "1px solid #1a1a1a" ,
  display            : "flex"              ,
  "flex-direction"   : "column"            ,
  "justify-content"  : "center"            ,
  "align-items"      : "center"
};
setStyleEl(modeInput,modeStAttrs);
testLine("modeInput styled");


////////////////////
///// mode : input
////////////////////
///// selector
////////////////////

let inputMode;

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const createModeRadio = (mode,checked) => {
  const radio = document.createElement("input");
  const radioElAttrs = {
    type    : "radio"     ,
    name    : "ModeRadio" ,
    class   : "ModeRadio" ,
    id      : mode        ,
    value   : mode        ,
    checked : checked
  };
  setElementEl(radio,radioElAttrs);
  return radio;
};
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
const createModeLabel = mode => {
  const label = document.createElement("label");
  const labelElAttrs = {
    for : mode
  };
  setElementEl(label,labelElAttrs);
  label.textContent = mode;
  return label;
};
const createModeSelector = (mode,checked=false) => {
  const selector = document.createElement("div");
  const radio    = createModeRadio(mode,checked);
  const label    = createModeLabel(mode);
  [radio,label].forEach( el =>
    selector.appendChild(el)
  );
  return selector;
};

const selectorArgArray = [
  ["scss",true],
  ["scaa"]
];
selectorArgArray.forEach( arr =>
  modeInput.appendChild(
    createModeSelector(...arr)
  )
);
testLine("modeInput selector added");


////////////////////
///// mode : input
////////////////////
///// check mode
////////////////////

const getInputMode = () =>
    inputMode;

const isIndented = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#syntax
  switch ( getInputMode() ) {
    case "sass":
      return true;
      break;
    case "scss":
      return false;
      break;
    default:
      return null;
      break;
  }
};


////////////////////
///// mode : output
////////////////////

const outputMode = "css";





////////////////////
///// convert button
////////////////////
///// style
////////////////////

query = "#convertButton";
const convertButton = queryEl();
testLine("convertButton selected");

const buttonStAttrs = {
  width              : buttonWidth     ,
  height             : spaceHeight     ,
  "background-color" : "#1a1a1a"    ,
  display            : "flex"       ,
  "flex-direction"   : "column"     ,
  "justify-content"  : "center"     ,
  "align-items"      : "flex-start" ,
  "padding-left"     : "5px"
};
setStyleEl(convertButton,buttonStAttrs);
testLine("convertButton styled");





////////////////////
///// set ACE
////////////////////
///// editor
////////////////////

testLine("set ACE : editor");

// https://ajaxorg.github.io/ace-api-docs/modules.html#edit
query = "editorInput";
const editorInput  = ace.edit(query);
query = "editorOutput";
const editorOutput = ace.edit(query);
const editorArr    = [ editorInput , editorOutput ];


////////////////////
///// set ACE
////////////////////
///// mode
////////////////////

testLine("set ACE : mode");

const modePath = "ace/mode/";
const editorSetMode = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode( modePath + modeName );

const editorInputSetMode = () =>
  editorSetMode(
    editorInput ,
    getInputMode()
  );
editorInputSetMode();
editorSetMode(editorOutput,outputMode);


////////////////////
///// set ACE
////////////////////
///// theme
////////////////////

testLine("set ACE : theme");

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
const themePath = "ace/theme/";
const themeName = "tomorrow_night_bright";
editorArr.forEach( editor =>
  editor.setTheme(themePath+themeName)
);


////////////////////
///// set ACE
////////////////////
///// option
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
///// mode : input
////////////////////
///// eventChangeRadio
////////////////////

// https://stackoverflow.com/a/63218595
const updateInputModeByRadio = eventChangeRadio => {
  const modeSelected = eventChangeRadio.target.value;
  testLine(modeSelected);
  inputMode = modeSelected;
};
const updateConvertButtonByRadio = eventChangeRadio => {
  // https://stackoverflow.com/a/65413839
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node
  convertButton.replaceChildren();
  [
    "Convert"                    ,
    "- from : " + getInputMode() ,
    "- to   : " + outputMode
  ].forEach( text => {
    convertButton.append(text);
    const br = document.createElement("br");
    convertButton.appendChild(br);
  } );
};

const updateByRadio = eventChangeRadio => {
  // inputMode
  updateInputModeByRadio(eventChangeRadio);
  // convertButton
  updateConvertButtonByRadio(eventChangeRadio);
  // editorInput
  editorInputSetMode();
};
const setUpdateForRadio = () => {
  query = ".ModeRadio";
  const RadioEls = queryEls();
  RadioEls.forEach( radio =>
    radio.addEventListener(
      "change",
      updateByRadio
    )
  );
};
setUpdateForRadio();





////////////////////
///// use ACE
////////////////////
///// value
////////////////////

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
const editorGetValue = editor =>
  editor.session.getValue();

const editorInputGetValue = () =>
  editorGetValue(editorInput);

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
const editorSetValue = (editor,value) =>
  editor.session.setValue(value);

const editorOutputSetValue = value =>
  editorSetValue(editorOutput,value);

const resultToEditorOutput = result =>
  editorOutputSetValue(
    // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
    result.text
  );


////////////////////
///// use ACE
////////////////////
///// convert
////////////////////

// https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
// https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
const inputModeGetOptions = () => ({
  indentedSyntax : isIndented()
});

const convertInputToOutput = () =>
  // https://stackoverflow.com/a/75716055
  Sass.compile(
    editorInputGetValue() ,
    inputModeGetOptions() ,
    resultToEditorOutput
  );

convertButton.addEventListener(
  "click",
  convertInputToOutput
);





////////////////////
///// test try catch
////////////////////

} catch (error) {
    testLine(error);
};