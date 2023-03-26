const iframeElements = document.getElementsByTagName("iframe");

for (ifameElement of iframeElements) {
    iframeElement.setAttribute("scrolling","no");
}