let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);
test.append("test start");



// https://stackoverflow.com/a/8422749

queryText        = "div";
const loader     = document.createElement(queryText);
testEl.appendChild(loader);

const src        = '"https://codebeautify.org/css-to-scss-converter"';
loader.innerHTML = '<iframe src=' + src + ' width="100px" height="100px"></iframe>';

queryText        = "iframe";
const ifEl       = document.querySelector(queryText);



// https://stackoverflow.com/a/7570527
const ifDoc = ifEl.contentWindow.document;

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html
queryText   = ".EditSession";
const edEl  = ifDoc.body.querySelector(queryText);
const edDoc = edEl.doc

docEl.forEach(
    line => test.append(line)
);