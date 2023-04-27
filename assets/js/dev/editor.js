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
const textElChild = (el,text) => {
  testObject(
    { text } ,
    "childText"
  );
  childText( el , text );
};

// table
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
const columnsToRows = columnArr =>
  columnArr[0].map( (value,index) =>
    columnArr.map( column =>
      column[index]
    )
  );
const cellsToRow = cellArr => {
  // tr : row
  const tr = document.createElement("tr");
  // td : cell
  cellArr.forEach( cell => {
    const td = document.createElement("td");
    td.textContent = cell;
    tr.appendChild(td);
  } );
  // return
  return tr;
};
const createTable = columnArr => {
  // table
  const table = document.createElement("table");
  // tbody
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);
  // columns -> rows
  const rowArr = columnsToRows(columnArr).map(cellsToRow);
  // add rows
  rowArr.forEach( row =>
    tbody.appendChild(row)
  );
  // style
  const tableStyle = {
    "font-size"     : "17px" ,
    "margin-top"    : "3px" ,
    "margin-bottom" : "3px"
  }
  setElStyle(table,tableStyle);
  // return
  return table;
};

// sleep
// https://stackoverflow.com/a/39914235
// https://www.daleseo.com/js-async-callback/
// https://www.daleseo.com/js-async-promise/
// https://www.daleseo.com/js-async-async-await/
// https://www.daleseo.com/js-sleep/
const sleep = ms =>
  new Promise( (resolve,reject) =>
    setTimeout(resolve,ms)
  );



////////////////////
///// test
////////////////////

// element
query = "#test";
const testEl = queryEl();
const testOn = ( testEl.getAttribute("test") === "true" );

// text
const testText = text =>
  testOn
  ? childText( testEl , text )
  : null
  ;

// hr
const testHr = () =>
  testText( "=".repeat(30) );

// br
const testBr = () =>
  testOn
  ? testEl.appendChild( document.createElement("br") )
  : null
  ;

// br + hr
const testBrHr = () => {
  testBr();
  testHr();
};

// line
const testLine = (text,hr=true) => {
  testText(text);
  hr ? testHr() : null;
};

// function
const testFunction = useFunc =>
  testLine( useFunc.name );

// object
const testObjectConvert = obj =>
  Object.fromEntries(
    Object.entries(obj).map( ( [key,value] ) => {
      // function : name
      const valueConvert = typeof value === "function"
                         ? value.name
                         : value
                         ;
      return [key,valueConvert]
    } )
  );
const testObject = (obj,title="") => {
  // title
  title!=="" ? testLine( title , false ) : null;
  // object convert
  const objConvert = testObjectConvert(obj);
  // key,value
  /*
  Object.entries(objConvert).forEach(
    ( [key,value] ) => testLine(
      "- " + key + " : " + value
      , false
    )
  );
  */
  // table
  const columnArr = [
    Object.keys(objConvert) ,
    Object.values(objConvert)
  ];
  const table = createTable(columnArr);
  testEl.appendChild(table);
  // hr
  testHr();
};

// array
const testArray = (arr,title="") => {
  // title
  title!=="" ? testLine( title , false ) : null;
  // item
  arr.forEach( item =>
    testLine(
      "- " + item
      , false
    )
  );
  // hr
  testHr();
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



testBrHr();
testLine("test start");
try {





////////////////////////////////////////
///// mode
////////////////////////////////////////



////////////////////
///// role
////////////////////

testBrHr();
testLine("mode");

let editorRoles = {
  0 : "Input" ,
  1 : "Output"
};
testObject( editorRoles , "editorRoles" );
editorRoles = Object.values(editorRoles);

const modeByRole = {
  Input  : null ,
  Output : "css"
};
testObject( modeByRole , "modeByRole" );

const modeInputArray = [
  "scss" ,
  "sass"
];



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
      // modeOld
      const modeOld = modeByRole[role];
      // modeNew
      modeByRole[role] = modeNew;
      testObject(
        { role , modeOld , modeNew } ,
        "setModeByRole"
      );
      break;
    case false:
      break;
  };
};
const setModeByIndex = (index,modeNew) =>
  setModeByRole(
    getRoleByIndex(index) ,
    modeNew
  );





