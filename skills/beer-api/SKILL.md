---
name: beer-api
description: Search beer styles, hops, malts, yeast, and brewing terminology. Use when working with beer data, BJCP styles, brewing science, or craft beer applications.
license: MIT
metadata:
  author: fyipedia
  version: "0.1.0"
  homepage: "https://beerfyi.com"
---

# BeerFYI -- Beer API for AI Agents

TypeScript API client for beerfyi.com. Search 112 BJCP beer styles, 82 hop varieties, 41 malts, 29 yeast strains, and brewing terminology. Zero dependencies.

**Install**: `npm install @fyipedia/beerfyi` -- **Web**: [beerfyi.com](https://beerfyi.com/) -- **API**: [REST API](https://beerfyi.com/developers/) -- **PyPI**: `pip install beerfyi`

## When to Use

- User asks about beer styles, BJCP classifications, or brewing parameters
- User needs hop variety information (alpha acids, aroma profiles)
- User wants to compare beer styles or find ingredient substitutes
- User is building a recipe calculator or beer recommendation tool
- User needs brewing terminology definitions

## Tools

### `search(query) -> SearchResult`

Search across beer styles, hops, malts, yeast, and glossary terms.

```typescript
import { BeerFYI } from "beerfyi";
const api = new BeerFYI();
const results = await api.search("ipa");
```

### `glossaryTerm(slug) -> GlossaryTerm`

Look up brewing terminology by slug.

```typescript
const term = await api.glossaryTerm("dry-hopping");
console.log(term.definition);
```

### `style(slug) -> StyleDetail`

Get beer style detail with BJCP parameters (ABV, IBU, SRM, OG ranges).

```typescript
const style = await api.style("new-england-ipa");
console.log(style.ibu_min, style.ibu_max); // 25 60
```

### `hop(slug) -> HopDetail`

Get hop variety detail with alpha acid range and aroma descriptors.

```typescript
const hop = await api.hop("citra");
console.log(hop.aroma_descriptors); // ["citrus", "tropical", "grapefruit"]
```

### `compare(slugA, slugB) -> CompareResult`

Compare two beer styles side by side.

```typescript
const comparison = await api.compare("west-coast-ipa", "new-england-ipa");
```

## REST API (No Auth Required)

```bash
curl https://beerfyi.com/api/search/?q=ipa
curl https://beerfyi.com/api/style/new-england-ipa/
curl https://beerfyi.com/api/hop/citra/
curl https://beerfyi.com/api/term/ibu/
curl https://beerfyi.com/api/random/
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/style/{slug}/` | Beer style detail with BJCP parameters |
| GET | `/api/hop/{slug}/` | Hop variety detail with alpha acids, aroma |
| GET | `/api/malt/{slug}/` | Malt detail with color, flavor contribution |
| GET | `/api/yeast/{slug}/` | Yeast strain detail with attenuation, flocculation |
| GET | `/api/term/{slug}/` | Brewing glossary term definition |
| GET | `/api/search/?q={query}` | Search styles, hops, malts, yeast |
| GET | `/api/compare/?a={slug}&b={slug}` | Compare two beer styles |
| GET | `/api/random/` | Random beer style |
| GET | `/api/openapi.json` | OpenAPI 3.1.0 specification |

Full spec: [OpenAPI 3.1.0](https://beerfyi.com/api/openapi.json)

## Beer Style Categories

| Category | Styles | ABV Range | Examples |
|----------|--------|-----------|----------|
| Pale Ales | IPA, Pale Ale, Blonde | 4.5-7.5% | West Coast IPA, American Pale Ale |
| Dark Ales | Stout, Porter, Brown Ale | 4.0-12.0% | Irish Stout, Robust Porter |
| Wheat Beers | Hefeweizen, Witbier | 4.0-5.5% | Bavarian Hefeweizen, Belgian Witbier |
| Lagers | Pilsner, Helles, Bock | 4.0-7.5% | German Pilsner, Doppelbock |
| Belgian | Tripel, Dubbel, Saison | 5.0-12.0% | Belgian Tripel, Farmhouse Saison |
| Sour | Lambic, Gose, Berliner | 3.0-7.0% | Gueuze, Leipziger Gose |
| Strong | Barleywine, Imperial | 8.0-15.0% | English Barleywine, Imperial Stout |

## Key Brewing Metrics

| Metric | Unit | Range | Description |
|--------|------|-------|-------------|
| ABV | % | 2.0-15.0 | Alcohol by volume |
| IBU | Units | 5-120 | International Bitterness Units |
| SRM | Lovibond | 1-40+ | Standard Reference Method (color) |
| OG | Specific gravity | 1.030-1.120 | Original gravity (pre-fermentation) |
| FG | Specific gravity | 1.000-1.030 | Final gravity (post-fermentation) |

## Demo

![BeerFYI demo](https://raw.githubusercontent.com/fyipedia/beerfyi-js/main/demo.gif)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BrewFYI](https://brewfyi.com), [WhiskeyFYI](https://whiskeyfyi.com), [TeaFYI](https://teafyi.com), [NihonshuFYI](https://nihonshufyi.com).
