////////////////////////////////////////
///// function
////////////////////////////////////////


////////////////////
///// use
////////////////////

// query
let query;
const queryEl  = () => document.querySelector(query);
const queryEls = () => document.querySelectorAll(query);

// element
const setElementEl = (el,attrs) =>
  Object.entries(attrs).forEach( ( [key,value] ) =>
    el.setAttribute(key,value)
  );

// style
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
///// test
////////////////////

// element
query = "#test";
const testEl = queryEl();
const testOn = ( testEl.getAttribute("test") === "true" );

// br
const testBr = () =>
  testEl.innerHTML += "<br>";

// append
const testAppend = el => {
  testBr();
  testEl.append(el);
};

// hr
const testHr = (n=30) =>
  testAppend( "=".repeat(n) );

// line
const testLine = (el,hr=true) => {
  switch (testOn) {
    case false:
      return null;
      break;
    case true:
      testAppend(el);
      hr ? testHr() : null;
      break;
  };
};

// object
const testObject = obj => {
  switch (testOn) {
    case false:
      return null;
      break;
    case true:
      Object.entries(obj).forEach(
        ( [key,value] ) =>
          testLine(
            key + " : " + value
            , false
          )
      );
      testHr();
      break;
  };
};

// clear
const testClear = () => {
  switch (testOn) {
    case false:
      return null;
      break;
    case true:
      // https://stackoverflow.com/a/40606838
      testEl.innerHTML = "";
  };
};


////////////////////////////////////////
///// test try catch
////////////////////////////////////////


