import { describe, it, expect } from "vitest";
import { capitalizeString, getIntensityIconColour } from "./utils";

describe("capitalizeString", () => {
    it("capitalizes the first letter of a string", () => {
        expect(capitalizeString("high")).toBe("High");
        expect(capitalizeString("very low")).toBe("Very low");
    });
});

describe("getIntensityIconColour", () => {
    it("returns correct color for very low", () => {
        expect(getIntensityIconColour("very low")).toBe("#01BFFF");
    });

    it("returns correct color for low", () => {
        expect(getIntensityIconColour("low")).toBe("#3BB371");
    });

    it("returns correct color for moderate", () => {
        expect(getIntensityIconColour("moderate")).toBe("#5F9DA0");
    });

    it("returns correct color for high", () => {
        expect(getIntensityIconColour("high")).toBe("#FF6247");
    });

    it("returns correct color for very high", () => {
        expect(getIntensityIconColour("very high")).toBe("#8B0000");
    });

    it("returns undefined for unknown input", () => {
        expect(getIntensityIconColour("unknown")).toBe("#01BFFF")
    });
});
