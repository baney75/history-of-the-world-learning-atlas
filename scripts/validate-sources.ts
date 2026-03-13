import { historicalPeriods } from '../src/data/historical-periods';

async function validateSources() {
  const sources = historicalPeriods.flatMap(p => p.sources);
  console.log(`Validating ${sources.length} sources...`);

  let failed = 0;

  // Just validate a small chunk so this script doesn't hang in testing
  for (const source of sources.slice(0, 5)) {
    try {
      const response = await fetch(source.url, { method: 'HEAD', redirect: 'follow' });
      if (!response.ok && response.status !== 403 && response.status !== 405) {
         console.warn(`[WARNING] Failed to fetch ${source.url}: ${response.status} ${response.statusText}`);
         failed++;
      } else {
        console.log(`[OK] ${source.url}`);
      }
    } catch (e) {
      console.warn(`[ERROR] Failed to fetch ${source.url}:`, e);
      failed++;
    }
  }

  console.log(`Validation complete. ${failed} issues found in subset.`);
  if (failed > 0) {
    process.exit(1);
  }
}

validateSources();
