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
    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
    el.style.setProperty(key,value)
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

// https://stackoverflow.com/a/40606838
const testClear = () => {
  if (!testOn) {return null};

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes#remove_all_children_from_a_node
  testEl.childNodes.forEach(
    child => child.remove()
  );
  testEl.textContent = "";
};





////////////////////
///// test try catch
////////////////////

testLine("test start");

try {





////////////////////
///// width height
////////////////////

const demoWidth    = "360px";
const modeWidth    = "180px";

const modeHeight   = "60px";
const buttonHeight = "60px";
const editorHeight = "240px";


////////////////////
///// demo
////////////////////

query = "#demo";
const demo = queryEl();
testLine("demo selected");

const demoStAttrs = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"
};
setStyleEl(demo,demoStAttrs);
testLine("demo styled");


////////////////////
///// editor
////////////////////

query = ".editor";
const editorEls = queryEls();
testLine("editorEls selected");

const editorStAttrs = {
  position : "relative"   ,
  width    : demoWidth    ,
  height   : editorHeight
};
setStyleEls(editorEls,editorStAttrs);
testLine("editorEls styled");





////////////////////
///// input mode
////////////////////
///// style
////////////////////

query = "#modeInput";
const modeInput = queryEl();
testLine("modeInput selected");

const modeStAttrs = {
  width             : demoWidth  ,
  height            : modeHeight ,
  display           : "flex"     ,
  "flex-direction"  : "row"      ,
  "justify-content" : "center"   ,
  "align-items"     : "center"
};
setStyleEl(modeInput,modeStAttrs);
testLine("modeInput styled");





////////////////////
///// input mode
////////////////////
///// create radio
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const createModeRadio = (mode,checked) => {
  // create
  const radio = document.createElement("input");
  // style attr
  const radioStAttrs = {
    display : "none"
  };
  setStyleEl(radio,radioStAttrs);
  // element attr
  const radioElAttrs = {
    type  : "radio"     ,
    name  : "ModeRadio" ,
    class : "ModeRadio" ,
    id    : mode        ,
    value : mode
  };
  setElementEl(radio,radioElAttrs);
  // checked
  checked
  ? radio.setAttribute("checked",checked)
  : null
  return radio;
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
const createModeLabel = mode => {
  // create
  const label = document.createElement("label");
  // element attr
  const labelElAttrs = {
    for   : mode ,
    class : "ModeLabel"
  };
  setElementEl(label,labelElAttrs);
  // style attr
  const labelStAttrs = {
    width            : modeWidth  ,
    height           : modeHeight ,
    "text-align"     : "center"
  };
  setStyleEl(label,labelStAttrs);
  // text
  label.textContent = mode;
  return label;
};





////////////////////
///// input mode
////////////////////
///// create selector
////////////////////

// selector > [radio,label]
const createModeSelector = (mode,checked=false) => {
  const selector = document.createElement("div");
  const radio    = createModeRadio(mode,checked);
  const label    = createModeLabel(mode);
  [radio,label].forEach( el =>
    selector.appendChild(el)
  );
  const selectorElAttrs = {
    class : "ModeSelector"
  };
  setElementEl(selector,selectorElAttrs);
  const selectorStAttrs = {
    width             : modeWidth  ,
    height            : modeHeight ,
    display           : "flex"     ,
    "flex-direction"  : "column"   ,
    "justify-content" : "center"   ,
    "align-items"     : "center"  
  };
  setStyleEl(selector,selectorStAttrs);
  return selector;
};

// set initial mode
let inputMode     = "scss";
let prevInputMode = "sass";
// scss : checked
// sass : unchecked
const selectorArgArray = [
  ["scss",true],
  ["sass"]
];
selectorArgArray.forEach( arr =>
  modeInput.appendChild(
    createModeSelector(...arr)
  )
);
testLine("modeInput selector added");





////////////////////
///// input mode
////////////////////
///// get child by selector
////////////////////

// radio id
const getRadioIdBySelector = selector =>
  selector.querySelector(".ModeRadio").id;

// label
const getLabelBySelector = selector =>
  selector.querySelector(".ModeLabel");





////////////////////
///// input mode
////////////////////
///// get selector
////////////////////

// https://stackoverflow.com/a/36183750

// all
const getAllRadio = () => {
  query = ".ModeRadio";
  return queryEls();
};
const getAllSelectorArr = () => {
  query = ".ModeSelector";
  return Array.from( queryEls() );
};

// by checked
const getModeByChecked = isChecked =>
  isChecked ? inputMode : prevInputMode;
const getSelectorByChecked = isChecked =>
  getAllSelectorArr().filter( selector =>
    getRadioIdBySelector(selector) === getModeByChecked(isChecked)
  );





////////////////////
///// input mode
////////////////////
///// style attr
////////////////////

// selector
const selectorStAttrsByStatus = {
  checked   : { "background-color":"#ffffff" } ,
  unchecked : { "background-color":"#000000" }
};
// label
const labelStAttrsByStatus = {
  checked   : { "color":"#000000" , "font-size":"15px" , "font-weight":"bold" } ,
  unchecked : { "color":"#555555" , "font-size":"15px" , "font-weight":"thin" }
};

// get style arr
const getStatusByChecked = isChecked =>
  isChecked ? "checked" : "unchecked"
const getStyleArrByChecked = isChecked =>
  [
    selectorStAttrsByStatus ,
    labelStAttrsByStatus
  ].map( style =>
    style[ getStatusByChecked(isChecked) ]
  );


////////////////////
///// input mode
////////////////////
///// style selector
////////////////////

const styleSelector = (selector,isChecked) => {
  const elArr = [ selector , getLabelBySelector(selector) ];
  const stArr = getStyleArrByChecked(isChecked);
  elArr.forEach( (el,index) =>
    setStyleEl( el , stArr[index] )
  );
};

// by checked
const styleSelectorByChecked = isChecked =>
  getSelectorByChecked(isChecked).forEach( selector =>
    styleSelector( selector , isChecked )
  );

// prev + new
const stylePrevNewSelector = () =>
  [true,false].forEach(
    styleSelectorByChecked
  );
stylePrevNewSelector();





////////////////////
///// input mode
////////////////////
///// check
////////////////////

// get current value
const getInputMode = () =>
    inputMode;

// intendedSyntax
const isIndented = () => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch#syntax
  switch ( getInputMode() ) {
    // sass : true
    case "sass":
      return true;
      break;
    // scss : false
    case "scss":
      return false;
      break;
    // else : null
    default:
      return null;
      break;
  }
};


