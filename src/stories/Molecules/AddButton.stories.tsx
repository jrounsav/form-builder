import type { Meta, StoryObj } from "@storybook/react"

import { AddButton } from "./AddButton"
import { ControllerContext } from "../../ControllerContext"
import { EntityType } from "../../types"

const meta = {
  title: "Atoms/AddButton",
  component: AddButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AddButton>

export default meta

export const EditMode = () => {
  return (
    <ControllerContext.Provider value={{ isEditMode: true }}>
      <AddButton parentId="fake" type={EntityType.Form} />
    </ControllerContext.Provider>
  )
}

export const NotEditMode = () => {
  return (
    <ControllerContext.Provider value={{ isEditMode: false }}>
      <AddButton parentId="fake" type={EntityType.Form} />
    </ControllerContext.Provider>
  )
}
