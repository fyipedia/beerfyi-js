/**
 * beerfyi -- TypeScript API client for BeerFYI.
 *
 * Search beer styles, hops, malts, yeast, and brewing terminology
 * from beerfyi.com. Zero dependencies, uses native `fetch`.
 *
 * @example
 * ```ts
 * import { BeerFYI } from "@fyipedia/beerfyi";
 *
 * const api = new BeerFYI();
 * const results = await api.search("ipa");
 * console.log(results);
 * ```
 *
 * @packageDocumentation
 */

export { BeerFYI } from "./client.js";

export type {
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
