import type { Meta, StoryObj } from "@storybook/react"

import { PreviewModal } from "./PreviewModal"
import { builderExport1 } from "../../example_data/base_config"
import { adapters } from "../../app/adapters"

const meta = {
  title: "Pages/PreviewModal",
  component: PreviewModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PreviewModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formExport: builderExport1,
    adapters: adapters,
    onSelectAdapter: console.log,
  },
}
