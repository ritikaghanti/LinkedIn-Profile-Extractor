const extractName = (): string | null => {
    // Match the LinkedIn profile name element
    const nameElement = document.querySelector('h1[class*="inline t-24 v-align-middle break-words"]');
    return nameElement?.textContent?.trim() || null;
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "getName") {
        const name = extractName();
        sendResponse({ name });
    }
});
