# Contributor's Guide: History of the Western World

Thank you for your interest in expanding our historical timeline! This guide is specifically designed for non-technical users, students, and historians. You can add new periods, figures, and definitions directly from the GitHub website without installing any software.

## Important Rules

1.  **No Wikipedia:** All sources must be primary documents (e.g., National Archives, CCEL, Fordham Sourcebook) or recognized historical archives.
2.  **Scripture:** Biblical references should link to [BibleGateway](https://www.biblegateway.com/) using the ESV translation.
3.  **Images:** Images must be uploaded to the `public/images/periods/` directory. When adding an image, use descriptive alt text and ensure the subject is not cut off by adding the `object-[center_top]` Tailwind class to the `TimelineCard.tsx` component (developers will handle this if you just upload the image).

## How to Add Content on GitHub

1. Navigate to the `src/data` folder in the repository.
2. Click on the file you want to edit:
   *   `historical-periods.ts` (For Periods and Figures)
   *   `definitions.ts` (For Terms and Definitions)
3. Click the ✏️ **Pencil icon** in the top right corner.
4. Scroll to the appropriate section (e.g., `americanFounders`, `historicalPeriods`).
5. Copy the template below, paste it at the end of the section, and fill in your information.
6. Scroll to the bottom of the page, write a short description, and click **Commit changes**.

---

## Copy-Paste Templates

### 1. Adding a Definition
File: `src/data/definitions.ts`

Find the `export const definitions: Definition[] = [` array and paste this template before the closing `];`:

```javascript
  {
    id: 'your-term-id', // Use lowercase and hyphens (e.g., 'natural-law')
    term: 'Your Term Name',
    shortDefinition: 'A one-sentence summary of the term.',
    fullDefinition: 'A comprehensive explanation of the concept, its history, and theological or political significance.',
    category: 'theology', // Options: 'theology', 'historical', 'political'
    scriptureReferences: ['Book Chapter:Verse'], // E.g., ['Romans 1:16-17']
    relatedFigures: ['figure-id'], // IDs of related figures (e.g., 'martin-luther')
    relatedPeriods: ['period-id'], // IDs of related periods (e.g., 'reformation')
    relatedTerms: ['related-term-id'], // IDs of related definitions
    sources: [
      {
        title: 'Source Title',
        url: 'https://link-to-primary-source.com',
        type: 'primary' // Options: 'bible', 'primary', 'historical', 'theological', 'archaeological', 'academic' // Options: 'bible', 'primary', 'historical', 'theological'
      }
    ],
  },
```

### 2. Adding a Historical Figure
File: `src/data/historical-periods.ts`

Find the appropriate array (e.g., `modernFigures`, `reformers`) and paste this template:

```javascript
  {
    id: 'firstname-lastname', // E.g., 'george-washington'
    name: 'Firstname Lastname',
    title: 'Their Title or Role',
    lifespan: 'Year-Year', // E.g., '1732-1799'
    description: 'A detailed paragraph about their life, actions, and significance.',
    significance: 'A one-sentence summary of why they matter.',
    scripturalReference: 'Relevant Book Chapter:Verse' // Optional
  },
```

### 3. Adding a Historical Period
File: `src/data/historical-periods.ts`

Find the `const baseHistoricalPeriods: HistoricalPeriod[] = [` array and paste this template:

```javascript
  {
    id: 'period-id-name', // E.g., 'american-founding'
    title: 'The Period Title',
    subtitle: 'A descriptive subtitle',
    era: 'Year-Year AD', // E.g., '1775-1789 AD'
    description: 'A comprehensive description of the era.',
    scripturalContext: 'Relevant Book Chapter:Verse',
    quote: 'A famous quote from the era.',
    quoteSource: 'Who said it',
    imageUrl: '/images/periods/your-image-filename.jpg',
    imageAlt: 'Descriptive text for the image',
    keyFigures: [], // Example: [americanFounders[0]] if referencing a figure array
    keyEvents: [
      {
        id: 'event-id',
        name: 'Event Name',
        date: 'Date of Event',
        description: 'What happened during this event.',
        location: 'Location (Optional)',
        scripturalReference: 'Book Chapter:Verse (Optional)'
      }
    ],
    sources: [
      {
        title: 'Source Title',
        url: 'https://link-to-source.com',
        type: 'primary' // Options: 'bible', 'primary', 'historical', 'theological', 'archaeological', 'academic'
      }
    ]
  },
```

Thank you for contributing to the History of the Western World!
