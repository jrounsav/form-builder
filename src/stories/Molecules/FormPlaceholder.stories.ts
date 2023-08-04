import type { Meta, StoryObj } from "@storybook/react"

import { FormPlaceholder } from "./FormPlaceholder"

const meta = {
  title: "Molecules/FormPlaceholder",
  component: FormPlaceholder,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof FormPlaceholder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isInverted: false,
    onClick: () => console.log("Hit"),
  },
}

export const Left: Story = {
  args: {
    isInverted: true,
  },
}

export const Hidden: Story = {
  args: {
    isHidden: false,
  },
}
