////////////////////////////////////////
////////////////////////////////////////


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

    query = "<br>";
    testEl.innerHTML += query;
    testEl.append( el )

    testEl.innerHTML += query;
    testEl.append( "=".repeat(30) );
};

// https://stackoverflow.com/a/40606838
const testClear = () => {
  if (!testOn) {return null};

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes#remove_all_children_from_a_node
  testEl.childNodes.forEach(
    child => child.remove()
  );
  testEl.innerHTML = "";
};


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// test try catch
////////////////////

testLine("test start");

try {


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// width height
////////////////////

const demoWidth    = "360px";
const modeWidth    = "180px";

const modeHeight   = "60px";
const buttonHeight = "60px";
const editorHeight = "240px";


////////////////////
///// animate key frame
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
const animateKeyFrames = {
  button : 
    {
      color : ["#000000","#0000ff"]
    }
};


////////////////////
///// animate options
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
const animateOptions = {
  button : {
    direction  : "alternate" ,
    duration   : 300         ,
    iterations : 2
  }
};


////////////////////////////////////////
////////////////////////////////////////


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
///// input mode
////////////////////

query = "#modeInput";
const modeInput = queryEl();
testLine("modeInput selected");

const modeStAttrs = {
  width            : demoWidth  ,
  height           : modeHeight ,
  display          : "flex"     ,
  "flex-direction" : "row"      ,
  "column-gap"     : "0"
};
setStyleEl(modeInput,modeStAttrs);
testLine("modeInput styled");


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
///// convert button
////////////////////

query = "#convertButton";
const convertButton = queryEl();

const buttonStAttrs = {
  width              : demoWidth    ,
  height             : buttonHeight ,
  border             : "none"       ,
  "background-color" : "#ffffff"    ,
  "font-size"        : "20px"       ,
  "font-weight"      : "600"        ,
  display            : "flex"       ,
  "flex-direction"   : "column"     ,
  "justify-content"  : "center"     ,
  "align-items"      : "center"
};
const animateFromAttrs = Object.fromEntries(
  Object.entries(
    animateKeyFrames["button"]
  ).map( ( [key,valueArr] ) =>
    [ key,valueArr[0] ]
  )
);
Object.assign(
  buttonStAttrs ,
  animateFromAttrs
);

setStyleEl(convertButton,buttonStAttrs);
testLine("convertButton styled");


////////////////////////////////////////
////////////////////////////////////////


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
  if (checked) {
    radio.setAttribute("checked",checked)
  };
  // return
  return radio;
};


////////////////////
///// input mode
////////////////////
///// create label
////////////////////

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
    width             : modeWidth  ,
    height            : modeHeight ,
    display           : "flex"     ,
    "flex-direction"  : "column"   ,
    "justify-content" : "center"   ,
    "align-items"     : "center"  
  };
  setStyleEl(label,labelStAttrs);
  // text
  label.append(mode);
  // return
  return label;
};


////////////////////////////////////////
////////////////////////////////////////


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
    width  : modeWidth  ,
    height : modeHeight
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
///// get child by selector
////////////////////

// radio id
const getRadioIdBySelector = selector =>
  selector.querySelector(".ModeRadio").id;

// label
const getLabelBySelector = selector =>
  selector.querySelector(".ModeLabel");


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


////////////////////////////////////////
////////////////////////////////////////


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
  checked   : { "color":"#000000" , "font-size":"25px" , "font-weight":"600" } ,
  unchecked : { "color":"#999999" , "font-size":"22px" , "font-weight":"300" }
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


////////////////////////////////////////
////////////////////////////////////////


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


////////////////////////////////////////
////////////////////////////////////////

////////////////////
///// update convert button
////////////////////

const updateConvertButton = () => {
  // remove existing text
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node
  convertButton.replaceChildren();
  // append text element
  const textButton  = "Convert : " + getInputMode() + " to " + outputMode;
  convertButton.append(textButton);
};


////////////////////
///// update mode
////////////////////

const updateModeByRadio = eventChangeRadio => {
  // prevInputMode
  prevInputMode = inputMode;
  // inputMode
  // https://stackoverflow.com/a/63218595
  inputMode = eventChangeRadio.target.value;
};


////////////////////
///// update component
////////////////////

const updateComponentByMode = () => {
  // selector
  stylePrevNewSelector();
  // input editor
  setModeByEditor("input");
  // convert button
  updateConvertButton();
};


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// update by radio
////////////////////

const updateByRadio = eventChangeRadio => {
  // clear test log
  testClear();
  // update mode
  updateModeByRadio(eventChangeRadio);
  testLine( "preInputMode : " + prevInputMode );
  testLine( "inputMode    : " + inputMode );
  // update component
  updateComponentByMode();
};


////////////////////
///// add event listener
////////////////////

getAllRadio().forEach( radio =>
  radio.addEventListener(
    "change" , updateByRadio
  )
);


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// set editor
////////////////////

testLine("set ACE : editor");

// https://ajaxorg.github.io/ace-api-docs/modules.html#edit
query = "editorInput";
const editorInput  = ace.edit(query);
query = "editorOutput";
const editorOutput = ace.edit(query);


////////////////////
///// set mode
////////////////////

testLine("set ACE : mode");

const modePath      = "ace/mode/";
const setEditorByMode = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode( modePath + modeName );

const setModeByEditor = editorName => {
  switch (editorName) {
    case "input":
      setEditorByMode( editorInput  , getInputMode() );
      break;
    case "output":
      setEditorByMode( editorOutput , outputMode );
      break;
  };
};


////////////////////
///// set theme
////////////////////

testLine("set ACE : theme");

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
const themePath = "ace/theme/";
const themeName = "tomorrow_night_bright";
[ editorInput , editorOutput ].forEach( editor =>
  editor.setTheme( themePath + themeName )
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
////////////////////////////////////////


////////////////////
///// value
////////////////////

const getInputEditorValue = () =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
  editorInput.session.getValue();

const setOutputEditorValue = value =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
  editorOutput.session.setValue(value);


////////////////////
///// convert
////////////////////

// https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
const getInputEditorOption = () => ( {
  indentedSyntax : isIndented()
} );

const resultToOutputEditor = result => {
  const status = String( result["status"] );
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  // valid   : text
  // invalid : formatted
  const value = status==="0"
              ? String( result["text"] )
              : String( result["formatted"] );
  setOutputEditorValue(value);
};

// https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
const convertInputToOutput = () =>
  // https://stackoverflow.com/a/75716055
  Sass.compile(
    // input
    getInputEditorValue() ,
    // option
    getInputEditorOption() ,
    // result to output
    resultToOutputEditor
  );


////////////////////
///// animate
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
const animateButton = () =>
  convertButton.animate(
    animateKeyFrames["button"] ,
    animateOptions["button"]
  );


////////////////////////////////////////
////////////////////////////////////////


////////////////////
///// define listener
////////////////////

const clickListener = () => {
  animateButton();
  convertInputToOutput();
};


////////////////////
///// add event listener
////////////////////

convertButton.addEventListener(
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  "click" ,
  clickListener
);


////////////////////
///// initialize
////////////////////

updateComponentByMode();
setModeByEditor("output");


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
