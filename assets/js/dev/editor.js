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
      testLine(title,false);
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
///// role
////////////////////

let modeByRole = {
  Input  : undefined ,
  Output : undefined
};

// editorRole
// 0 : Input
// 1 : Output
const editorRoles = [ "Input" , "Output" ];



////////////////////
///// function
////////////////////

// get
const getModeByRole = role =>
  modeByRole[role];

// set
const setModeByRole = (role,modeNew) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  switch ( editorRoles.includes(role) ) {
    case true:
      modeByRole[role] = modeName;
      break;
    case false:
      break;
  };
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
testLine("set : style");





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
  const inputButtonRadio = document.createElement("input");
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

const getEditorByRole = role => {
  switch (role) {
    case editorRoles[0]:
      return editorInput;
      break;
    case editorRoles[1]:
      return editorOutput;
      break;
  };
};
const getEditorByAllRoles = () =>
  editorRoles.map(getEditorByRole);



////////////////////
///// mode
////////////////////

testLine("mode",false);

const editorModePath = "ace/mode/";
const setEditorModeString = modeName =>
  // https://ace.c9.io/#nav=howto
  editorModePath + modeName;
const setEditorMode = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode(
    setEditorModeString(modeName)
  );
const setEditorModeByRole = (role,modeName) =>
  setEditorMode(
    getEditorByRole(role) ,
    modeName
  );
const getEditorMode = editor =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getMode
  editor.session.getMode();
const getEditorModeByRole = role =>
  getEditorMode(
    getEditorByRole(role)
  );



////////////////////
///// theme
////////////////////

testLine("theme",false);

// set string
const editorThemePath = "ace/theme/";
const setEditorThemeString = themeName =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.Editor.html#setTheme
  editorThemePath + themeName;

// set editor
const setEditorTheme = (editor,themeName) =>
  editor.setTheme(
    setEditorThemeString(themeName)
  );
const setEditorThemeByRole = (role,themeName) =>
  setEditorTheme(
    getEditorByRole(role) ,
    themeName
  );

// test
const testEditorThemeByRole = {
  // role : themeName
  Input   : "tomorrow_night_bright" ,
  Output  : "terminal"
};
Object.entries(testEditorThemeByRole).forEach(
  // entry : [role,themeName]
  entry => setEditorThemeByRole(...entry)
);



////////////////////
///// option
////////////////////

testLine("option");

// https://ace.c9.io/#nav=howto
// https://github.com/ajaxorg/ace/wiki/Configuring-Ace
const editorOptionByRole = {
  All : {
    selectionStyle            : "line"          ,
    highlightActiveLine       : true            ,
    highlightSelectedWord     : true            ,
    copyWithEmptySelection    : true            ,
    useSoftTabs               : true            ,
    enableAutoIndent          : true            ,
    hScrollBarAlwaysVisible   : false           ,
    vScrollBarAlwaysVisible   : false           ,
    highlightGutterLine       : true            ,
    animatedScroll            : false           ,
    showInvisibles            : true            ,
    fadeFoldWidgets           : false           ,
    showFoldWidgets           : true            ,
    showLineNumbers           : true            ,
    showGutter                : true            ,
    displayIndentGuides       : true            ,
    highlightIndentGuides     : true            ,
    fontSize                  : "15px"          ,
    fontFamily                : "IBM Plex Mono" ,
    scrollPastEnd             : 0.5             ,
    tooltipFollowsMouse       : true            ,
    useWorker                 : true            ,
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

const setEditorOption = (editor,option) =>
  editor.setOptions(option);
const setEditorOptionByRole = (role,option) =>
  setEditorOption(
    getEditorByRole(role) ,
    option
  );

// set
editorRoles.forEach( role => {
  // all
  setEditorOptionByRole(
    role ,
    editorOptionByRole["All"]
  );
  // role
  setEditorOptionByRole(
    role ,
    editorOptionByRole[role]
  );
} );





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
const convertButtonAnimateKeyFramesOptions = {
  // KeyFrames
  KeyFrames : {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes
    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
    boxShadow : [ "inset 0 0 5px 5px #ffffff" ]
  } ,
  // Options
  Options : {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters
    easing     : "ease-out"   ,
    direction  : "alternate"  ,
    duration   : 500          ,
    iterations : 2
  }
};

// convert : value
const getEditorValue = editor =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
  editor.session.getValue();
const getEditorValueByRole = role =>
  getEditorValue(
    getEditorByRole(role)
  );

// convert : option
const getModeIndented = modeName => {
  switch ( modeName ) {
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
const getModeIndentedByRole = role =>
  getModeIndented(
    getModeByRole(role)
  );
const getEditorOptionByRole = role => ( {
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
  indentedSyntax : getModeIndentedByRole(role)
} );

// convert : result
const convertResultToValue = result => {
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
const setEditorValue = (editor,value) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
  editor.session.setValue(value);
const setEditorValueByRole = (role,value) =>
  setEditorValue(
    getEditorByRole(role) ,
    value
  );
const convertResultToEditorByRole = role => {
  const resultToEditor = result =>
    setEditorValueByRole(
      role ,
      convertResultToValue(result)
    );
  return resultToEditor;
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
const convertButtonText = "Click : convert to " + getModeByRole( editorRoles[1] );
childText(convertButton,convertButtonText);
testLine("child : text",false);

// set : animate
const convertButtonAnimate = () => {
  const [KeyFrames,Options] = Object.values(
    convertButtonAnimateKeyFramesOptions
  );
  testObject(KeyFrames,"KeyFrames");
  testObject(Options,"Options");
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
  convertButton.animate(
    KeyFrames ,
    Options
  );
};

// set : convert
const convertButtonConvert = () => {
  // role
  const roleInput = editorRoles[0];
  const roleOutput = editorRoles[1];
  testLine( "role" , false );
  testLine( "- roleInput  : " + roleInput , false);
  testLine( "- roleOutput : " + roleOutput );
  try {
    // inputValue
    testLine( "inputValue" , false );
    const inputValue = getEditorValueByRole(roleInput);
    testLine( "- length : " + inputValue.length );
    // inputOption
    const inputOption = getEditorOptionByRole(roleInput);
    testObject( inputOption , "inputOption" );
    // resultToOutput
    testLine( "resultToOutput" , false );
    const resultToOutput = convertResultToEditorByRole(roleOutput);
    testLine( "- typeof : " + typeof resultToOutput );
    // compile
    testLine( "compile" );
    // https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
    // https://stackoverflow.com/a/75716055
    Sass.compile(
      inputValue ,
      inputOption ,
      resultToOutput
    );
  } catch (error) {
    testLine( error.toString() );
  };
};

// set : event listener
const convertButtonListener = event => {
  testclear();
  testLine("animate");
  convertButtonAnimate();
  testLine("convert");
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