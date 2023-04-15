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

// attr
const setElAttr = (el,objAttr) =>
  Object.entries(objAttr).forEach( ( [key,value] ) =>
    el.setAttribute(key,value)
  );

// style
const setElStyle = (el,objStyle) =>
  Object.entries(objStyle).forEach( ( [key,value] ) =>
    // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
    el.style.setProperty(key,value)
  );

// text
const childText = (el,text,tag="div") => {
  const child = document.createElement(tag);
  child.append(text);
  el.appendChild(child);
};



////////////////////
///// test
////////////////////

// element
query = "#test";
const testEl = queryEl();
const testOn = ( testEl.getAttribute("test") === "true" );

// text
const testText = text => {
  childText( testEl , text );
};

// hr
const testHr = (n=30) =>
  testText( "=".repeat(n) );

// line
const testLine = (text,hr=true) => {
  switch (testOn) {
    case false:
      break;
    case true:
      testText(text);
      hr ? testHr() : null;
      break;
  };
};

// object
const testObject = (obj,title) => {
  switch (testOn) {
    case false:
      break;
    case true:
      // title
      testLine(title);
      // key,value
      Object.entries(obj).forEach(
        ([key,value]) =>
          testLine(
            "- " + key + " : " + value
            , false
          )
      );
      // hr
      testHr();
      break;
  };
};

