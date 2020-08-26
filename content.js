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
  let copyString = req.value;

  if (req.method == "getSelection") {
    copyString = window.getSelection().toString();
  }


  switch (req.format) {
    case "upper":
      copyString = v.upperCase(copyString);
      break;

    case "title":
      copyString = v.titleCase(copyString);
      break;

    case "snake":
      copyString = v.snakeCase(copyString);
      break;

    case "kebab":
      copyString = v.kebabCase(copyString);
      break;

    case "camel":
      copyString = v.camelCase(copyString);
      break;

    case "pascal":
      copyString = v.chain(copyString).titleCase().replaceAll(' ', '');
      break;

    case "lower":
      copyString = v.lowerCase(copyString);
      break;

    default:
      // noop;
  }

  setClipboard(copyString);
});
