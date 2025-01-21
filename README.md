**LinkedIn Name Extractor**

A Chrome extension that extracts and displays a name from LinkedIn profile pages directly in a popup.

**Features**

Automatically detects the first line of the name from LinkedIn profile pages.

Simple and intuitive UI with dynamic name display.

Lightweight and fast, with no impact on browser performance.

**Installation**

1. Clone this repository or download the ZIP file: git clone https://github.com/yourusername/linkedin-name-extractor.git

2. Install dependencies: npm install

3. Build the project: npm run build

4. Open Chrome and navigate to chrome://extensions/.

5. Enable Developer Mode (toggle in the top-right corner).

6. Click Load unpacked and select the dist/ folder.

**Build Scripts**

Add the following scripts to your package.json for easy development and building:

"scripts": {
  "build": "tsc",
  "watch": "tsc --watch"
}

npm run build: Compiles TypeScript files into JavaScript in the dist/ directory.

npm run watch: Watches for changes in .ts files and recompiles them automatically.

**Usage**

1. Navigate to any LinkedIn profile page.

2. Click the extension icon in the toolbar.

3. View the extracted name in the popup window.

**Future scope**

Load automatically once a profile page on LinkedIn is opened

**How It Works**

The popup.js script queries the currently active tab and sends a message to the content.js script.

The content.js script extracts the name from the target element on the LinkedIn profile page.

The extracted name is returned to the popup and displayed to the user.

**Technologies Used**

TypeScript: For type safety and enhanced development experience.

JavaScript: For browser-compatible code.

HTML/CSS: For creating a simple and responsive UI.

Chrome Extension API: For communication between the popup and content script.

Node.js: For managing dependencies and build processes.
