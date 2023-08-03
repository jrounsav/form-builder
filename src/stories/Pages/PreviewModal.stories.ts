import type { Meta, StoryObj } from "@storybook/react"

import { PreviewModal } from "./PreviewModal"
import { form1 } from "../../example_data/base_config"

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
    form: form1,
    adapters: [
      { name: "Form Builder", id: "builder" },
      { name: "JSON Forms", id: "jsonforms" },
    ],
    onSelectAdapter: console.log,
  },
}
