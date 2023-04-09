let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);

const testLine = el =>
{

    queryText         = "<br>";
    testEl.innerHTML += queryText;
    testEl.append( el )

    testEl.innerHTML += queryText;
    testEl.append("=".repeat(30));
};

testLine("test start");



try {

    // https://ace.c9.io/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#nav=embedding
    const editor = ace.edit("editor")
    editor.session.setMode("ace/mode/scss");

    // https://ace.c9.io/?utm_source=cdnjs&utm_medium=cdnjs_link&utm_campaign=cdnjs_library#nav=howto
    editor.setTheme("ace/theme/monokai");
    const code = `
      h2 {
        a {
            color:blue;
        }
      }
    `;
    editor.insert(code);

    testEl.appendChild(editor);

} catch (error) {
    testLine(error.message);
};