// clear
const testclear = () => {
  switch (testOn) {
    case false:
      break;
    case true:
      // https://stackoverflow.com/a/40606838
      testEl.innerHTML = "";
      break;
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
///// initialize
////////////////////

// modeInput
let   modeInput   = null;

// modeOutput
const modeOutput  = "css";



////////////////////
///// function
////////////////////

// get
const getModeByRole = role => {
  switch (role) {
    case "Input":
      return modeInput;
      break;
    case "Output":
      return modeOutput;
      break;
  };
};

// set
const setModeInput = modeNew => {
  modeInput = modeNew
};





////////////////////////////////////////
///// size
////////////////////////////////////////



// demoContainer
const demoContainerWidth  = "360px";

// inputButton
const inputButtonWidth    = "180px";
const inputButtonHeight   = "60px";

// editor
const editorHeight        = "240px";

// convertButton
const convertButtonHeight = "60px";





////////////////////////////////////////
///// demoContainer
////////////////////////////////////////



////////////////////
///// set
////////////////////

// style
const demoContainerStyle = {
  display          : "flex"   ,
  "flex-direction" : "column" ,
  "column-gap"     : "0"      ,
  border           : "none"
};



////////////////////
///// element
////////////////////

testLine("demoContainer");

// select
query = "#demoContainer";
const demoContainer = queryEl();
testLine("select",false);

// set : style
setElStyle(demoContainer,demoContainerStyle);
testLine("set : style",false);





////////////////////////////////////////
///// inputContainer
////////////////////////////////////////



////////////////////
///// set
////////////////////

// style
const inputContainerStyle = {
  width            : demoContainerWidth ,
  height           : inputButtonHeight  ,
  display          : "flex"             ,
  "flex-direction" : "row"              ,
  "column-gap"     : "0"
};



////////////////////
///// element
////////////////////

testLine("inputContainer");

// select
query = "#inputContainer";
const inputContainer = queryEl();
testLine("select",false);

// set : style
setElStyle(inputContainer,inputContainerStyle);
testLine("set : style");





////////////////////////////////////////
///// inputButtonRadio
////////////////////////////////////////



////////////////////
///// set
////////////////////

// attr
const inputButtonRadioAttr = {
  type  : "radio"             ,
  name  : "inputButtonRadio"
};

// style
const inputButtonRadioStyle = {
  display : "none"
};



////////////////////
///// element
////////////////////

const inputButtonRadioCreate = modeInput => {
  // radio
  const inputButtonRadio = document.createElement("Input");
  // set : attr
  setElAttr(inputButtonRadio,inputButtonRadioAttr);
  // set : attr more
  const inputButtonRadioAttrMore = {
    value : modeInput
  };
  setElAttr(inputButtonRadio,inputButtonRadioAttrMore);
  // set : style
  setElStyle(inputButtonRadio,inputButtonRadioStyle);
  // return
  return inputButtonRadio
};





////////////////////////////////////////
///// inputButton
////////////////////////////////////////



////////////////////
///// set
////////////////////

// attr
const inputButtonAttr = {
  class : "inputButton"
};

// style
const inputButtonStyle = {
  width             : inputButtonWidth  ,
  height            : inputButtonHeight ,
  display           : "flex"            ,
  "flex-direction"  : "column"          ,
  "justify-content" : "center"          ,
  "align-items"     : "center"  
};

// animate
const inputButtonAnimate = {};



////////////////////
///// element
////////////////////

testLine("inputButton");

const inputButtonCreate = modeInput => {
  // label as button
  const inputButton = document.createElement("label");
  // set : attr
  setElAttr(inputButton,inputButtonAttr);
  // set : attr more
  const inputButtonAttrMore = {
    value : modeInput
  };
  setElAttr(inputButton,inputButtonAttrMore);
  // set : style
  setElStyle(inputButton,inputButtonStyle);
  // child : radio
  inputButton.appendChild(
    inputButtonRadioCreate(modeInput)
  );
  // child : text
  childText(inputButton,modeInput);
  // return
  return inputButton;
};

// create -> appendChild
const modeInputArray = ["scss","sass"];
modeInputArray.forEach( modeInput =>
  inputContainer.appendChild(
    inputButtonCreate(modeInput)
  )
);
testLine("create -> appendChild");





////////////////////////////////////////
///// editor
////////////////////////////////////////



////////////////////
///// set
////////////////////

// style
const editorStyle = {
  position : "relative"         ,
  width    : demoContainerWidth ,
  height   : editorHeight
};



////////////////////
///// element
////////////////////

testLine("editor");

// select
query = ".editor";
const editors = queryEls();
testLine("select",false);

// set : style
editors.forEach( editor =>
  setElStyle(editor,editorStyle)
);
testLine("set : style");





////////////////////////////////////////
///// ACE
////////////////////////////////////////



////////////////////
///// edit
////////////////////

testLine("ACE");
testLine("edit",false);

// https://ajaxorg.github.io/ace-api-docs/modules.html#edit
query = "editorInput";
const editorInput  = ace.edit(query);
query = "editorOutput";
const editorOutput = ace.edit(query);

const editorByRole = {
  Input   : editorInput   ,
  Output  : editorOutput
};



////////////////////
///// mode
////////////////////

testLine("mode",false);

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
const editorModePath = "ace/mode/";
const getEditorModeByModeName = modeName =>
  editorModePath + modeName;
const setEditorMode = (editor,modeName) =>
  editor.session.setMode(
    getEditorModeByModeName(modeName)
  );

// test
const editorModeByRole = {
  Input   : "scss"  ,
  Output  : "css"
};
Object.entries(editorModeByRole).forEach( ( [role,modeName] ) =>
  setEditorMode( editorByRole[role] , modeName )
);



////////////////////
///// theme
////////////////////

testLine("theme",false);

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
const editorThemePath = "ace/theme/";
const getEditorThemeByThemeName = themeName =>
  editorThemePath + themeName;
const setEditorTheme = (editor,themeName) =>
  editor.setTheme(
    getEditorThemeByThemeName(themeName)
  );

// test
const editorThemeByRole = {
  Input   : "tomorrow_night_bright" ,
  Output  : "monokai"
};
Object.entries(editorThemeByRole).forEach( ( [role,themeName] ) =>
  setEditorTheme( editorByRole[role] , themeName )
);



////////////////////
///// option
////////////////////

testLine("option");

// https://ace.c9.io/#nav=howto
// https://github.com/ajaxorg/ace/wiki/Configuring-Ace
const editorOption = {
  All : {
    selectionStyle            : "line"          ,
    highlightActiveLine       : true            ,
    highlightSelectedWord     : true            ,
    copyWithEmptySelection    : true            ,
    useSoftTabs               : true            ,
    enableAutoIndent          : true            ,
    hScrollBarAlwaysVisible   : false           ,
    vScrollBarAlwaysVisible   : false           ,
    animatedScroll            : false           ,
    fadeFoldWidgets           : false           ,
    showFoldWidgets           : true            ,
    showLineNumbers           : true            ,
    displayIndentGuides       : true            ,
    highlightIndentGuides     : true            ,
    fontSize                  : "15px"          ,
    fontFamily                : "IBM Plex Mono" ,
    tabSize                   : 2               ,
    enableBasicAutocompletion : true            ,
    enableLiveAutocompletion  : true            ,
    enableSnippets            : true            ,
  },
  Input : {
    readOnly : false
  },
  Output : {
    readOnly : true
  },
};

// Input/Output
[ editorInput , editorOutput ].forEach( editor =>
  editor.setOptions( editorOption["All"] )
);
// Input
editorInput.setOptions( editorOption["Input"] );
// Output
editorOutput.setOptions( editorOption["Output"] );





////////////////////////////////////////
///// convertButton
////////////////////////////////////////



////////////////////
///// set
////////////////////

// style
const convertButtonStyle = {
  width              : demoContainerWidth   ,
  height             : convertButtonHeight  ,
  color              : "#ffffff"            ,
  "background-color" : "#f21368"            ,
  "font-size"        : "20px"               ,
  "font-weight"      : "600"                ,
  display            : "flex"               ,
  "flex-direction"   : "column"             ,
  "justify-content"  : "center"             ,
  "align-items"      : "center"
};

// animate
const convertButtonAnimateKeyFrames = {
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
  boxShadow : [ "inset 0 0 5px 5px #ffffff" ]
};
const convertButtonAnimateOptions = {
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
  easing     : "ease-out"   ,
  direction  : "alternate"  ,
  duration   : 500          ,
  iterations : 2
};

// convert
const getEditorInputValue = () =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
  editorInput.session.getValue();
const getEditorInputIndented = () => {
  switch ( getModeByRole("Input") ) {
    case "sass":
      return true;
      break;
    case "scss":
      return false;
      break;
    default:
      return null;
      break;
  };
};
const getEditorInputOption = () => ( {
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
  indentedSyntax : getEditorInputIndented()
} );
const convertButtonConvertResultToValue = result => {
  // status
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  const status = String( result["status"] );
  // value
  // valid    : text
  // invalid  : message + formatted
  const value = status==="0"
              ? String( result["text"] )
              : String( result["message"] ) + "\n\n" + String( result["formatted"] )
              ;
  // return
  return value;
};
const convertButtonConvertResultToOutput = result =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
  editorOutput.session.setValue(
    convertButtonConvertResultToValue(result)
  );



////////////////////
///// element
////////////////////

testLine("convertButton");

// select
query = "#convertButton";
const convertButton = queryEl();
testLine("select",false);

// set : style
setElStyle(convertButton,convertButtonStyle);
testLine("set : style",false);

// child : text
const convertButtonText = "Click : convert to " + getModeByRole("Output");
childText(convertButton,convertButtonText);
testLine("child : text",false);

// set : animate
const convertButtonAnimate = () =>
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
  convertButton.animate(
    convertButtonAnimateKeyFrames ,
    convertButtonAnimateOptions
  );

// set : convert
const convertButtonConvert = () =>
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
  // https://stackoverflow.com/a/75716055
  Sass.compile(
    // input value
    getEditorInputValue()   ,
    // input option
    getEditorInputOption()  ,
    // result to output
    convertButtonConvertResultToOutput
  );

// set : event listener
const convertButtonListener = event => {
  convertButtonAnimate();
  convertButtonConvert();
};
convertButton.addEventListener(
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  "click" ,
  convertButtonListener
);
testLine("set : event listener");





////////////////////////////////////////
///// test try catch
////////////////////////////////////////



} catch(error) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString
  testLine( error.toString() );
};