# GCSE Paper Maker

GCSE Paper Maker is a browser-based and desktop application for creating, editing and exporting custom GCSE-style examination papers. It combines a structured question editor, exam-board-inspired layouts, mark schemes, mathematical formatting, diagrams and supporting materials in one application.

The application generates a paginated A4-style paper preview, with layouts inspired by the conventions of several UK examination boards.

## Features

### Paper creation and editing

- **Paper setup:** Configure the paper title, subject, exam board, tier, paper/component, duration, declared mark total, paper code, date, equipment, materials, instructions and cover-page information.
- **Exam-board layouts:** Choose AQA, Pearson Edexcel, OCR, WJEC, Eduqas or CCEA. Each option applies its own layout conventions and reference profile.
- **Multiple projects:** Create, duplicate, switch between and delete examination papers.
- **Nested questions:** Add questions and sub-parts, reorder them, duplicate them or delete them.
- **Automatic mark totals:** Calculate marks from individual questions and sub-parts, with warnings for mismatched totals and incomplete questions.

### Question formats

Create a range of question types, including:

- Multiple choice
- Multiple select
- Short answer
- Extended response
- Calculations
- Fill-in-the-blank
- Table completion
- Text-only and structured content

Configure answer lines, calculation units, selection options and tables. Tables can be created using pipe-separated cells.

### Mark schemes

- Create and edit mark schemes alongside examination papers.
- Include marking points, accepted answers and additional marking guidance.
- Use AI-assisted mark scheme drafting to generate a starting point for marking guidance.
- Review and edit generated content before using it.

### AI-assisted tools

AI features can help speed up the creation of examination content.

- **Question generation:** Generate draft questions using a subject, exam board, tier, topic, difficulty and mark allocation.
- **Multiple formats:** Generate supported question types, including short-answer, extended-response, calculation, multiple-choice and fill-in-the-blank questions.
- **Source material:** Provide additional text or source material to guide question generation.
- **Mark scheme generation:** Generate draft marking points, guidance and assessment objectives.
- **Provider configuration:** Use the built-in Claude option, an Anthropic API key or an OpenAI-compatible endpoint, including compatible local model services such as Ollama.
- **Model detection:** Detect available models when using compatible endpoints.

AI generation is optional. It must be enabled and used deliberately. Generated questions and mark schemes are drafts, not verified examination material, and should be checked before being added to a paper.

### Diagrams and figures

The diagram and chart tools allow supporting visuals to be created and edited for examination questions.

Supported tools include:

- Histograms
- Pie charts
- Tree diagrams
- Venn diagrams
- Geometry diagrams
- Freeform canvas editing

The canvas editor supports creating and modifying visual elements, including positioning, duplication, ordering and editing. Figures can be incorporated into examination questions.

### Supporting sheets

Add additional reference material to an examination paper, including:

- Formula sheets
- Periodic tables
- Data tables
- Text-based notes

These supporting sheets can be included alongside the main examination paper.

### Mathematics and formatting

- Dedicated mathematical paper layout.
- Mathematical question formatting and calculation support.
- Superscript and subscript formatting.
- Bold and italic text.
- Fill-in-the-blank formatting.

Question text supports the following formatting:

| Syntax | Result |
|---|---|
| `**bold**` | **Bold text** |
| `_italic_` | *Italic text* |
| `^text` | Superscript |
| `~text` | Subscript |
| `[[text]]` | Fill-in-the-blank space |

### Preview and export

- **Live preview:** View a paginated A4-style examination paper while editing.
- **Preview zoom:** Adjust the preview size.
- **Responsive editing:** Switch between editing and preview on smaller screens.
- **PDF export:** Export examination papers as PDFs.
- **Printing:** Print papers directly.
- **HTML export:** Save a standalone HTML version.
- **JSON export/import:** Save papers as JSON and import them again to continue editing.
- **Validation:** Receive warnings about missing marks, incomplete questions, unsupported figures and mismatched declared totals.

## Getting started

### Use in a browser

Open `index.html` in a modern browser. The core application runs directly in the page and does not require a build step.

### Run the desktop application

The repository also includes an Electron desktop wrapper.

