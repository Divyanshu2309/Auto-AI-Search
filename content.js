// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSearchQuery") {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    sendResponse({ query });
  }
});
