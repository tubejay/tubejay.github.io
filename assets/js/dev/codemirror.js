const demoEditor = document.querySelector(
  "#demo-codemirror"
);

const demoStyle = {
  width  : "200px"
};
Object.entries(demoStyle).forEach( ( [key,value] ) =>
  demoEditor.style.setProperty(
    key,value
  )
);

const demoOption = {
  lineNumbers : true      ,
  mode        : "css"     ,
  theme       : "monokai"
};
CodeMirror(
  demoEditor,demoOption
);