testLine("test start");
try {


////////////////////////////////////////
///// mode
////////////////////////////////////////


////////////////////
///// value
////////////////////

let inputMode     = "scss";
let prevInputMode = "sass";
const outputMode  = "css";


////////////////////
///// function
////////////////////

// current
const currentMode = modeName => {
  switch (modeName) {
    case "input":
      return inputMode;
      break;
    case "prev":
      return prevInputMode;
      break;
    case "output":
      return outputMode;
      break;
  };
};

// indented
const currentInputIsIndented = () => {
  switch ( currentMode("input") ) {
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


////////////////////////////////////////
///// style
////////////////////////////////////////


////////////////////
///// size
////////////////////

// demoContainer
const demoContainerWidth  = "360px";

// inputButton
const inputButtonWidth    = "180px";
const inputButtonHeight   = "60px";

// editor
const editorHeight        = "240px";

// convertButton
const convertButtonHeight = "60px";


////////////////////
///// fixed
////////////////////


// demoContainer
const demoContainerStAttrs = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"      ,
  border           : "2px solid #ffffff"
};

// inputContainer
const inputContainerStAttrs = {
  width            : demoContainerWidth  ,
  height           : inputButtonHeight ,
  display          : "flex"     ,
  "flex-direction" : "row"      ,
  "column-gap"     : "0"
};

// editor
const editorStAttrs = {
  position : "relative"   ,
  width    : demoContainerWidth    ,
  height   : editorHeight
};


////////////////////
///// animate
////////////////////

// key frames
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
const animateKeyFrames = {
  "convertButton" : 
    {
      "font-size" : [ "20px" , "23px" ] ,
    }
};

// options
// https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
const animateOptions = {
  "convertButton" : {
    easing     : "ease-in-out" ,
    direction  : "alternate"   ,
    duration   : 500           ,
    iterations : 2
  }
};


////////////////////
///// convertButton
////////////////////

// fixed
const convertButtonStAttrs = {
  width              : demoContainerWidth  ,
  height             : convertButtonHeight ,
  color              : "#ffffff" ,
  "background-color" : "#f21368" ,
  "font-weight"      : "600"     ,
  display            : "flex"    ,
  "flex-direction"   : "column"  ,
  "justify-content"  : "center"  ,
  "align-items"      : "center"
};

// animate
const convertButtonAnimate = Object.fromEntries(
  Object.entries(
    animateKeyFrames["convertButton"]
  ).map( ( [key,valueArr] ) =>
    [ key,valueArr[0] ]
  )
);

// fixed + animate
Object.assign(
  convertButtonStAttrs ,
  convertButtonAnimate
);


////////////////////////////////////////
///// component
////////////////////////////////////////


////////////////////
///// demoContainer
////////////////////

// select
query = "#demoContainer";
const demoContainer = queryEl();
testLine("demoContainer selected");

// style
setStyleEl(demoContainer,demoContainerStAttrs);
testLine("demoContainer styled");


////////////////////
///// inputContainer
////////////////////

// select
query = "#inputContainer";
const inputContainer = queryEl();
testLine("inputContainer selected");

// style
setStyleEl(inputContainer,inputContainerStAttrs);
testLine("inputContainer styled");


////////////////////
///// editor
////////////////////

// select
query = ".editor";
const editorEls = queryEls();
testLine("editorEls selected");

// style
setStyleEls(editorEls,editorStAttrs);
testLine("editorEls styled");


////////////////////
///// convertButton
////////////////////

// select
query = "#convertButton";
const convertButton = queryEl();

// text
const convertButtonText = "Click : convert to " + currentMode("output");
convertButton.append(convertButtonText);

// style
setStyleEl(convertButton,convertButtonStAttrs);
testLine("convertButton styled");


////////////////////////////////////////
///// inputContainer
////////////////////////////////////////


////////////////////
///// inputModeRadio
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const createInputModeRadio = (inputMode,checked) => {
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
    name  : "InputModeRadio" ,
    class : "InputModeRadio" ,
    id    : inputMode        ,
    value : inputMode
  };
  setElementEl(radio,radioElAttrs);
  // checked
  if (checked) {
    radio.setAttribute("checked",checked)
  };
  // return
  return radio;
};


////////////////////
///// inputModeLabel
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
const createInputModeLabel = inputMode => {
  // create
  const label = document.createElement("label");
  // element attr
  const labelElAttrs = {
    for   : inputMode ,
    class : "InputModeLabel"
  };
  setElementEl(label,labelElAttrs);
  // style attr
  const labelStAttrs = {
    width             : inputButtonWidth  ,
    height            : inputButtonHeight ,
    display           : "flex"     ,
    "flex-direction"  : "column"   ,
    "justify-content" : "center"   ,
    "align-items"     : "center"  
  };
  setStyleEl(label,labelStAttrs);
  // text child
  const textChild = document.createElement("div");
  textChild.append(inputMode);
  label.appendChild(textChild);
  // return
  return label;
};


////////////////////
///// inputModeSelector
////////////////////

// selector > [radio,label]
const createInputModeSelector = (inputMode,checked=false) => {
  const selector = document.createElement("div");
  const radio    = createInputModeRadio(inputMode,checked);
  const label    = createInputModeLabel(inputMode);
  selector.appendChild(radio,label);
  const selectorElAttrs = {
    class : "InputModeSelector"
  };
  setElementEl(selector,selectorElAttrs);
  const selectorStAttrs = {
    width  : inputButtonWidth  ,
    height : inputButtonHeight
  };
  setStyleEl(selector,selectorStAttrs);
  return selector;
};

// scss : checked
// sass : unchecked
const selectorArgArray = [
  ["scss",true],
  ["sass"]
];
selectorArgArray.forEach( arr =>
  inputContainer.appendChild(
    createInputModeSelector(...arr)
  )
);
testLine("inputModeSelector added");


////////////////////////////////////////
///// inputModeSelector
////////////////////////////////////////


////////////////////
///// get child by selector
////////////////////

// radio id
const inputModeRadioIdBySelector = selector =>
  selector.querySelector(".InputModeRadio").id;

// label
const inputModeLabelBySelector = selector =>
  selector.querySelector(".InputModeLabel");


////////////////////
///// get selector
////////////////////

// all
const inputModeRadioAll = () => {
  query = ".InputModeRadio";
  return queryEls();
};
const inputModeSelectorAll = () => {
  query = ".InputModeSelector";
  return Array.from( queryEls() );
};

// by checked
const inputModeByChecked = isChecked =>
  isChecked ? currentMode("input") : currentMode("prev");
const inputModeSelectorByChecked = isChecked =>
  inputModeSelectorAll().filter( selector =>
    inputModeRadioIdBySelector(selector) === inputModeByChecked(isChecked)
  );


////////////////////
///// style attr
////////////////////

const selectorStAttrsByState = {
  checked   : {
    "background-color" : "#ffffff" ,
    "color"            : "#000000" ,
    "font-size"        : "25px"    ,
    "font-weight"      : "600"
  } ,
  unchecked : {
    "background-color" : "#000000" ,
    "color"            : "#ffffff" ,
    "font-size"        : "22px"    ,
    "font-weight"      : "300"
  }
};

// get style arr
const stateByIsChecked = isChecked =>
  isChecked ? "checked" : "unchecked"
const stAttrsByIsChecked = isChecked =>
  selectorStAttrsByState[ stateByIsChecked(isChecked) ];


////////////////////
///// style selector
////////////////////

const styleSelector = (selector,isChecked) => {
  const useAttrs = stAttrsByIsChecked(isChecked);
  testObject(useAttrs)
  setStyleEl(selector,useAttrs)
};

// isChecked
const styleSelectorByIsChecked = isChecked =>
  inputModeSelectorByChecked(isChecked).forEach( selector =>
    styleSelector( selector , isChecked )
  );

// prev + new
const stylePrevNewSelector = () =>
  [true,false].forEach(
    styleSelectorByIsChecked
  );


////////////////////////////////////////
///// RadioEvent
////////////////////////////////////////


////////////////////
///// RadioEvent -> inputMode
////////////////////

const updateInputModeByRadioEvent = eventChangeRadio => {
  // prevInputMode
  prevInputMode = currentMode("input");
  // inputMode
  // https://stackoverflow.com/a/63218595
  inputMode = eventChangeRadio.target.value;
};


////////////////////
///// inputMode -> inputComponent
////////////////////

const updateInputComponentByInputMode = () => {
  // selector
  stylePrevNewSelector();
  // input editor
  setEditorModeByEditorName("input");
};


////////////////////
///// RadioEvent -> input
////////////////////

const updateInputByRadioEvent = eventChangeRadio => {
  try {
    testClear();
    // RadioEvent -> inputMode
    updateInputModeByRadioEvent(eventChangeRadio);
    testLine( "prevInputMode : " + currentMode("prev") );
    testLine( "inputMode     : " + currentMode("input") );
    // inputMode -> inputComponent
    updateInputComponentByInputMode();
  } catch (error) {
    testLine(error);
  }
};


////////////////////
///// inputModeRadio
////////////////////

inputModeRadioAll().forEach( radio =>
  radio.addEventListener(
    "change" , updateInputByRadioEvent
  )
);


////////////////////////////////////////
///// set ACE
////////////////////////////////////////


////////////////////
///// editor
////////////////////

testLine("set ACE : editor");

// https://ajaxorg.github.io/ace-api-docs/modules.html#edit
query = "editorInput";
const editorInput  = ace.edit(query);
query = "editorOutput";
const editorOutput = ace.edit(query);

const editorByName = editorName => {
  switch (editorName) {
    case "input":
      return editorInput;
      break;
    case "output":
      return editorOutput;
      break;
  };
};


////////////////////
///// mode
////////////////////

testLine("set ACE : mode");

const editorModePath      = "ace/mode/";
const setEditorModeByModeName = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode( editorModePath + modeName );

const setEditorModeByEditorName = editorName => {
  const useEditor = editorByName(editorName);
  const useMode   = currentMode(editorName);
  testLine( "editorName : " + editorName , false );
  testLine( "useMode    : " + useMode );
  setEditorModeByModeName(
    useEditor , useMode
  );
};


////////////////////
///// theme
////////////////////

testLine("set ACE : theme");

const editorThemePath = "ace/theme/";
const setEditorThemeByThemeName = (editor,themeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
  editor.setTheme( editorThemePath + themeName );

const themeName = "tomorrow_night_bright";
["input","output"].forEach( editorName =>
  setEditorThemeByThemeName(
    editorByName(editorName) ,
    themeName
  )
);


////////////////////
///// set option
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


////////////////////////////////////////
///// convertButton
////////////////////////////////////////


////////////////////
///// value
////////////////////

const getEditorValue = editorName => {
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
  const value = editorByName(editorName).session.getValue();
  testLine( "value from Editor " + editorName );
  return value;
};

const setEditorValue = (editorName,value) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
  editorByName(editorName).session.setValue(value);


////////////////////
///// convert
////////////////////

// https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
const getEditorInputOption = () => {
  const option = {
    indentedSyntax : currentInputIsIndented()
  };
  testObject(option);
  return option;
};

const resultToEditorOutput = result => {
  // status
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  const status = String( result["status"] );
  testLine( "status : " + status );
  // valid   : text
  // invalid : formatted
  const value = status==="0"
              ? String( result["text"] )
              : String( result["message"] ) + "\n" + String( result["formatted"] );
  setEditorValue("output",value)
};

// https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
const convertInputToOutput = () =>
  // https://stackoverflow.com/a/75716055
  Sass.compile(
    // input
    getEditorValue("input") ,
    // option
    getEditorInputOption() ,
    // result to output
    resultToEditorOutput
  );


////////////////////
///// animate
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
const animateConvertButton = () => {
  // get
  const convertButtonKeyFrames = animateKeyFrames["convertButton"];
  const convertButtonOptions   = animateOptions["convertButton"];
  // test
  [ convertButtonKeyFrames , convertButtonOptions ].forEach(
    attrs => testObject(attrs)
  );
  // animate
  convertButton.animate(
    convertButtonKeyFrames ,
    convertButtonOptions
  );
};


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// define listener
////////////////////

const convertButtonClickListener = () => {
  try {
    testClear();
    // convertButton
    animateConvertButton();
    // input -> output
    convertInputToOutput();
  } catch (error) {
    testLine(error);
  }
};


////////////////////
///// add event listener
////////////////////

convertButton.addEventListener(
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  "click" ,
  convertButtonClickListener
);


////////////////////
///// initialize
////////////////////

updateInputComponentByInputMode();
setEditorModeByEditorName("output");


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// test try catch
////////////////////

} catch (error) {
    testLine(error);
};


////////////////////////////////////////
////////////////////////////////////////
