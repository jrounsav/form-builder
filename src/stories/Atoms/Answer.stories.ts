import type { Meta, StoryObj } from "@storybook/react"

import { Answer } from "./Answer"
import { QuestionType } from "../../types"

const meta = {
  title: "Atoms/Answer",
  component: Answer,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Answer>

export default meta
type Story = StoryObj<typeof meta>

export const Multiselect: Story = {
  args: {
    questionType: QuestionType.Multi,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}

export const Radio: Story = {
  args: {
    questionType: QuestionType.Single,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}

export const TextInput: Story = {
  args: {
    questionType: QuestionType.Text,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}
