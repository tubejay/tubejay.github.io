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
      Object.entries(obj).forEach( ( [key,value] ) =>
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

// array
const testArray = (arr,title) => {
  switch (testOn) {
    case false:
      break;
    case true:
      // title
      testLine(title,false);
      // item
      arr.forEach( item =>
        testLine(
          "- " + item
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

testLine("mode");

// 0 : Input
// 1 : Output
const editorRoles = [
  "Input" ,
  "Output"
];
testArray( editorRoles , "editorRoles" );

const modeByRole = {};
editorRoles.forEach( role => {
  modeByRole[role] = undefined;
} );
testObject( modeByRole , "modeByRole" );



////////////////////
///// function
////////////////////

// get : role
const getRoleByIndex = index =>
  editorRoles[index];

// get : mode
const getModeByRole = role =>
  modeByRole[role];
const getModeByIndex = index =>
  getModeByRole( getRoleByIndex(index) );

// set : mode
const setModeByRole = (role,modeNew) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
  switch ( editorRoles.includes(role) ) {
    case true:
      testLine( "setModeByRole" , false );
      testLine( "- role : " + role , false );
      const modeOld = modeByRole[role];
      testLine( "- modeOld : " + modeOld , false );
      modeByRole[role] = modeName;
      testLine( "- modeNew : " + modeNew );
      break;
    case false:
      break;
  };
};
const setModeByIndex = (index,modeNew) =>
  setModeByRole( getRoleByIndex(index) );





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

// style : kebab
const inputButtonStyleKebab = {
  fixed : {
    width             : inputButtonWidth  ,
    height            : inputButtonHeight ,
    display           : "flex"            ,
    "flex-direction"  : "column"          ,
    "justify-content" : "center"          ,
    "align-items"     : "center"  
  },
  unchecked : {
    "background-color" : "#000000" ,
    "color"            : "#f21368" ,
    "font-size"        : "22px"    ,
    "font-weight"      : "300"
  },
  checked : {
    "background-color" : "#f21368" ,
    "color"            : "#000000" ,
    "font-size"        : "25px"    ,
    "font-weight"      : "600"
  },
  option : {
    easing     : "ease-in-out" ,
    direction  : "alternate"   ,
    duration   : 500           ,
    iterations : 1
  }
};

// style : camel
const inputButtonState = ["unchecked","checked"];
const textCamel = text =>
  // https://stackoverflow.com/a/60738940
  text.replace( /-./g , x => x[1].toUpperCase() );
const objectKeyCamel = obj =>
  Object.fromEntries( Object.entries(obj).map(
    ( [key,value] ) => [ textCamel(key) , [value] ]
  ) );
const inputButtonStyleCamel = Object.fromEntries(
  inputButtonState.map( state =>
    [ state , objectKeyCamel( inputButtonStyleKebab[state] ) ]
  )
);



////////////////////
///// filter
////////////////////

const inputButtonAll = () => {
  // NodeList
  // https://developer.mozilla.org/en-US/docs/Web/API/NodeList
  query = "." + inputButtonAttr["class"];
  const buttonNodeList = queryEls();
  // Array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  const buttonArray = Array.from( buttonNodeList );
  // return
  return buttonArray;
};

const inputButtonBoolByState = state => {
  switch (state) {
    case "unchecked":
      return true;
      break;
    case "checked":
      return false;
      break;
  };
};
const inputButtonEqualValue = (inputButton,value) =>
  inputButton.getAttribute("value") === value;
const inputButtonFilter = (state,modeNew) =>
  inputButtonAll().filter( inputButton =>
    // https://stackoverflow.com/a/4540481
    inputButtonBoolByState(state) ^ inputButtonEqualValue(inputButton,modeNew)
  );



////////////////////
///// listener
////////////////////

// animate
const inputButtonAnimate = modeNew => {
  try {
    inputButtonState.forEach( state => {
      testLine( "state : " + state );
      inputButtonFilter(state,modeNew).forEach( button => {
        testLine( "button : " + button.getAttribute("value") );
        const buttonKeyFrames = inputButtonStyleCamel[state];
        const buttonOptions = inputButtonStyleKebab["option"];
        testObject( buttonKeyFrames , "KeyFrames" );
        testObject( buttonOptions , "Options" );
        button.animate(
          inputButtonStyleCamel[state] ,
          inputButtonStyleKebab["option"]
        )
      } )
    } );
  } catch(error) {
    testLine( error.toString() );
  };
};

// mode
const inputButtonMode = modeNew => {
  try {
    setModeByIndex(0,modeNew);
  } catch(error) {
    testLine( error.toString() );
  };
};

// editor
const inputButtonEditor = modeNew => {
  try {
    setEditorModeByIndex(0,modeNew);
  } catch(error) {
    testLine( error.toString() );
  };
};



////////////////////
///// element
////////////////////

testLine("inputButton");

// create
const inputButtonCreate = modeInput => {
  // label as button
  const inputButton = document.createElement("label");
  // set : attr
  setElAttr( inputButton , inputButtonAttr );
  // set : attr more
  const inputButtonAttrMore = {
    value : modeInput
  };
  setElAttr( inputButton , inputButtonAttrMore );
  // set : style : fixed
  setElStyle( inputButton , inputButtonStyleKebab["fixed"] );
  // set : style : unchecked
  setElStyle( inputButton , inputButtonStyleKebab["unchecked"] );
  // child : radio
  inputButton.appendChild(
    inputButtonRadioCreate(modeInput)
  );
  // child : text
  childText( inputButton , modeInput );
  // set : event listener
  inputButton.addEventListener(
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
    "change" ,
    inputButtonListener
  );
  // return
  return inputButton;
};

// event listener
const inputButtonListener = event => {
  // https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#event_bubbling
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets
  // https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81---event-bubbling
  testclear();
  try {
    testLine( "modeNew" , false );
    const modeNew = event.target.value;
    testLine( "- " + modeNew );
    testLine( "Mode" );
    inputButtonMode(modeNew);
    testLine( "Editor" );
    inputButtonEditor(modeNew);
    testLine( "Animate" );
    inputButtonAnimate(modeNew);
  } catch(error) {
    testLine( error.toString() );
  };
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
    case getRoleByIndex(0):
      return editorInput;
      break;
    case getRoleByIndex(1):
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
const setEditorModeByRole = (role,modeName) => {
  testLine( "setEditorModeByRole" , false );
  testLine( "- role : " + role , false );
  const modeOld = getModeByRole(role);
  testLine( "- modeOld : " + modeOld , false );
  setEditorMode(
    getEditorByRole(role) ,
    modeName
  );
  testLine( "- modeNew : " + modeName );
};
const setEditorModeByIndex = (index,modeName) =>
  setEditorModeByRole(
    getRoleByIndex(index) ,
    modeName
  );
const getEditorMode = editor =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getMode
  editor.session.getMode();
const getEditorModeByRole = role =>
  getEditorMode(
    getEditorByRole(role)
  );
const getEditorModeByIndex = index =>
  getEditorModeByRole(
    getRoleByIndex(index)
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

// value
const getEditorValue = editor =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getValue
  editor.session.getValue();
const getEditorValueByRole = role =>
  getEditorValue(
    getEditorByRole(role)
  );



////////////////////
///// convert
////////////////////

// option
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

// result
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
///// listener
////////////////////

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
  const roleInput = getRoleByIndex(0);
  const roleOutput = getRoleByIndex(1);
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
const convertButtonText = "Click : convert to " + getModeByIndex(1);
childText(convertButton,convertButtonText);
testLine("child : text",false);

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