# GCSE Paper Maker

GCSE Paper Maker is a browser-based and desktop tool for creating, editing and exporting custom GCSE-style exam papers. It generates a paginated paper preview using layouts inspired by the conventions of several UK exam boards.

## Features

- **Paper setup:** Set the paper title, subject, exam board, tier, paper/component, duration, declared mark total, paper code, date, equipment/materials, instructions and cover-page information.
- **Exam-board layouts:** Choose AQA, Pearson Edexcel, OCR, WJEC, Eduqas or CCEA. Each option applies its own paper layout conventions and reference profile.
- **Nested questions:** Add questions and sub-parts, change their order, duplicate them or delete them.
- **Question formats:** Multiple choice, multiple select, short answer, extended response, calculation, fill-in-the-blank, table completion and text-only/structured content.
- **Answer space:** Configure the number of answer lines, provide calculation units, add options for selection questions and build tables using pipe-separated cells.
- **Live preview:** See a paginated A4-style paper preview as you edit. Adjust preview zoom; on smaller screens, switch between editing and preview.
- **Automatic mark totals and warnings:** Totals are calculated from question marks, and the editor flags issues such as empty questions, missing marks, too few multiple-choice options, mismatched declared totals and references to unsupported figures.
- **Export and print:** Save as PDF, print, export a standalone HTML version or save the paper as JSON. Import a previously exported JSON paper to continue editing it.
- **Multiple projects:** Create, duplicate, switch between and delete papers.
- **Automatic local saving:** Project data is saved in the browser's local storage.

## Getting started

### Use in a browser

Open `index.html` in a modern browser. The paper editor runs in the page; no build step is required for the core application.

### Run the desktop app

The repository also contains an Electron wrapper.

Requirements:
- Node.js and npm
- A supported desktop operating system (the packaging script is currently configured for Windows x64)

From the project directory, run:

```bash
npm install
npm start
```

This launches the Electron application, which loads `index.html`.

### Build a Windows installer

The project includes an Electron Builder configuration targeting a Windows NSIS installer:

```bash
npm install
npm run dist
```

The configured build output directory is `dist`. Build results depend on your operating system and installed build tools.

The `package.json` also defines a Windows x64 packaging command:

```bash
npm run package
```

Note that this command currently references an icon at a specific local Windows path. If that path does not exist on your computer, update the script to use the repository's `GCSE_Paper_Maker.ico` file or use the configured `npm run dist` build.

## How to use the editor

1. Enter the paper details in **Paper setup** and choose an exam board.
2. Customise the cover-page materials, instructions, information and advice, or leave those fields blank to use the selected board profile's defaults where available.
3. Click **+ Add question** to create questions. Choose a question type, enter its text and set its marks.
4. For multiple-choice or multiple-select questions, enter one option per line. For tables, enter one row per line and separate cells with `|`; the first row is treated as the table header.
5. Use the question controls to reorder, duplicate, delete or add sub-parts. A parent question's total is calculated from its sub-parts.
6. Review the calculated mark total and any warnings. Set the declared total to match if you want the totals to agree.
7. Check the preview, then choose **Save PDF**, **Print**, **Save HTML** or **Save JSON**.
8. Use **Import JSON** to load a paper previously exported by the tool.

Question text supports a small amount of formatting:
- `**bold**` for bold text
- `_italic_` for italic text
- `^text` for superscript
- `~text` for subscript
- `[[text]]` for a fill-in blank in the rendered paper

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Main application: user interface, styles, question editor, exam-board layout profiles, preview, persistence and export/import logic. |
| `main.js` | Electron main-process entry point. Creates the desktop window and loads `index.html`. |
| `package.json` | Project metadata, npm scripts, Electron dependencies and Windows installer configuration. |
| `package-lock.json` | Locks the npm dependency tree for repeatable installs. |
| `GCSE_Paper_Maker.ico` | Application icon used by the Windows build configuration. |
| `.gitignore` | Excludes selected generated or local files from version control. |

## Important notes and limitations

- This creates **custom practice papers**; it does not retrieve official exam papers or guarantee exact reproduction of an exam board's current templates.
- The layout profiles refer to example paper formats and conventions. Check the selected board's current requirements before using a generated paper formally.
- Figures and diagrams are not generated automatically. The editor warns when question text refers to a figure so that it can be added manually.
- PDF export loads `html2canvas` and `jsPDF` from public CDNs when needed, so PDF export may require an internet connection. Browser printing is an alternative.
- Project data is stored in the current browser's local storage. It is not an online account or cloud-sync system. Export important papers as JSON for backup or transfer; clearing browser data may remove locally saved projects.
- The desktop wrapper currently enables Node integration and disables context isolation and sandboxing. Treat imported or edited content as trusted and review these Electron settings before distributing the app to other users.
- Exam-board names and trademarks belong to their respective owners. This project is an independent tool and is not affiliated with or endorsed by an exam board.

## Technology

- HTML, CSS and vanilla JavaScript
- Electron for the desktop wrapper
- Electron Builder for Windows installer packaging
- html2canvas and jsPDF, loaded on demand for PDF export

## License

No licence file was present in the repository when this README was written. Unless a licence is added, do not assume the code is licensed for reuse, redistribution or modification by others.
