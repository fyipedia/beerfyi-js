/**
 * BeerFYI API client -- TypeScript wrapper for beerfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 */

import type {
  BreweryDetail,
  CompareResult,
  GlossaryTerm,
  HopDetail,
  MaltDetail,
  RandomResult,
  SearchResult,
  StyleDetail,
  YeastDetail,
} from "./types.js";

export class BeerFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://beerfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T>(
    path: string,
    params?: Record<string, string>,
  ): Promise<T> {
    const url = new URL(path, this.baseUrl);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json() as Promise<T>;
  }

  /** Search beer styles, hops, malts, yeast, and glossary terms. */
  async search(query: string): Promise<SearchResult> {
    return this.get<SearchResult>("/api/search/", { q: query });
  }

  /** Get a glossary term by slug. */
  async glossaryTerm(slug: string): Promise<GlossaryTerm> {
    return this.get<GlossaryTerm>(`/api/term/${slug}/`);
  }

  /** Get beer style detail by slug. */
  async style(slug: string): Promise<StyleDetail> {
    return this.get<StyleDetail>(`/api/style/${slug}/`);
  }

  /** Get hop variety detail by slug. */
  async hop(slug: string): Promise<HopDetail> {
    return this.get<HopDetail>(`/api/hop/${slug}/`);
  }

  /** Get malt detail by slug. */
  async malt(slug: string): Promise<MaltDetail> {
    return this.get<MaltDetail>(`/api/malt/${slug}/`);
  }

  /** Get yeast strain detail by slug. */
  async yeast(slug: string): Promise<YeastDetail> {
    return this.get<YeastDetail>(`/api/yeast/${slug}/`);
  }

  /** Get brewery detail by slug. */
  async brewery(slug: string): Promise<BreweryDetail> {
    return this.get<BreweryDetail>(`/api/brewery/${slug}/`);
  }

  /** Compare two beer styles. */
  async compare(slugA: string, slugB: string): Promise<CompareResult> {
    return this.get<CompareResult>("/api/compare/", {
      a: slugA,
      b: slugB,
    });
  }

  /** Get a random beer style. */
  async random(): Promise<RandomResult> {
    return this.get<RandomResult>("/api/random/");
  }
}
