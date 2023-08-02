import type { Meta, StoryObj } from "@storybook/react"

import { Form } from "./Form"
import { form1 } from "../example_data/base_config"

const meta = {
  title: "Organisms/Form",
  component: Form,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Form>

export default meta
type Story = StoryObj<typeof meta>

export const OneForm: Story = {
  args: {
    form: form1,
  },
}
