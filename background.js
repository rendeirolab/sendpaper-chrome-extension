chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url && tab.title) {
    const email = atob('cmVuZGVpcm9sYWJAY2VtbWF0Lm9ubWljcm9zb2Z0LmNvbQ==');
    const cleanTitle = tab.title.split("|")[0].trim();
    const mailto = `mailto:${email}?subject=[paper]%20${encodeURIComponent(cleanTitle)}&body=${encodeURIComponent(cleanTitle)}%0A${encodeURIComponent(tab.url)}%0A%0A`;
    chrome.tabs.create({ url: mailto });
  }
});