////////////////////
///// output mode
////////////////////

// fixed value
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
  width              : demoWidth    ,
  height             : buttonHeight ,
  "background-color" : "#1a1a1a"    ,
  display            : "flex"       ,
  "flex-direction"   : "column"     ,
  "justify-content"  : "center"     ,
  "align-items"      : "center"
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


////////////////////
///// set ACE
////////////////////
///// mode
////////////////////

testLine("set ACE : mode");

const modePath      = "ace/mode/";
const editorSetMode = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode( modePath + modeName );

const editorInputSetMode = () =>
  editorSetMode(
    editorInput ,
    // current value
    getInputMode()
  );
const editorOutputSetMode = () =>
  editorSetMode(
    editorOutput ,
    // fixed value
    outputMode
  );
editorOutputSetMode();


////////////////////
///// set ACE
////////////////////
///// theme
////////////////////

testLine("set ACE : theme");

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
const themePath = "ace/theme/";
const themeName = "tomorrow_night_bright";
[ editorInput , editorOutput ].forEach( editor =>
  editor.setTheme( themePath + themeName )
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

const setPrevInputMode = () => {
  prevInputMode = inputMode;
};

const getChangeMode = eventChangeRadio =>
  eventChangeRadio.target.value;

const updateInputModeByRadio = eventChangeRadio => {
// https://stackoverflow.com/a/63218595
  inputMode = getChangeMode(eventChangeRadio);
};

const updateConvertButtonByRadio = () => {
  // remove existing text
  // https://stackoverflow.com/a/65413839
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node
  convertButton.replaceChildren();
  // text
  const textButton  = "Click to convert : from "
                    + getInputMode()
                    + " to "
                    + outputMode;
  convertButton.append(textButton);
};

// run 5 functions
const updateByRadio = eventChangeRadio => {

  // testClear();

  const changeMode = getChangeMode(eventChangeRadio);

  // prevInputMode
  setPrevInputMode();
  testLine( "prevInputMode : " + prevInputMode );

  // inputMode
  updateInputModeByRadio(eventChangeRadio);
  testLine( "inputMode : " + inputMode );

  // convertButton
  testLine( "convert button" );
  updateConvertButtonByRadio();

  // editorInput
  testLine( "set input editor" );
  editorInputSetMode();

  // style selector
  testLine( "style prev/new selector" );
  stylePrevNewSelector();

};

// set event listener
const setUpdateForRadio = () => {
  // radio elements
  const RadioEls = getAllRadio();
  // add event listener
  RadioEls.forEach( radio =>
    radio.addEventListener(
      "change",
      updateByRadio
    )
  );
};
setUpdateForRadio();

// set initial value
updateConvertButtonByRadio();
editorInputSetMode();





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

const resultToEditorOutput = result => {
  const status = String( result["status"] );
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  // valid   : text
  // invalid : formatted
  const value = status==="0"
              ? String( result["text"] )
              : String( result["formatted"] );
  editorOutputSetValue(value);
};


////////////////////
///// use ACE
////////////////////
///// convert
////////////////////

// https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
// https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
const inputModeGetOptions = () => ( {
  indentedSyntax : isIndented()
} );

const convertInputToOutput = () =>
  // https://stackoverflow.com/a/75716055
  Sass.compile(
    // input
    editorInputGetValue() ,
    // option
    inputModeGetOptions() ,
    // result to output
    resultToEditorOutput
  );

convertButton.addEventListener(
  // event
  "click",
  // function
  convertInputToOutput
);





////////////////////
///// test try catch
////////////////////

} catch (error) {
    testLine(error);
};