////////////////////////////////////////
///// constant
////////////////////////////////////////



////////////////////
///// size
////////////////////

const demoContainerWidth  = "360px";

const inputButtonWidth    = "180px";
const inputButtonHeight   = "60px";

const editorHeight        = "240px";

const convertButtonHeight = "60px";



////////////////////
///// color
////////////////////

const colorNeonDefault = "#F21368";
const colorNeonLight   = "#F65593";
const colorNeonDark    = "#C20A51";
const colorNeonBlack   = "#91083C";

const colorBlack       = "#1A1A1A";
const colorWhite       = "#FFFFFF";





////////////////////////////////////////
///// animate
////////////////////////////////////////



////////////////////
///// duration
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/API/KeyframeEffect/KeyframeEffect#parameters

const durationShort = 500;
const durationLong  = 750;



////////////////////
///// easing
////////////////////

// https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function

const easingLinear = "linear";
const easingOut    = "ease-out";
const easingInOut  = "ease-in-out";





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

testBrHr();
testLine("demoContainer");

// select
query = "#demoContainer";
const demoContainer = queryEl();

// style
setElStyle( demoContainer , demoContainerStyle );
testObject( demoContainerStyle , "demoContainerStyle" );





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
/////a///////////////

testBrHr();
testLine("inputContainer");

// select
query = "#inputContainer";
const inputContainer = queryEl();

// style
setElStyle( inputContainer , inputContainerStyle );
testObject( inputContainerStyle , "inputContainerStyle" );





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

  testBrHr();
  testLine( "inputButtonRadioCreate" );

  // input
  const inputButtonRadio = document.createElement("input");

  // set : attr
  setElAttr( inputButtonRadio , inputButtonRadioAttr );
  testObject( inputButtonRadioAttr , "inputButtonRadioAttr" );

  // set : attr more
  const inputButtonRadioAttrMore = {
    value : modeInput
  };
  setElAttr( inputButtonRadio , inputButtonRadioAttrMore );
  testObject( inputButtonRadioAttrMore , "inputButtonRadioAttrMore" );

  // set : style
  setElStyle( inputButtonRadio , inputButtonRadioStyle );
  testObject( inputButtonRadioStyle , "inputButtonRadioStyle" );

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
    "text-shadow"     : colorBlack + " 0px 2px 5px" ,
    "font-weight"     : "bold"            ,
    width             : inputButtonWidth  ,
    height            : inputButtonHeight ,
    display           : "flex"            ,
    "flex-direction"  : "column"          ,
    "justify-content" : "center"          ,
    "align-items"     : "center"
  },

  unchecked : {
    "background-color" : colorBlack     ,
    "color"            : colorNeonLight ,
    "font-size"        : "23px"
  },

  checked : {
    "background-color" : colorNeonDark ,
    "color"            : colorWhite    ,
    "font-size"        : "25px"
  },

  option : {
    iterations : 1            ,
    // https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
    fill       : "forwards"   ,
    easing     : easingOut    ,
    duration   : durationLong
  }

};

// style : camel
const inputButtonStateArr = ["unchecked","checked"];
const textCamel = text =>
  // https://stackoverflow.com/a/60738940
  text.replace( /-./g , x => x[1].toUpperCase() );
const objectKeyCamel = obj =>
  Object.fromEntries( Object.entries(obj).map(
    ( [key,value] ) => [ textCamel(key) , [value] ]
  ) );
const inputButtonStyleCamel = Object.fromEntries(
  inputButtonStateArr.map( state =>
    [ state , objectKeyCamel( inputButtonStyleKebab[state] ) ]
  )
);



////////////////////
///// filter
////////////////////

