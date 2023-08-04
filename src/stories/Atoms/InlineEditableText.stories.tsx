import type { Meta } from "@storybook/react"

import { InlineEditableText } from "./InlineEditableText"
import { ControllerContext } from "../../ControllerContext"

const meta = {
  title: "Atoms/InlineEditableText",
  component: InlineEditableText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InlineEditableText>

export default meta

export const EditMode = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: true }}>
      <InlineEditableText targetId="fakeId" text="example starting text" />
    </ControllerContext.Provider>
  )
}

export const NotEditMode = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: false }}>
      <InlineEditableText targetId="fakeId" text="example starting text" />
    </ControllerContext.Provider>
  )
}
