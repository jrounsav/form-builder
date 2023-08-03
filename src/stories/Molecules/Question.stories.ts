import type { Meta, StoryObj } from "@storybook/react"

import { Question } from "./Question"
import { EntityType, QuestionType } from "../../types"
import { answer1, answer2, answer3 } from "../../example_data/base_config"

const meta = {
  title: "Molecules/Question",
  component: Question,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Question>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {
  args: {
    question: {
      id: "questionIdExample",
      text: "This is my question text",
      questionType: QuestionType.Single,
      children: [answer1, answer2, answer3],
      entityType: EntityType.Question,
    },
    onChange: () => null,
  },
}

export const Multiselect: Story = {
  args: {
    question: {
      id: "questionIdExample",
      text: "This is my question text",
      questionType: QuestionType.Multi,
      children: [answer1, answer2, answer3],
      entityType: EntityType.Question,
    },
    onChange: () => null,
  },
}

export const Textinput: Story = {
  args: {
    question: {
      id: "questionIdExample",
      text: "A question to answer please.",
      questionType: QuestionType.Text,
      children: [answer1, answer2, answer3],
      entityType: EntityType.Question,
    },
    onChange: () => null,
  },
}
