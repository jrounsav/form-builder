import type { Meta, StoryObj } from "@storybook/react"

import { ControllerContext } from "../../ControllerContext"
import { QuestionTypeDropdown } from "./QuestionTypeDropdown"
import { radioQuestion1, multiQuestion1 } from "../../example_data/base_config"

const meta = {
  title: "Molecules/QuestionTypeDropdown",
  component: QuestionTypeDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof QuestionTypeDropdown>

export default meta

export const Default = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: true }}>
      <QuestionTypeDropdown question={multiQuestion1} />
    </ControllerContext.Provider>
  )
}

export const Radio = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: true }}>
      <QuestionTypeDropdown question={radioQuestion1} />
    </ControllerContext.Provider>
  )
}

export const NoEdit = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: false }}>
      <QuestionTypeDropdown question={radioQuestion1} />
    </ControllerContext.Provider>
  )
}
