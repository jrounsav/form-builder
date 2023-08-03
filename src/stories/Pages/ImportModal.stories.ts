import type { Meta, StoryObj } from "@storybook/react"

import { ImportModal } from "./ImportModal"

const meta = {
  title: "Pages/ImportModal",
  component: ImportModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImportModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
