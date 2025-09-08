import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Eye } from "react-feather";
import { IntensityValueItem, IntensityValues } from "./intensity-values";

describe("IntensityValueItem", () => {
    it("renders the value text", () => {
        render(<IntensityValueItem icon={<Eye />} value="Test Value" />);
        expect(screen.getByText("Test Value")).toBeInTheDocument();
    });

    it("renders the icon with test id", () => {
        render(<IntensityValueItem icon={<Eye data-testid="EyeIcon" />} value="Test Value" />);

        const icon = screen.getByTestId('EyeIcon')
        expect(icon).toBeInTheDocument();
    });
});

describe("IntensityValues", () => {
    it("renders the correct numbers", () => {
        render(<IntensityValues intensityValues={{ forecast: 100, actual: 90, index: "high" }} />);
        expect(screen.getByText("100")).toBeInTheDocument();
        expect(screen.getByText("90")).toBeInTheDocument();
    });

    it("formats the index value with capitalizeString", () => {
        render(<IntensityValues intensityValues={{ forecast: 100, actual: 90, index: "high" }} />);
        expect(screen.getByText("High")).toBeInTheDocument();
    });

    it("applies correct icon color from getIntensityIconColour", () => {
        render(<IntensityValues intensityValues={{ forecast: 100, actual: 90, index: "very low" }} />);
        
        const barChartIcon = screen.getByTestId("BarChartIcon");
        expect(barChartIcon).toBeInTheDocument();

        const svg = barChartIcon.querySelector("svg");
        expect(svg).toHaveAttribute("stroke", "#01BFFF");
    });
});