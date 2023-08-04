import type { Meta, StoryObj } from "@storybook/react"

import { Answer } from "./Answer"
import { QuestionType } from "../../types"
import { answer1 } from "../../example_data/base_config"

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
    answer: answer1,
    questionType: QuestionType.Multi,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}

export const Radio: Story = {
  args: {
    answer: answer1,
    questionType: QuestionType.Single,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}

export const TextInput: Story = {
  args: {
    answer: answer1,
    questionType: QuestionType.Text,
    checked: true,
    text: "Example text for a multi select option",
    onChange: () => null,
  },
}
