var callback = function (mutationsList) {
  console.log(mutationsList);
  for (var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      let wcObject = document.querySelector('[data-cognigy-webchat-root]');
      if (wcObject) {
        console.log(wcObject);
        var wcState = "small";

        let b = document.createElement("button");
        b.id = "webchatSizeToggle";
        b.innerText = "Expand chat window";
        b.style.border = 'none';
        b.style.background = 'transparent';
        wcObject.insertBefore(b, null);

        b.onclick = function () {
          if (wcState == "small") {
            let currentHeight = wcObject.offsetHeight;
            let currentWidth = wcObject.offsetWidth;

            wcObject.style.height = (currentHeight * 1.5) + "px"; // Increase height by 50%
            wcObject.style.width = (currentWidth * 1.5) + "px";   // Increase width by 50%
            b.innerText = "Shrink chat window";
            wcState = "big";
          } else if (wcState === "big") {
            wcObject.style.height = '';  // Reset height
            wcObject.style.width = '';   // Reset width
            b.innerText = "Expand chat window";
            wcState = "small";
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
