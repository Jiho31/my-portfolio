import "@testing-library/jest-dom";
import { randomColorGenerator } from "_utils/utils";
// import { render, screen } from "@testing-library/react";

describe("randomColorGenerator", () => {
  it.skip("should return tailwind color syntaxed strings", () => {
    const COLORS = ["green", "emerald", "teal", "cyan", "sky", "blue"];
    const STEPS = [400, 500, 600, 700];

    const results = new Set();
    for (let i = 0; i < COLORS.length; i++) {
      for (let j = 0; j < STEPS.length; j++) {
        results.add(`${COLORS[i]}-${STEPS[j]}`);
      }
    }

    expect(Array.from(results)).toEqual(
      expect.arrayContaining([randomColorGenerator()])
    );
  });
});
