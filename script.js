chrome.contextMenus.onClicked.addListener(function (event) {
  console.log('Context clicked', event.menuItemId, event.selectionText)
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, { format: event.menuItemId, value: event.selectionText });
  });
})

chrome.contextMenus.create({
  id: "parent",
  title: "Copy with New Case",
  contexts: ["selection"]
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

chrome.contextMenus.create({
  id: "snake",
  title: "Snake",
  parentId: "parent",
  contexts:["selection"]
});

chrome.contextMenus.create({
  id: "kebab",
  title: "Kebab",
  parentId: "parent",
  contexts:["selection"]
});
