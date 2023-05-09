const demoEditor = document.querySelector(
  "#demo-codemirror"
);

const demoStyle = {
  width : "200px"
};
Object.entries(demoStyle).forEach( ( [key,value] ) =>
  demoEditor.style.setProperty(
    key,value
  )
);

const demoOption = {

  lineNumbers               : true          ,
  highlightSpecialChars     : true          ,
  bracketMatching           : true          ,
  closeBrackets             : true          ,
  autocompletion            : true          ,
  highlightActiveLine       : true          ,
  highlightActiveLineGutter : true          ,
  highlightSelectionMatches : true          ,

  tabSize                   : 6             ,
  mode                      : "css"         ,
  theme                     : "base16-dark"

};
CodeMirror(
  demoEditor,demoOption
);