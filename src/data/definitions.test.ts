import { describe, it, expect } from 'vitest';
import { searchDefinitions, definitions } from './definitions';

describe('searchDefinitions', () => {
  it('returns all definitions when query is empty string', () => {
    const result = searchDefinitions('');
    expect(result).toEqual(definitions);
    expect(result.length).toBe(definitions.length);
  });

  it('returns all definitions when query is only whitespace', () => {
    const result = searchDefinitions('   ');
    expect(result).toEqual(definitions);
    expect(result.length).toBe(definitions.length);
  });

  it('filters definitions based on a search term', () => {
    const query = 'Covenant';
    const result = searchDefinitions(query);
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThan(definitions.length);

    // Check if at least one field contains the query
    result.forEach(def => {
      const inTerm = def.term.toLowerCase().includes(query.toLowerCase());
      const inShortDef = def.shortDefinition.toLowerCase().includes(query.toLowerCase());
      const inFullDef = def.fullDefinition.toLowerCase().includes(query.toLowerCase());
      const inRelated = def.relatedTerms.some(t => t.toLowerCase().includes(query.toLowerCase()));

      expect(inTerm || inShortDef || inFullDef || inRelated).toBe(true);
    });
  });

  it('is case-insensitive', () => {
    const resultLower = searchDefinitions('grace');
    const resultUpper = searchDefinitions('GRACE');
    expect(resultLower).toEqual(resultUpper);
    expect(resultLower.length).toBeGreaterThan(0);
  });

  it('returns empty array for non-matching query', () => {
    const result = searchDefinitions('nonexistentterm12345');
    expect(result).toEqual([]);
  });
});
