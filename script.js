chrome.contextMenus.onClicked.addListener(function (event) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs, stuff){
    chrome.tabs.sendMessage(tabs[0].id, { format: event.menuItemId, value: event.selectionText });
    createNotification(event.menuItemId);
  });
});

chrome.commands.onCommand.addListener(function (command) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, { format: command, method: 'getSelection' });
    createNotification(command);
  });
});

chrome.contextMenus.create({
  id: "parent",
  title: "Copy \"%s\" with New Case",
  contexts: ["selection"]
});

chrome.contextMenus.create({
  id: "pascal",
  title: "Pascal",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "camel",
  title: "Camel",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "kebab",
  title: "Kebab",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "snake",
  title: "Snake",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "upper",
  title: "Upper",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "lower",
  title: "Lower",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "title",
  title: "Title",
  parentId: "parent",
  contexts:["selection"]
});


function createNotification(textCase) {
  let opt = {
      type: "basic",
      title: `Successfully Copied`,
      message: `Text to clipboard as ${textCase} case`,
      iconUrl: "copy-with-new-case-icon-128.png"
  };

  chrome.notifications.create(null, opt, function (notificationId) {
      timer = setTimeout(function () {
          chrome.notifications.clear(notificationId);
      }, 5000);
  });
}
