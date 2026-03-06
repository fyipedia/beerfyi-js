/**
 * BeerFYI API response types.
 */

export interface SearchResult {
  results: Array<{ name: string; slug: string; type: string; url: string }>;
  query: string;
  total: number;
}

export interface GlossaryTerm {
  name: string;
  slug: string;
  definition: string;
  related_terms?: string[];
}

export interface StyleDetail {
  slug: string;
  name: string;
  category?: string;
  description: string;
  abv_min?: number;
  abv_max?: number;
  ibu_min?: number;
  ibu_max?: number;
  srm_min?: number;
  srm_max?: number;
  og_min?: number;
  og_max?: number;
  recommended_hops?: string[];
  url: string;
}

export interface HopDetail {
  slug: string;
  name: string;
  description: string;
  alpha_acid_min?: number;
  alpha_acid_max?: number;
  aroma_descriptors?: string[];
  origin?: string;
  usage?: string[];
  url: string;
}

export interface MaltDetail {
  slug: string;
  name: string;
  description: string;
  color_srm?: number;
  flavor?: string[];
  url: string;
}

export interface YeastDetail {
  slug: string;
  name: string;
  description: string;
  temp_min?: number;
  temp_max?: number;
  attenuation?: string;
  flocculation?: string;
  url: string;
}

export interface BreweryDetail {
  slug: string;
  name: string;
  country?: string;
  region?: string;
  description: string;
  url: string;
}

export interface CompareResult {
  item_a: { name: string; slug: string };
  item_b: { name: string; slug: string };
  comparison: Record<string, unknown>;
}

export interface RandomResult {
  slug: string;
  name: string;
  type: string;
  url: string;
}
