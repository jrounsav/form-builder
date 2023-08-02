import type { Meta, StoryObj } from "@storybook/react"

import { Page } from "./Dashboard"
import { page1 } from "../example_data/base_config"

const meta = {
  title: "Pages/Dashboard",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOut: Story = {}

export const OnePage: Story = {
  args: {
    questionGroup: page1,
  },
}
