import type { Meta, StoryObj } from "@storybook/react"

import { Page } from "./Page"
import { page1 } from "../example_data/base_config"

const meta = {
  title: "Organisms/Page",
  component: Page,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const OnePage: Story = {
  args: {
    page: page1,
  },
}
