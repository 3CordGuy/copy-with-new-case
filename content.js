function setClipboard(value) {
  let copyFrom = document.createElement("textarea");
  copyFrom.textContent = value;
  document.body.appendChild(copyFrom);

  copyFrom.select();

  if (!document.execCommand("copy")) {
    console.error("failed to get clipboard content");
  }

  copyFrom.blur();
  document.body.removeChild(copyFrom);
}

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
  switch (req.format) {
    case "upper":
      setClipboard(v.upperCase(req.value));
      break;

    case "title":
      setClipboard(v.titleCase(req.value));
      break;

    case "snake":
      setClipboard(v.snakeCase(req.value));
      break;

    case "kebab":
      setClipboard(v.kebabCase(req.value));

      break;

    case "lower":
      setClipboard(v.lowerCase(req.value));
      break;

    default:
      setClipboard(req.value);
  }
});
