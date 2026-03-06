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

Full spec: [OpenAPI 3.1.0](https://beerfyi.com/api/openapi.json)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com): [CocktailFYI](https://cocktailfyi.com), [VinoFYI](https://vinofyi.com), [BrewFYI](https://brewfyi.com), [WhiskeyFYI](https://whiskeyfyi.com), [TeaFYI](https://teafyi.com), [NihonshuFYI](https://nihonshufyi.com).
