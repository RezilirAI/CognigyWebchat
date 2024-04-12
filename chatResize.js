var callback = function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      let wcObject = [...mutation.addedNodes].filter((x) => x.id == 'webchatWindow')[0];
      if (wcObject) {
        observer.disconnect();
        var wcState = "small"

        let b = document.createElement("button")
        b.id = "webchatSizeToggle";
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
var targetNode = document;

var config = {
  attributes: false,
  childList: true,
  subtree: true
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);
