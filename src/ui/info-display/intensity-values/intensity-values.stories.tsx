import type { Meta, StoryObj } from "@storybook/react";
import { IntensityValues } from "./intensity-values";
import { IntensityValuesType } from "./types";

const meta = {
    title: "InfoDisplay/IntensityValues",
    component: IntensityValues,
    decorators: [
        (Story) => (
        <div style={{ padding: 16 }}>
            <Story />
        </div>
        ),
    ],
} satisfies Meta<typeof IntensityValues>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseValues: IntensityValuesType = {
    forecast: 200,
    actual: 190,
    index: "moderate",
};

export const Playground: Story = {
    args: {
        intensityValues: baseValues,
    },
};

export const VeryLow: Story = {
    args: {
        intensityValues: { ...baseValues, index: "very low" },
    },
};

export const Low: Story = {
    args: {
        intensityValues: { ...baseValues, index: "low" },
    },
};

export const Moderate: Story = {
    args: {
        intensityValues: { ...baseValues, index: "moderate" },
    },
};

export const High: Story = {
    args: {
        intensityValues: { ...baseValues, index: "high" },
    },
};

export const VeryHigh: Story = {
    args: {
        intensityValues: { ...baseValues, index: "very high" },
    },
};
