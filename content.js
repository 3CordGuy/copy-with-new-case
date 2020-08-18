function setClipboard(value) {
  let textarea = document.createElement("textarea");
  textarea.textContent = value;
  document.body.appendChild(textarea);

  textarea.select();

  if (!document.execCommand("copy")) {
    console.error("failed to get clipboard content");
  }

  textarea.blur();
  document.body.removeChild(textarea);
}

chrome.runtime.onMessage.addListener(function (req) {
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
