import { describe, it, expect } from "vitest";
import { formatTimeRange } from "./utils";

describe("formatTimeRange", () => {
    it("formats a time range in 24-hour HH:mm format", () => {
        const from = "2018-01-01T09:00:00Z";
        const to = "2018-01-01T09:30:00Z";

        const result = formatTimeRange(from, to);
        expect(result).toBe("09:00 - 09:30");
    });
});
