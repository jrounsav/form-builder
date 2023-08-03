import { createContext } from "react"
import { EntityType } from "./types"

export const ControllerContext = createContext({
  isEditMode: false,
  activePage: 0,
  addEntity: (parentId: string, entityType: EntityType) => {},
  removeEntity: (id: string) => {},
  nextPage: () => {},
  prevPage: () => {},
  selectPage: (index: number) => {},
})
