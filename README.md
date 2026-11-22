# Introduction to Machine Learning — Website

This package implements the approved Royal Midnight Purple & Gold design.

## Open the website
Open `index.html` in a modern browser. Keep the directory structure intact so the relative links and shared assets continue to work.

## Main pages
- `index.html` — the single Home page: Machine Learning and Physics introduction, tutorial overview and two compact author details.
- `course_content.html` — the five course sections.
- `other_tutorials.html` — configurable additional tutorial links.
- `contact.html` — two full-width author contact panels, arranged vertically.

## Course section folders
- `Understanding_Data/index.html`
- `Classification_Algorithms/index.html`
- `Regression_Algorithms/index.html`
- `Feature_Selection_Methods/index.html`
- `PDF_Notes/index.html`

Each course folder also contains six named lesson HTML slots. Replace each slot with the corresponding HTML exported from your Jupyter-to-HTML converter. Keep the filename unchanged, or update the matching entry in `assets/js/site-config.js`.

## Configure topic buttons
Edit `assets/js/site-config.js`. Each topic page has three main settings: a number, a names list and a links list. Short descriptions are optional.

Example:
```javascript
const CLASSIFICATION_NUMBER_OF_BUTTONS = 2;
const CLASSIFICATION_BUTTON_NAMES = ["Decision Trees", "Random Forest"];
const CLASSIFICATION_BUTTON_LINKS = ["Decision_Trees.html", "Random_Forest.html"];
const CLASSIFICATION_BUTTON_DESCRIPTIONS = ["Tree-based classification.", "An ensemble of decision trees."];
```
The four topic pages have independent settings and accept 0–12 buttons. The name and link at the same list position belong to the same button. Descriptions may be omitted or set to empty strings.

## Configure PDF Notes
Edit `PDF_NUMBER_OF_BUTTONS`, `PDF_BUTTON_NAMES`, `PDF_BUTTON_LINKS` and `PDF_RESOURCE_TYPES` in `assets/js/site-config.js`. PDF links can be direct URLs, Google Drive URLs or relative paths such as `files/lecture_notes.pdf` from the `PDF_Notes` folder. Blank links are shown as inactive until you add a real URL/path.

## Configure Other Tutorials
Edit `OTHER_TUTORIALS_NUMBER_OF_BUTTONS`, `OTHER_TUTORIALS_BUTTON_NAMES`, `OTHER_TUTORIALS_BUTTON_LINKS` and `OTHER_TUTORIALS_RESOURCE_TYPES`. Local HTML pages use paths relative to the website root, such as `Other_Tutorials/Python_Programming.html`. `https://` links open in a new tab.

## Author information
Edit the `authors` array in `assets/js/site-config.js`. The Home page shows only each author's name and department/institution on one line, with a vertical antique-gold rule before each author. The Contact page shows the full details in vertical panels.

## Shared design assets
- `assets/css/style.css` — all common styling.
- `assets/js/site-config.js` — author and page configuration.
- `assets/js/site.js` — navigation and dynamic button rendering.

## Note about lesson slots
The lesson HTML files included in the topic folders are integration slots, not completed interactive course notes. Replace them with the HTML exported from your notebooks. The landing pages, navigation, page design and configuration system are complete.
