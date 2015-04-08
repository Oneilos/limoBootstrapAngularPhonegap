var logSpace = document.createElement('pre');
window.onerror = function(msg, url, linenumber) {
    document.getElementById('page-content-wrapper').insertBefore(logSpace, document.getElementById('page-content-wrapper').firstChild);
    var trace = "Error message: "+msg+"\nURL: "+url+"\nLine Number: "+linenumber+"\n";
    logSpace.innerHTML+=trace;
    console.error(trace);
    return true;
}