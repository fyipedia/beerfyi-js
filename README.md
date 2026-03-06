# beerfyi

[![npm](https://img.shields.io/npm/v/@fyipedia/beerfyi)](https://www.npmjs.com/package/@fyipedia/beerfyi)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/@fyipedia/beerfyi)

TypeScript API client for [BeerFYI](https://beerfyi.com) -- the complete beer style reference with 112 BJCP-classified beer styles, 82 hop varieties, 41 malts, 29 yeast strains, and 150 expert guides. Search styles, ingredients, compare beer profiles, and explore brewing science through a typed REST API. Zero dependencies, uses native `fetch`.

> **Explore beer at [beerfyi.com](https://beerfyi.com)** -- [Styles](https://beerfyi.com/styles/) | [Hops](https://beerfyi.com/hops/) | [Malts](https://beerfyi.com/malts/) | [API Docs](https://beerfyi.com/developers/)

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [What You Can Do](#what-you-can-do)
  - [Beer Style Categories](#beer-style-categories)
  - [Hop Varieties](#hop-varieties)
  - [Malts and Grains](#malts-and-grains)
  - [Key Brewing Metrics](#key-brewing-metrics)
- [API Reference](#api-reference)
- [TypeScript Types](#typescript-types)
- [Learn More About Beer](#learn-more-about-beer)
- [Also Available for Python](#also-available-for-python)
- [Beverage FYI Family](#beverage-fyi-family)
- [License](#license)

## Install

```bash
npm install @fyipedia/beerfyi
```

Works in Node.js, Deno, Bun, and browsers (ESM).

## Quick Start

```typescript
import { BeerFYI } from "@fyipedia/beerfyi";

const api = new BeerFYI();

// Search beer styles, hops, malts, yeast, glossary terms
const results = await api.search("ipa");
console.log(results.total);

// Get beer style detail with BJCP parameters
const style = await api.style("new-england-ipa");
console.log(style.abv_min, style.abv_max); // 6.0 9.0
console.log(style.ibu_min, style.ibu_max); // 25 60

// Get hop variety detail
const hop = await api.hop("citra");
console.log(hop.aroma_descriptors); // ["citrus", "tropical", "grapefruit"]

// Compare two styles
const comparison = await api.compare("west-coast-ipa", "new-england-ipa");

// Random beer style
const random = await api.random();
```

## What You Can Do

### Beer Style Categories

Beer styles follow the Beer Judge Certification Program (BJCP) guidelines -- the global standard for beer style classification. Each style has defined parameters for appearance, aroma, flavor, and mouthfeel:

| Category | Description | Notable Styles |
|----------|-------------|----------------|
| Ale | Top-fermented, warm fermentation (15-24C) | Pale Ale, IPA, Stout, Porter |
| Lager | Bottom-fermented, cold conditioning (7-13C) | Pilsner, Helles, Bock, Dunkel |
| Wheat | Significant wheat malt proportion (30-70%) | Hefeweizen, Witbier |
| IPA | Hop-forward, American craft innovation | West Coast, NEIPA, Double IPA |
| Sour | Intentional acidity from wild yeast/bacteria | Lambic, Gose, Flanders Red |
| Belgian | Complex yeast character, phenols, esters | Dubbel, Tripel, Saison |

Learn more: [Browse 112 Beer Styles](https://beerfyi.com/style/) -- [Style Comparison](https://beerfyi.com/compare/)

### Hop Varieties

82 hop varieties with alpha acid percentages, aroma descriptors, and recommended beer styles. Hops provide bitterness, floral/citrus/pine aromas, and act as a natural preservative. Major growing regions include Yakima Valley, Hallertau, Kent, Saaz, and Nelson.

Learn more: [Explore 82 Hop Varieties](https://beerfyi.com/hop/)

### Malts and Grains

41 malts covering base malts (Pale, Pilsner, Munich), specialty malts (Crystal, Chocolate, Black Patent), and adjuncts (wheat, oats, rye). Temperature and duration of kilning determine color (2-450 SRM) and flavor.

Learn more: [Browse 41 Malts](https://beerfyi.com/malt/)

### Key Brewing Metrics

| Metric | Abbreviation | Description |
|--------|-------------|-------------|
| International Bitterness Units | IBU | Hop bitterness (0-120+) |
| Standard Reference Method | SRM | Beer color (1=pale, 40+=black) |
| Alcohol By Volume | ABV | Alcohol content percentage |
| Original Gravity | OG | Sugar before fermentation |
| Attenuation | % | Sugar converted to alcohol |

## API Reference

| Method | Description |
|--------|-------------|
| `search(query)` | Search styles, hops, malts, yeast, glossary |
| `glossaryTerm(slug)` | Get glossary term definition |
| `style(slug)` | Beer style detail with BJCP parameters |
| `hop(slug)` | Hop variety detail with alpha acids |
| `malt(slug)` | Malt detail with color, flavor |
| `yeast(slug)` | Yeast strain detail |
| `brewery(slug)` | Brewery detail |
| `compare(slugA, slugB)` | Compare two beer styles |
| `random()` | Random beer style |

## TypeScript Types

```typescript
import type { SearchResult, GlossaryTerm, StyleDetail, HopDetail, MaltDetail, YeastDetail, BreweryDetail, CompareResult, RandomResult } from "@fyipedia/beerfyi";
```

## Learn More About Beer

- **Reference**: [Styles](https://beerfyi.com/styles/) | [Hops](https://beerfyi.com/hops/) | [Malts](https://beerfyi.com/malts/) | [Yeast](https://beerfyi.com/yeast/)
- **Guides**: [Brewing Guides](https://beerfyi.com/guides/) | [Glossary](https://beerfyi.com/glossary/)
- **API**: [Developer Docs](https://beerfyi.com/developers/) | [OpenAPI Spec](https://beerfyi.com/api/openapi.json)
- **Python**: [PyPI Package](https://pypi.org/project/beerfyi/)

## Also Available for Python

```bash
pip install beerfyi
```

See the [Python package on PyPI](https://pypi.org/project/beerfyi/).

## Beverage FYI Family

Part of the [FYIPedia](https://fyipedia.com) open-source developer tools ecosystem -- world beverages from cocktails to sake.

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| cocktailfyi | [PyPI](https://pypi.org/project/cocktailfyi/) | [npm](https://www.npmjs.com/package/cocktailfyi) | 636 cocktails, ABV, calories -- [cocktailfyi.com](https://cocktailfyi.com/) |
| vinofyi | [PyPI](https://pypi.org/project/vinofyi/) | [npm](https://www.npmjs.com/package/vinofyi) | Wines, grapes, regions, food pairings -- [vinofyi.com](https://vinofyi.com/) |
| **beerfyi** | [PyPI](https://pypi.org/project/beerfyi/) | [npm](https://www.npmjs.com/package/beerfyi) | **112 beer styles, hops, malts, BJCP -- [beerfyi.com](https://beerfyi.com/)** |
| brewfyi | [PyPI](https://pypi.org/project/brewfyi/) | [npm](https://www.npmjs.com/package/brewfyi) | 72 coffee varieties, brew methods -- [brewfyi.com](https://brewfyi.com/) |
| whiskeyfyi | [PyPI](https://pypi.org/project/whiskeyfyi/) | [npm](https://www.npmjs.com/package/whiskeyfyi) | 80 whiskey expressions, distilleries -- [whiskeyfyi.com](https://whiskeyfyi.com/) |
| teafyi | [PyPI](https://pypi.org/project/teafyi/) | [npm](https://www.npmjs.com/package/teafyi) | 60 tea varieties, teaware -- [teafyi.com](https://teafyi.com/) |
| nihonshufyi | [PyPI](https://pypi.org/project/nihonshufyi/) | [npm](https://www.npmjs.com/package/nihonshufyi) | 80 sake, rice varieties -- [nihonshufyi.com](https://nihonshufyi.com/) |

## License

MIT
