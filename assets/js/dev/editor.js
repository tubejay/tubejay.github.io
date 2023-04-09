let queryText;



queryText    = "#test";
const testEl = document.querySelector(queryText);
testEl.append("test start");



// https://stackoverflow.com/a/8422749

queryText        = "div";
const loader     = document.createElement(queryText);
testEl.appendChild(loader);
testEl.append("append loader");

const src        = '"https://codebeautify.org/css-to-scss-converter"';
loader.innerHTML = '<iframe src=' + src + ' width="100px" height="100px"></iframe>';

queryText        = "iframe";
const ifEl       = document.querySelector(queryText);
testEl.append("select ifEl");



// https://stackoverflow.com/a/7570527
const ifDoc = ifEl.contentDocument;
testEl.append("select ifDoc");

// https://ajaxorg.github.io/ace-api-docs/classes/Ace.EditSession.html
queryText   = ".EditSession";
const edEl  = ifDoc.body.querySelector(queryText);
testEl.append("select edEl");
const edDoc = edEl.doc
testEl.append("select edDoc");

docEl.forEach(
    line => test.append(line)
);

testEl.removeChild(loader);
testEl.append("remove loader");
