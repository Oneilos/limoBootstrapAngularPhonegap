logSpace = document.createElement('pre');
logSpace.style.height = '100px';
window.onerror = function(msg, url, lineNumber, column, errorObj) {
    document.getElementById('page-content-wrapper').insertBefore(logSpace, document.getElementById('page-content-wrapper').firstChild);
    var trace = "Error message: "+msg+"\nURL: "+url+"\nLine Number: "+lineNumber+"\n";
    logSpace.innerHTML+=trace;
    logSpace.scrollTop = logSpace.scrollHeight;
    console.error(trace);
    return true;
}