var callback = function (mutationsList) {
  console.log(mutationsList);
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      let wcObject = [...mutation.addedNodes].filter((x) => x.id == 'webchatWindow')[0];
      if (wcObject) {
        console.log(wcObject);
        var wcState = "small"

        let b = document.createElement("button")
        b.id = "webchatSizeToggle";
        b.innerText = "Expand chat window";
        b.style.border = 'none';
        b.style.background = 'transparent';
        wcObject.insertBefore(b, null);

        b.onclick = function () {
          if (wcState == "small") {
            wcObject.style.bottom = "0px";
            wcObject.style.right = "0px";
            wcObject.style.height = "100%";
            wcObject.style.width = "100%";
            b.innerText = "Shrink chat window"
            wcState = "big"
          } else if (wcState = "big") {
            wcObject.style.bottom = '';
            wcObject.style.right = '';
            wcObject.style.height = '';
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
