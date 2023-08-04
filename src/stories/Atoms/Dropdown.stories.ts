import type { Meta, StoryObj } from "@storybook/react"

import { Dropdown } from "./Dropdown"

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fillerText: "Select something please",
    options: [{ name: "Human Readable name", id: "idToMatch" }],
    onSelect: console.log,
  },
}

export const WithStartingOption: Story = {
  args: {
    fillerText: "Select something please",
    options: [{ name: "Human Readable name", id: "idToMatch" }],
    selectedId: "idToMatch",
    onSelect: console.log,
  },
}
