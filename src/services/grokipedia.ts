import type { GrokipediaResponse } from '@/types/history';

const GROKIPEDIA_BASE_URL = 'https://grokipedia-api.com/page';

export async function fetchGrokipediaPage(slug: string): Promise<GrokipediaResponse | null> {
  try {
    const response = await fetch(`${GROKIPEDIA_BASE_URL}/${slug}`);
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${slug}:`, error);
    return null;
  }
}

export const grokipediaQueries = {
  bible: 'Bible',
  creationism: 'Creationism',
  ancientNearEast: 'Ancient_Near_East',
  ancientEgypt: 'Ancient_Egypt',
  israelites: 'Israelites',
  abraham: 'Abraham',
  moses: 'Moses',
  david: 'David',
  solomon: 'Solomon',
  jesus: 'Jesus',
  christianity: 'Christianity',
  paulTheApostle: 'Paul_the_Apostle',
  romanEmpire: 'Roman_Empire',
  constantine: 'Constantine_the_Great',
  middleAges: 'Middle_Ages',
  reformation: 'Reformation',
};