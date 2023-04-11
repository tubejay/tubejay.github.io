////////////////////
///// query function
////////////////////

let query;

const queryEl  = () => document.querySelector(query);
const queryEls = () => Array.from( document.querySelectorAll(query) );


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
const buttonWidth  = "250px";
// modeWidth = demoWidth - buttonWidth
const modeWidth    = "100px";

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
///// create selector
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const createModeRadio = (mode,checked) => {
  const radio = document.createElement("input");
  const radioElAttrs = {
    // radio
    type    : "radio"     ,
    // radio button group
    name    : "ModeRadio" ,
    // querySelectorAll
    class   : "ModeRadio" ,
    // label.for
    id      : mode        ,
    // event.target.value
    value   : mode
  };
  setElementEl(radio,radioElAttrs);
  // checked attr
  // true  : set value
  // false : do nothing
  checked
  ? radio.setAttribute("checked",checked)
  : null
  return radio;
};
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
const createModeLabel = mode => {
  const label = document.createElement("label");
  const labelElAttrs = {
    // radio.id
    for   : mode ,
    // class
    class : "ModeLabel"
  };
  setElementEl(label,labelElAttrs);
  // show text
  label.textContent = mode;
  return label;
};
// selector > [radio,label]
const createModeSelector = (mode,checked=false) => {
  const selector = document.createElement("div");
  const radio    = createModeRadio(mode,checked);
  const label    = createModeLabel(mode);
  [radio,label].forEach( el =>
    selector.appendChild(el)
  );
  const selectorStAttrs = {
    class : "ModeSelector" ,
    display           : "flex"   ,
    "flex-direction"  : "row"    ,
    "justify-content" : "center" ,
    "align-items"     : "center"  
  };
  setStyleEl(selector,selectorStAttrs);
  return selector;
};

// set initial mode
let inputMode = "scss";
// set prev mode
let prevInputMode;
// create
const selectorArgArray = [
  // scss : checked
  ["scss",true],
  // sass : unchecked
  ["sass"]
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
///// get child by selector
////////////////////

// radio
const getRadioBySelector = selector =>
  selector.querySelector(".ModeRadio");
// radio id
const getRadioIdBySelector = selector =>
  getRadioBySelector(selector).id;

// label
const getLabelBySelector = selector =>
  selector.querySelector(".ModeLabel");


////////////////////
///// mode : input
////////////////////
///// get selector
////////////////////

// https://stackoverflow.com/a/36183750

// all
const getAllSelector = () => {
  query = ".ModeSelector";
  return queryEls();
};
const getAllRadio = () =>
  getAllSelector().map( getRadioBySelector );

// prev : invalid
// all except new
const getPrevInvalidSelector = () =>
  getAllSelector().filter( selector =>
    getRadioIdBySelector(selector) !== inputMode
  );
// prev : valid
// only prev
const getPrevValidSelector = () =>
  getAllSelector().filter( selector =>
    getRadioIdBySelector(selector) === prevInputMode
  );

// new
const getNewSelector = () =>
  getAllSelector().filter( selector =>
    getRadioIdBySelector(selector) === inputMode
  );


////////////////////
///// mode : input
////////////////////
///// style selector
////////////////////

// style attr
const selectorStAttrs = {
  checked   : { "background-color":"lightblue" } ,
  unchecked : { "background-color":"darkgray"  }
};
const radioStAttrs = {
  checked   : {} ,
  unchecked : {}
};
const labelStAttrs = {
  checked   : { color:"darkblue"  , "font-weight":"bold"  } ,
  unchecked : { color:"lightgray" , "font-weight":"light" }
};

// get style arr
// selector radio label
const getStyleArrByChange = change =>
  [
    selectorStAttrs ,
    radioStAttrs    ,
    labelStAttrs
  ].map( style => style[change] );

// style selector
const styleSelector = (selector,change) => {
  // element
  const elArr = [
    selector ,
    getRadioBySelector(selector) ,
    getLabelBySelector(selector)
  ];
  // style
  const stArr = getStyleArrByChange(change);
  // style element
  elArr.forEach( (el,index) =>
    setStyleEl( el , stArr[index] )
  );
};

// prev : invalid
const stylePrevInvalidSelector = () =>
  getPrevInvalidSelector().forEach( selector =>
    styleSelector( selector , "unchecked" )
  );
// prev : valid
const stylePrevValidSelector = () =>
  getPrevValidSelector().forEach( selector =>
    styleSelector( selector , "unchecked" )
  );
// prev : invalid or valid
const stylePrevSelector = () =>
  (!prevInputMode)
  ? stylePrevInvalidSelector()
  : stylePrevValidSelector()
  ;

// new
const styleNewSelector = () =>
  getNewSelector().forEach( selector =>
    styleSelector( selector , "checked" )
  );

// prev + new
const stylePrevNewSelector = () =>
  [
    stylePrevSelector() ,
    styleNewSelector()
  ];
stylePrevNewSelector();


////////////////////
///// mode : input
////////////////////
///// check mode
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
///// mode : output
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
  width              : buttonWidth     ,
  height             : spaceHeight     ,
  "background-color" : "#1a1a1a"    ,
  display            : "flex"       ,
  "flex-direction"   : "column"     ,
  "justify-content"  : "center"     ,
  "align-items"      : "flex-start" ,
  "padding-left"     : "30px"
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

const modePath = "ace/mode/";
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
[
  editorInput  ,
  editorOutput
].forEach( editor =>
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

const setPrevInputMode = () =>
  ( prevInputMode = inputMode )

// https://stackoverflow.com/a/63218595
const updateInputModeByRadio = eventChangeRadio => {
  // selected mode
  const modeSelected = eventChangeRadio.target.value;
  testLine(modeSelected);
  // update inputMode
  inputMode = modeSelected;
};
const updateConvertButtonByRadio = () => {

  // remove existing text
  // https://stackoverflow.com/a/65413839
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren#emptying_a_node
  convertButton.replaceChildren();

  // set new text
  [
    "Click to convert" ,
    ": from " + getInputMode() + " to " + outputMode
  ].forEach( text => {
    // text
    convertButton.append(text);
    // br
    const br = document.createElement("br");
    convertButton.appendChild(br);
  } );

};

// run 5 functions
const updateByRadio = eventChangeRadio => {
  // prevInputMode
  setPrevInputMode();
  // inputMode
  updateInputModeByRadio(eventChangeRadio);
  // convertButton
  updateConvertButtonByRadio();
  // editorInput
  editorInputSetMode();
  // style selector
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
  const value  = status==="0"
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