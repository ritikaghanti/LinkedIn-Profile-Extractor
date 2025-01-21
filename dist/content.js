"use strict";
const extractName = () => {
    var _a;
    // Match the LinkedIn profile name element
    const nameElement = document.querySelector('h1[class*="inline t-24 v-align-middle break-words"]');
    return ((_a = nameElement === null || nameElement === void 0 ? void 0 : nameElement.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || null;
};
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getName") {
        const name = extractName();
        sendResponse({ name });
    }
});
