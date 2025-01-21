"use strict";
const nameDiv = document.getElementById("name");
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab === null || activeTab === void 0 ? void 0 : activeTab.id) {
        chrome.tabs.sendMessage(activeTab.id, { action: "getName" }, (response) => {
            if (response === null || response === void 0 ? void 0 : response.name) {
                nameDiv.textContent = response.name;
            }
            else {
                nameDiv.textContent = "Name not found!";
            }
        });
    }
});