Requirements:

- Node.js
- npm

From the project directory, run:

```bash
npm install
npm start
```

This installs the dependencies and launches the Electron application, which loads `index.html`.

### Build a Windows installer

The project includes an Electron Builder configuration targeting a Windows NSIS installer.

Run:

```bash
npm install
npm run dist
```

The configured build output directory is `dist`. Build results depend on the operating system and installed build tools.

The project also defines a Windows x64 packaging command:

```bash
npm run package
```

**Note:** The packaging command currently references an icon at a specific local Windows path. If that path does not exist on your computer, update the script to use the repository's `GCSE_Paper_Maker.ico` file or use the configured `npm run dist` build instead.

## How to use the editor

1. Open GCSE Paper Maker and create a new paper.
2. Enter the paper details and select an examination board.
3. Configure the cover page, equipment, instructions, information and advice.
4. Select **+ Add question** to create questions and choose the required question type.
5. Enter the question text, marks and answer-space requirements.
6. Add sub-parts where necessary. Parent question totals are calculated from their sub-parts.
7. Use the mark scheme editor to create marking guidance and accepted answers.
8. Add diagrams, charts or supporting sheets where required.
9. Use the AI tools if you want assistance drafting questions or mark schemes. Check all generated content.
10. Review the calculated mark total and any warnings.
11. Check the paper preview and make any final adjustments.
12. Export or print the completed paper.

## Project files

| File | Purpose |
|---|---|
| `index.html` | Main application, including the editor, layouts, AI tools, diagrams, preview, persistence and export/import functionality. |
| `main.js` | Electron main-process entry point. Creates the desktop window and loads `index.html`. |
| `package.json` | Project metadata, npm scripts, Electron dependencies and installer configuration. |
| `package-lock.json` | Locks the npm dependency tree for repeatable installs. |
| `GCSE_Paper_Maker.ico` | Application icon used by the Windows build configuration. |
| `.gitignore` | Excludes selected generated or local files from version control. |

## Important notes and limitations

- **Custom examination papers:** GCSE Paper Maker creates original practice papers. It does not retrieve official examination papers or guarantee exact reproduction of an examination board's current templates.
- **Exam-board layouts:** Layout profiles are inspired by example paper formats and conventions. Check the relevant board's current requirements before using papers formally.
- **AI-generated content:** AI-generated questions and mark schemes may contain errors, inaccurate mark allocations or unsuitable assessment content. Always review and edit generated material.
- **AI providers:** AI functionality depends on the selected provider, endpoint and configuration. API access may require an account or API key and may incur charges.
- **Local AI models:** Compatible local model services, such as Ollama, can be configured through an OpenAI-compatible endpoint. Availability depends on the local service and model.
- **PDF export:** PDF export loads `html2canvas` and `jsPDF` from public CDNs when needed, so an internet connection may be required. Browser printing is an alternative.
- **Local storage:** Project data is stored in the current browser's local storage. It is not an online account or cloud-sync system. Export important papers as JSON for backup or transfer. Clearing browser data may remove locally saved projects.
- **Desktop security:** The desktop wrapper currently enables Node integration and disables context isolation and sandboxing. Imported or edited content should be treated as trusted. Review these Electron settings before distributing the application to other users.
- **Third-party names:** Examination-board names and trademarks belong to their respective owners. GCSE Paper Maker is an independent project and is not affiliated with or endorsed by any examination board.

## Technology

- HTML
- CSS
- Vanilla JavaScript
- Electron
- Electron Builder
- html2canvas
- jsPDF

## Version history

| Version | Highlights |
|---|---|
| **v1.0.0** | Initial GCSE Paper Maker release with paper creation, question editing, preview and export functionality. |
| **v1.1.0** | Mark schemes, mathematical paper layouts, supporting inserts and further layout and PDF improvements. |
| **v1.1.1** | JSON import bug fixes and stability improvements. |
| **v1.2.0** | AI-assisted question and mark scheme generation, diagram and chart studio, formula and supporting sheets, and improved paper data handling. |

## License

No licence file is currently included in the repository. Unless a licence is added, do not assume that the code is licensed for reuse, redistribution or modification by others.
