const nameDiv = document.getElementById("name");

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    if (activeTab?.id) {
        chrome.tabs.sendMessage(activeTab.id, { action: "getName" }, (response) => {
            if (response?.name) {
                nameDiv!.textContent = response.name;
            } else {
                nameDiv!.textContent = "Name not found!";
            }
        });
    }
});
