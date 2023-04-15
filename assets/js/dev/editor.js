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
const getModeByName = modeName => {
  switch (modeName) {
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
const convertButtonAnimate = {
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
  keyFrames : {
    boxShadow : [ "inset 0 0 5px 5px #ffffff" ]
  },
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
  options   : {
    easing     : "ease-out"   ,
    direction  : "alternate"  ,
    duration   : 500          ,
    iterations : 2
  }
};



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
const convertButtonText = "Click : convert to " + getModeByName("Input");
childText(convertButton,convertButtonText);
testLine("child : text");





////////////////////////////////////////
///// test try catch
////////////////////////////////////////



} catch(error) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString
  testLine( error.toString() );
};