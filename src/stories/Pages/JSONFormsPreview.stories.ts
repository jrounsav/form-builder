import type { Meta, StoryObj } from "@storybook/react"
import { person } from "@jsonforms/examples"

import { JSONFormsPreview } from "./JSONFormsPreview"

const schema = person.schema
const uischema = person.uischema
const data = person.data

const meta = {
  title: "Pages/JSONFormsPreview",
  component: JSONFormsPreview,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof JSONFormsPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    schema,
    uischema,
    data,
  },
}
