import { isGaugeSegmentsArray } from "./types";

describe("Gauge types", () => {
  it("accepts arrays containing incomplete segments", () => {
    expect(isGaugeSegmentsArray([{ min: 0, max: null }])).toBe(true);
  });
});
