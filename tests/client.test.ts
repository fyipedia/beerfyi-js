import { describe, expect, it } from "vitest";
import { BeerFYI } from "../src/index.js";

describe("BeerFYI", () => {
  it("can be instantiated with default base URL", () => {
    const api = new BeerFYI();
    expect(api).toBeInstanceOf(BeerFYI);
  });

  it("can be instantiated with custom base URL", () => {
    const api = new BeerFYI("http://localhost:8032");
    expect(api).toBeInstanceOf(BeerFYI);
  });

  it("has search method", () => {
    const api = new BeerFYI();
    expect(typeof api.search).toBe("function");
  });

  it("has glossaryTerm method", () => {
    const api = new BeerFYI();
    expect(typeof api.glossaryTerm).toBe("function");
  });

  it("has style method", () => {
    const api = new BeerFYI();
    expect(typeof api.style).toBe("function");
  });

  it("has hop method", () => {
    const api = new BeerFYI();
    expect(typeof api.hop).toBe("function");
  });

  it("has malt method", () => {
    const api = new BeerFYI();
    expect(typeof api.malt).toBe("function");
  });

  it("has yeast method", () => {
    const api = new BeerFYI();
    expect(typeof api.yeast).toBe("function");
  });

  it("has brewery method", () => {
    const api = new BeerFYI();
    expect(typeof api.brewery).toBe("function");
  });

  it("has compare method", () => {
    const api = new BeerFYI();
    expect(typeof api.compare).toBe("function");
  });

  it("has random method", () => {
    const api = new BeerFYI();
    expect(typeof api.random).toBe("function");
  });
});
