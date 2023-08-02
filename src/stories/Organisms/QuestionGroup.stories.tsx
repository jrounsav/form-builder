import type { Meta, StoryObj } from "@storybook/react"

import { QuestionGroup } from "./QuestionGroup"
import { group1, group2 } from "../example_data/base_config"

const meta = {
  title: "Organisms/QuestionGroup",
  component: QuestionGroup,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof QuestionGroup>

export default meta
type Story = StoryObj<typeof meta>

export const AllRadios: Story = {
  args: {
    questionGroup: group1,
  },
}

export const MultiPlusText: Story = {
  args: {
    questionGroup: group2,
  },
}
