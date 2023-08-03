import type { Meta, StoryObj } from "@storybook/react"

import { Dashboard } from "./Dashboard"
import { form1, form2 } from "../../example_data/base_config"

const meta = {
  title: "Pages/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dashboard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    forms: [form1, form2],
    activeFormIndex: 0,
  },
}
