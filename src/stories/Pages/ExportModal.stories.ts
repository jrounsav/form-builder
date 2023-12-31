import type { Meta, StoryObj } from "@storybook/react"

import { ExportModal } from "./ExportModal"
import { builderExport1 } from "../../example_data/base_config"
import { adapters } from "../../app/adapters"

const meta = {
  title: "Pages/ExportModal",
  component: ExportModal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExportModal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    formTitle: builderExport1.title,
    formExport: builderExport1,
    adapters,
    adapterId: adapters[0].id,
    onSelectAdapter: console.log,
  },
}
