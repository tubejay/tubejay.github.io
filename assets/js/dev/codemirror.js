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
  bracketMatching           : true          ,
  closeBrackets             : true          ,
  highlightActiveLine       : true          ,
  highlightActiveLineGutter : true          ,
  highlightSelectionMatches : true          ,

  tabSize                   : 4             ,
  mode                      : "css"         ,
  theme                     : "base16-dark"

};
CodeMirror(
  demoEditor,demoOption
);