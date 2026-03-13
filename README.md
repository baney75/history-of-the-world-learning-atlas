# History of the Western World

A responsive, interactive timeline application exploring the history of Western civilization from Creation to the modern era, with a particular focus on Scripture, church history, and the founding of America.

## Features

*   **Interactive Timeline:** Scroll through historical periods, from Antiquity to the Modern Era.
*   **Rich Content:** Detailed information on key events, figures, and theological developments.
*   **Primary Sources:** Links to primary source documents and references for further study.
*   **Filtering:** Filter the timeline by specific categories (e.g., Biblical History, Church History, American Founding).
*   **Responsive Design:** Optimized for both desktop and mobile viewing.
*   **Deep Linking:** Share links to specific historical periods or the figures network.
*   **Figures Network:** A visualization connecting historical figures and their relationships.

## Tech Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
*   **Routing:** [TanStack Router](https://tanstack.com/router/latest)
*   **Animations:** [Motion](https://motion.dev/)
*   **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/baney75/history-of-the-world-learning-atlas.git
    cd history-of-the-world-learning-atlas
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

3.  **Start the development server:**
    ```bash
    bun run dev
    ```
    This will start the Vite development server. Open your browser to the local URL provided in the console (usually `http://localhost:5173/`).

## Scripts

*   `bun run dev`: Starts the development server.
*   `bun run build`: Builds the application for production.
*   `bun run lint`: Runs ESLint to check for code style and potential errors.
*   `bun run preview`: Previews the production build locally.

## Project Structure

*   `src/`: Contains the source code for the application.
    *   `components/`: Reusable React components (e.g., `TimelineCard`, `PeriodDetail`).
    *   `data/`: Data source for the historical periods and figures (`historical-periods.ts`).
    *   `pages/`: Main page components (e.g., `FiguresNetwork`).
    *   `types/`: TypeScript type definitions.
    *   `App.tsx`: The main application entry point and layout.
    *   `router.tsx`: Application routing configuration.
*   `public/images/periods/`: Local image assets for the timeline.

## Data Structure

The application's content is driven by the data in `src/data/historical-periods.ts`. Each period is defined with properties such as:

*   `id`: A unique identifier (kebab-case).
*   `title`: The title of the period.
*   `date`: The date range.
*   `description`: A detailed description.
*   `imageUrl`: Path to the local image asset.
*   `imageAlt`: Alternative text for the image.
*   `category`: The category the period belongs to.
*   `sources`: Links to relevant primary sources or references.

## Contributing

When contributing to this project, please adhere to the guidelines outlined in the `AGENTS.md` file.

Key points include:
*   Use verifiable primary sources for historical claims.
*   Do not use Wikipedia as a source.
*   Ensure UI changes are verified on both mobile and desktop viewports.
*   Run the linter and build scripts before submitting changes.

## License

[MIT License](LICENSE)
