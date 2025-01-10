SendPaper Chrome Extension
==========================

# Overview

The SendPaper Chrome Extension is a simple tool for the Rendeiro Lab to streamline the process of sharing papers via email.

By clicking the extension button, users can quickly send an email containing the title and URL of the current webpage to the lab mailing list.

# Features

- Automatically extracts the webpage title and URL.
- Opens the default email client with a pre-filled subject and body for ease of use.
- Strips everything after a `|` in the title to ensure clean formatting.
- Optimized for internal use by the Rendeiro Lab: just install and click to share.

# Installation

- Clone or download the extension files to your local machine.
- Open Chrome and navigate to `chrome://extensions/`.
- Enable "Developer mode" using the toggle in the top-right corner.
- Click on "Load unpacked" and select the folder containing the extension files.
- The extension will appear in your extensions toolbar as an icon labeld as .

# Usage

- Navigate to any webpage you want to share.
- Click on the SendPaper extension icon in the toolbar.
- Your default email client will open with:
    - Subject: The title of the webpage (everything after | will be stripped).
    - Body: The title and the URL of the webpage, separated by a newline.
- Review and send the email to the lab mailing list.

# Example

## Input

- Webpage Title: `Understanding Tissue Aging | BioRxiv`
- Webpage URL: `https://example.com/tissue-aging`

## Email

- To: `<lab mailing list>`
- Subject: `[paper] Understanding Tissue Aging`
- Body:

  ```
  Understanding Tissue Aging
  https://example.com/tissue-aging
  ```

# Notes

- Ensure your default email client is correctly configured to handle mailto links.
- This extension is intended for use exclusively by the Rendeiro Lab team.
- For any issues or enhancements, open an issue on the [GitHub repository](https://github.com/rendeirolab/sendpaper-chrome-extension).

# Maintenance

To update the extension:
- Make changes to the code as needed or clone the latest version from the repository.
- Reload the extension by navigating to `chrome://extensions/` and clicking the refresh icon next to the extension.
