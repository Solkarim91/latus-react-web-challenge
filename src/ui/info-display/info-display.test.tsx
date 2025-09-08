import { render, screen, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InfoDisplay } from "./info-display";
import mockData from "../../../assets/data/mock-component-data.json";

describe("InfoDisplay", () => {
    it("renders a Card for each item in mockData", () => {
        render(<InfoDisplay />);
        const cards = screen.getAllByTestId("CardContainer");
        expect(cards).toHaveLength(mockData.data.length);
    });

    it("renders formatted time ranges as headings", () => {
        render(<InfoDisplay />);
        const { from, to } = mockData.data[0];

        const expectedHeading = new Date(from).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
            + " - " +
            new Date(to).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });

        expect(screen.getByText(expectedHeading)).toBeInTheDocument();
    });

    it("renders IntensityValues inside each Card", () => {
        render(<InfoDisplay />);
        const cards = screen.getAllByTestId("CardContainer");

        cards.forEach((card, index) => {
            const { intensity } = mockData.data[index];
            expect(
            within(card).getByText(intensity.forecast.toString())
            ).toBeInTheDocument();
        });
    });
});
