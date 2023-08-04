import type { Meta } from "@storybook/react"

import { RemoveButton } from "./RemoveButton"
import { ControllerContext } from "../../ControllerContext"
import { page1 } from "../../example_data/base_config"

const meta = {
  title: "Atoms/RemoveButton",
  component: RemoveButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RemoveButton>

export default meta

export const EditMode = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: true }}>
      <RemoveButton target={page1} />
    </ControllerContext.Provider>
  )
}

export const NotEditMode = () => {
  return (
    // @ts-ignore
    <ControllerContext.Provider value={{ isEditMode: false }}>
      <RemoveButton target={page1} />
    </ControllerContext.Provider>
  )
}
