var callback = function (mutationsList) {
    for (var mutation of mutationsList) {
        if (mutation.type == 'childList') {
            if (mutation.addedNodes.length > 0) {
                let wcObject = mutation.addedNodes[0];
                var wcState = "small"

                let b = document.createElement("button")
                b.id = "myLink";
                b.innerText = "Expand chat window";
                b.style.border = 'none';
                b.style.background = 'transparent';
                wcObject.insertBefore(b, null);

                b.onclick = function () {
                    if (wcState == "small") {
                        wcObject.style.width = "98%";
                        b.innerText = "Shrink chat window"
                        wcState = "big"
                    } else if (wcState = "big") {
                        wcObject.style.width = '';
                        b.innerText = "Expand chat window"
                        wcState = "small"
                    }

                    return false;
                }
            }
        }
    }
}
var targetNode = document.getElementsByClassName('webchat-root')[0];
console.log(targetNode);
var config = {
    attributes: false,
    childList: true,
    subtree: false
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);
