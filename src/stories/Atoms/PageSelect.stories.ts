import type { Meta, StoryObj } from "@storybook/react"

import { PageSelect } from "./PageSelect"

const meta = {
  title: "Atoms/PageSelect",
  component: PageSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageSelect>

export default meta
type Story = StoryObj<typeof meta>

export const MultiPage: Story = {
  args: {
    count: 20,
    target: 1,
    handleBack: () => null,
    handleForward: () => null,
    handleSelect: () => null,
  },
}

export const NoPages: Story = {
  args: {
    count: 0,
    target: 1,
    handleBack: () => null,
    handleForward: () => null,
    handleSelect: () => null,
  },
}
