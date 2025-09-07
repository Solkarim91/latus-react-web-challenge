import type { Meta, StoryObj } from "@storybook/react";
import { InfoCard, InfoDisplay } from "./info-display";
import mockData from "../../../assets/data/mock-component-data.json";

const meta = {
    title: "InfoDisplay/InfoDisplay",
    component: InfoDisplay,
    decorators: [
        (Story) => (
        <div style={{ padding: 16 }}>
            <Story />
        </div>
        ),
    ],
} satisfies Meta<typeof InfoDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <InfoDisplay />,
};

export const SingleCard: Story = {
    render: () => (
        <div style={{ maxWidth: 400 }}>
            <h3>Single Example</h3>
            <div style={{ marginTop: 16 }}>
                <InfoCard data={mockData.data[0]} index={0} />
            </div>
        </div>
    ),
};