const inputButtonAll = () => {
  // NodeList
  // https://developer.mozilla.org/en-US/docs/Web/API/NodeList
  query = "." + inputButtonAttr.class;
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
const inputButtonFilterByState = (state,modeNew) =>
  inputButtonAll().filter( inputButton =>
    // https://stackoverflow.com/a/4540481
    inputButtonBoolByState(state) ^ inputButtonEqualValue(inputButton,modeNew)
  );



////////////////////
///// animate
////////////////////

// button
const inputButtonAnimateButton = (state,button) => {

  testBrHr();
  const buttonValue = button.getAttribute("value");
  testObject(
    { buttonValue } ,
    "inputButtonAnimateButton"
  );

  // KeyFrames
  // Options
  const buttonKeyFrames = inputButtonStyleCamel[state];
  const buttonOptions   = inputButtonStyleKebab.option;
  testObject( buttonKeyFrames , "buttonKeyFrames" );
  testObject( buttonOptions , "buttonOptions" );

  // animate
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/animate
  // https://developer.mozilla.org/en-US/docs/Web/API/Animation
  const buttonAnimate = button.animate(
    buttonKeyFrames ,
    buttonOptions
  );

  // https://developer.mozilla.org/en-US/docs/Web/API/Animation/finished
  const buttonFinished = buttonAnimate.finished;
  return buttonFinished;

};

// state
const inputButtonAnimateStateArr = modeNew => {

  testBrHr();
  testLine( "inputButtonAnimateStateArr" );

  // loop : state
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  const stateFinishedArr = inputButtonStateArr.map( state => {

    testBrHr();
    testLine( "state : " + state );

    // filter : button
    testLine( "inputButtonFilterByState" );
    const buttonFinishedArr = inputButtonFilterByState(
      state   ,
      modeNew
    // loop : button
    ).map( button =>
      // animate : button
      inputButtonAnimateButton(
        state  ,
        button
      )
    );

    // finished : all buttons
    const buttonFinishedAll = Promise.all( buttonFinishedArr );
    return buttonFinishedAll;

  } );

  // finished : all states
  const stateFinishedAll = Promise.all( stateFinishedArr );
  return stateFinishedAll;

};



////////////////////
///// mode + editor
////////////////////

// mode
const inputButtonMode = modeNew => {
  testBrHr();
  testLine("inputButtonMode");
  setModeByIndex(0,modeNew);
};

// editor
const inputButtonEditor = modeNew => {
  testBrHr();
  testLine("inputButtonEditor");
  setEditorModeByIndex(0,modeNew);
};

// mode + editor
const inputButtonModeEditor = modeNew => {
  // mode
  inputButtonMode(modeNew);
  // editor
  inputButtonEditor(modeNew);
};



////////////////////
// listener
////////////////////

const inputButtonListener = async event => {

  testclear();
  testBrHr();
  testLine( "inputButtonListener" );

  // https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events#event_bubbling
  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/target
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
  // https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets
  // https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81---event-bubbling

  // modeNew
  const modeNew = event.target.value;

  // animate
  await inputButtonAnimateStateArr(modeNew);

  // mode + editor
  inputButtonModeEditor(modeNew);

};



////////////////////
///// element
////////////////////

testBrHr();
testLine("inputButton");

// create
const inputButtonCreate = modeInput => {

  testObject(
    { modeInput } ,
    "inputButtonCreate"
  );

  // label
  const inputButton = document.createElement("label");

  // set : attr
  setElAttr( inputButton , inputButtonAttr );
  testObject( inputButtonAttr , "inputButtonAttr" );

  // set : attr more
  const inputButtonAttrMore = {
    value : modeInput
  };
  setElAttr( inputButton , inputButtonAttrMore );
  testObject( inputButtonAttrMore , "inputButtonAttrMore" );

  // set : style : fixed
  const inputButtonStyleFixed = inputButtonStyleKebab.fixed;
  setElStyle( inputButton , inputButtonStyleFixed );
  testBrHr();
  testObject( inputButtonStyleFixed , "inputButtonStyleFixed" );

  // set : style : unchecked
  const inputButtonStyleUnchecked = inputButtonStyleKebab.unchecked;
  setElStyle( inputButton , inputButtonStyleUnchecked );
  testObject( inputButtonStyleUnchecked , "inputButtonStyleUnchecked" );

  // child : text
  textElChild( inputButton , modeInput );

  // set : event listener
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
  const eventType = "change";
  const listener  = inputButtonListener;
  testObject(
    { eventType , listener } ,
    "addEventListener"
  );
  inputButton.addEventListener(
    eventType ,
    listener
  );

  // child : radio
  inputButton.appendChild(
    inputButtonRadioCreate(modeInput)
  );

  // return
  return inputButton;
};

// create
modeInputArray.forEach( modeInput => {
  testBrHr();
  inputContainer.appendChild(
    inputButtonCreate(modeInput)
  )
} );





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

testBrHr();
testLine("editor");

// select
query = ".editor";
const editors = queryEls();

// set : style
editors.forEach( editor =>
  setElStyle( editor , editorStyle )
);
testObject( editorStyle , "editorStyle" );





////////////////////////////////////////
///// ACE
////////////////////////////////////////



////////////////////
///// edit
////////////////////

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

// set : string
const editorModePath = "ace/mode/";
const setEditorModeString = modeName =>
  // https://ace.c9.io/#nav=howto
  editorModePath + modeName;

// set : editor
const setEditorMode = (editor,modeName) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setMode
  editor.session.setMode(
    setEditorModeString(modeName)
  );

// set : by
const setEditorModeByRole = (role,modeName) => {
  testObject(
    { role } ,
    "setEditorModeByRole"
  );
  setEditorMode(
    getEditorByRole(role) ,
    modeName
  );
};
const setEditorModeByIndex = (index,modeName) =>
  setEditorModeByRole(
    getRoleByIndex(index) ,
    modeName
  );

// get : editor
const getEditorMode = editor =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#getMode
  editor.session.getMode();

// get : by
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

// initialize
const initialEditorThemeByRole = {
  // role : themeName
  Input   : "tomorrow_night_bright" ,
  Output  : "terminal"
};
Object.entries(initialEditorThemeByRole).forEach(
  // entry : [role,themeName]
  entry => setEditorThemeByRole(...entry)
);
testObject(
  initialEditorThemeByRole ,
  "initialEditorThemeByRole"
);



////////////////////
///// option
////////////////////

// define
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

// function
const setEditorOption = (editor,option) =>
  editor.setOptions(option);
const setEditorOptionByRole = (role,option) =>
  setEditorOption(
    getEditorByRole(role) ,
    option
  );

// set
editorRoles.forEach( role => {

  testBrHr();
  testLine( "role : " + role );

  // role
  const editorOptionRole = editorOptionByRole[role];
  setEditorOptionByRole(
    role ,
    editorOptionRole
  );
  testObject( editorOptionRole , "editorOptionRole" );

  // all
  const editorOptionAll = editorOptionByRole.All;
  setEditorOptionByRole(
    role ,
    editorOptionAll
  );
  testObject( editorOptionAll , "editorOptionAll" );

} );





////////////////////////////////////////
///// convertButton
////////////////////////////////////////



////////////////////
///// set
////////////////////

// style
const convertButtonStyle = {
  "text-shadow"      : colorBlack + " 0px 2px 5px" ,
  "background-color" : colorNeonDefault    ,
  color              : colorWhite          ,
  "font-size"        : "22px"              ,
  "font-weight"      : "bold"              ,
  width              : demoContainerWidth  ,
  height             : convertButtonHeight ,
  display            : "flex"              ,
  "flex-direction"   : "column"            ,
  "justify-content"  : "center"            ,
  "align-items"      : "center"
};

// animate
const convertButtonAnimateOptions = {
  iterations : 1             ,
  fill       : "forwards"    ,
  easing     : easingInOut   ,
  duration   : durationShort
}
const convertButtonAnimateIsActive = {
  true : [
    // KeyFrames
    {
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats#attributes
      // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties
      backgroundColor : [ colorNeonBlack ] ,
      boxShadow       : [ "inset 0 0 1px 1px " + colorWhite ]
    } ,
    // Options
    convertButtonAnimateOptions
  ] ,
  false : [
    // KeyFrames
    {
      backgroundColor : [ convertButtonStyle["background-color"] ] ,
      boxShadow       : [ "none" ]
    } ,
    // Options
    convertButtonAnimateOptions
  ]
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
// https://github.com/medialize/sass.js/blob/master/docs/api.md#sass-vs-scss
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
const getEditorOptionByRole = role => {
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#output-style-options
  const style          = Sass.style.expanded;
  const comments       = true;
  const indentedSyntax = getModeIndentedByRole(role);
  return {
    style          ,
    comments       ,
    indentedSyntax
  };
};

// result
const convertResultToValue = (role,result) => {

  // status
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#the-response-object
  const status      = String( result["status"] );
  const statusText  = "" + status;
  const statusValue = "// status : " + status;

  // resultValue
  // valid    : text
  // invalid  : formatted
  const resultValue = status==="0"
                    ? String( result.text      )
                    : String( result.formatted )
                    ;
  const valueLength = resultValue.length;

  testObject(
    { statusText , valueLength } ,
    "convertResultToValue"
  );

  // value
  const value = statusValue
              + "\n\n"
              + resultValue
              ;

  // return
  return value;

};
const setEditorValue = (editor,value) =>
  // https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html#setValue
  editor.session.setValue(value);
const setEditorValueByRole = (role,value) => {
  const editor = getEditorByRole(role);
  setEditorValue(
    editor ,
    value
  );
};
const convertResultToEditorByRole = role => {
  // create
  const resultToEditor = result => {
    const value = convertResultToValue(role,result);
    setEditorValueByRole(
      role ,
      value
    );
  };
  // return
  return resultToEditor;
};



////////////////////
///// listener
////////////////////

// animate
const convertButtonAnimate = (isActive=true) => {

  testBrHr();
  testObject(
    { isActive } ,
    "convertButtonAnimate"
  );

  const keyActive = String(isActive);
  const byActive  = convertButtonAnimateIsActive;
  const [KeyFrames,Options] = byActive[keyActive];
  testObject( KeyFrames , "KeyFrames" );
  testObject( Options   , "Options" );

  return convertButton.animate(
    KeyFrames ,
    Options
  ).finished;

};

// convert
const convertButtonConvert = () => {

  testBrHr();
  testLine("convertButtonConvert");

  // role
  const roleInput  = getRoleByIndex(0);
  const roleOutput = getRoleByIndex(1);
  testObject(
    { roleInput , roleOutput } ,
    "role"
  );

  // mode
  const modeInput  = getModeByRole(roleInput);
  const modeOutput = getModeByRole(roleOutput);
  testObject(
    { modeInput , modeOutput } ,
    "mode"
  );

  // inputValue
  const inputValue = getEditorValueByRole(roleInput);
  const length     = inputValue.length;
  testObject(
    { length } ,
    "inputValue"
  );

  // inputOption
  const inputOption = getEditorOptionByRole(roleInput);
  testObject( inputOption , "inputOption" );

  // resultToOutput
  const resultToOutput = convertResultToEditorByRole(roleOutput);

  // compile
  // https://github.com/medialize/sass.js/blob/master/docs/api.md#compiling-strings
  // https://stackoverflow.com/a/75716055
  testLine( "compile" );
  Sass.compile(
    inputValue     ,
    inputOption    ,
    resultToOutput
  );

};

// animate + convert
const convertButtonListener = async () => {

  testclear();
  testBrHr();
  testLine( "convertButtonListener" );

  try {
    // animate
    // active : true
    await convertButtonAnimate(true);
    // convert
    convertButtonConvert();
    await sleep(100);
    // animate
    // active : false
    await convertButtonAnimate(false);
  } catch(error) {
    testLine( error.toString() );
  };

};



////////////////////
///// element
////////////////////

testBrHr();
testLine("convertButton");

// select
query = "#convertButton";
const convertButton = queryEl();

// setting
const convertButtonSetting = () => {

  // set : style
  setElStyle( convertButton , convertButtonStyle );
  testObject( convertButtonStyle , "convertButtonStyle" );

  // child : text
  const convertButtonText = "Click : convert to " + getModeByIndex(1);
  textElChild( convertButton , convertButtonText );

  // set : event listener
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event
  const event    = "click";
  const listener = convertButtonListener;
  testObject(
    { event , listener } ,
    "addEventListener"
  );
  convertButton.addEventListener(
    event ,
    listener
  );

};
convertButtonSetting();





////////////////////////////////////////
///// test try catch
////////////////////////////////////////



} catch(error) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/toString
  testLine( error.toString() );
};