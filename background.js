// background.js
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('https://www.google.com/search')) {
    chrome.tabs.sendMessage(tabId, { action: 'getSearchQuery' }, (response) => {
      if (response && response.query) {
        const chatGPTUrl = `https://chat.openai.com/?q=${encodeURIComponent(response.query)}`;
        chrome.tabs.create({ url: chatGPTUrl });
      }
    });
  }
});
