/**
 * BeerFYI API client — TypeScript wrapper for beerfyi.com REST API.
 *
 * Zero dependencies. Uses native `fetch`.
 *
 * @example
 * ```ts
 * import { BeerFYI } from "beerfyi";
 * const api = new BeerFYI();
 * const items = await api.search("query");
 * ```
 */

/** Generic API response type. */
export interface ApiResponse {
  [key: string]: unknown;
}

export class BeerFYI {
  private baseUrl: string;

  constructor(baseUrl = "https://beerfyi.com") {
    this.baseUrl = baseUrl.replace(/\/+$/, "");
  }

  private async get<T = ApiResponse>(
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

  // -- Endpoints ----------------------------------------------------------

  /** List all breweries. */
  async listBreweries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/breweries/", params);
  }

  /** Get brewery by slug. */
  async getBrewery(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/breweries/${slug}/`);
  }

  /** List all categories. */
  async listCategories(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/categories/", params);
  }

  /** Get category by slug. */
  async getCategory(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/categories/${slug}/`);
  }

  /** List all countries. */
  async listCountries(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/countries/", params);
  }

  /** Get country by slug. */
  async getCountry(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/countries/${slug}/`);
  }

  /** List all faqs. */
  async listFaqs(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/faqs/", params);
  }

  /** Get faq by slug. */
  async getFaq(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/faqs/${slug}/`);
  }

  /** List all glossary. */
  async listGlossary(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/glossary/", params);
  }

  /** Get term by slug. */
  async getTerm(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/glossary/${slug}/`);
  }

  /** List all guides. */
  async listGuides(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/guides/", params);
  }

  /** Get guide by slug. */
  async getGuide(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/guides/${slug}/`);
  }

  /** List all hops. */
  async listHops(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/hops/", params);
  }

  /** Get hop by slug. */
  async getHop(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/hops/${slug}/`);
  }

  /** List all malts. */
  async listMalts(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/malts/", params);
  }

  /** Get malt by slug. */
  async getMalt(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/malts/${slug}/`);
  }

  /** List all regions. */
  async listRegions(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/regions/", params);
  }

  /** Get region by slug. */
  async getRegion(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/regions/${slug}/`);
  }

  /** List all styles. */
  async listStyles(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/styles/", params);
  }

  /** Get style by slug. */
  async getStyle(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/styles/${slug}/`);
  }

  /** List all tools. */
  async listTools(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/tools/", params);
  }

  /** Get tool by slug. */
  async getTool(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/tools/${slug}/`);
  }

  /** List all yeasts. */
  async listYeasts(params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/yeasts/", params);
  }

  /** Get yeast by slug. */
  async getYeast(slug: string): Promise<ApiResponse> {
    return this.get(`/api/v1/yeasts/${slug}/`);
  }

  /** Search across all content. */
  async search(query: string, params?: Record<string, string>): Promise<ApiResponse> {
    return this.get("/api/v1/search/", { q: query, ...params });
  }
}
