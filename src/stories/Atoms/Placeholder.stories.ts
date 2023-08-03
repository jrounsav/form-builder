import type { Meta, StoryObj } from "@storybook/react"

import { Placeholder } from "./Placeholder"

const meta = {
  title: "Atoms/Placeholder",
  component: Placeholder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Placeholder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    height: "100px",
    invertGradient: false,
  },
}

export const ToLeft: Story = {
  args: {
    invertGradient: true,
  },
}

export const CustomHeight: Story = {
  args: {
    height: "50px",
    invertGradient: false,
  },
}
