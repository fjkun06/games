import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Card> = {
  title: "Games/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Jackpot: Story = {
  args: {
    isJackpot: true,
  },
};

export const New: Story = {
  args: { ribbonType: "new" },
};
export const JackpotNew: Story = {
  args: { isJackpot: true, ribbonType: "new" },
};

export const Top: Story = {
  args: { ribbonType: "top" },
};
export const JackpotTop: Story = {
  args: { isJackpot: true, ribbonType: "top" },
};
