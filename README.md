# History of the Western World

A responsive, interactive timeline application exploring the history of Western civilization from Creation to the modern era, with a particular focus on Scripture, church history, and the founding of America.

## Features

*   **Interactive Timeline:** Scroll through historical periods, from Antiquity to the Modern Era.
*   **Rich Content:** Detailed information on key events, figures, and theological developments.
*   **Primary Sources:** Links to primary source documents and references for further study.
*   **Definitions:** A comprehensive dictionary of important theological, political, and historical terms linking to relevant periods.
*   **Figures Network:** A visualization connecting historical figures and their relationships.

## How to Contribute (For Lay Folk and Students)

We welcome contributions from students, researchers, and anyone passionate about accurate history. You do not need to be a programmer to add content! You can edit the content files directly on GitHub.

### Quick Start Guide to Editing on GitHub

1. Go to the [`src/data/`](src/data) folder in this repository.
2. Select the file you want to edit:
   - **`historical-periods.ts`**: To add or edit Historical Periods or Figures.
   - **`definitions.ts`**: To add or edit Terms and Definitions.
3. Click the ✏️ (pencil) icon in the top right corner of the file view to start editing.
4. Add your new content by copying an existing block and filling in the blanks. **Please read `CONTRIBUTING.md` for exact copy-paste templates and rules.**
5. Scroll to the bottom, write a short description of what you added, and click **Commit changes**.

### Project Rules
*   **No Wikipedia:** All external links must point to primary sources, credible historical archives, or verified biblical texts (e.g., BibleGateway, CCEL, National Archives).
*   **Image Sourcing:** If you are adding an image, it must be stored in `public/images/periods/` and use the proper tailwind positioning (`object-cover object-[center_top]`).

Please see our comprehensive [**CONTRIBUTING.md**](CONTRIBUTING.md) for step-by-step instructions and templates.

## Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Package Manager:** [Bun](https://bun.sh/)

## Running Locally for Developers

If you want to run the project on your own computer:

1. Clone the repository and install dependencies with Bun:
   ```bash
   bun install
   ```
2. Start the development server:
   ```bash
   bun run dev
   ```
3. Run the linter and TypeScript compiler before committing:
   ```bash
   bun run lint
   bun run build
   ```

## License

[MIT License](LICENSE)
