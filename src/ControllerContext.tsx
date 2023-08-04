import { createContext } from "react"
import { EntityType, QuestionType } from "./types"

export const ControllerContext = createContext({
  isEditMode: false,
  activePage: 0,
  addEntity: (parentId: string, entityType: EntityType) => {},
  removeEntity: (id: string) => {},
  updateEntity: (targetId: string, text: string) => {},
  updateQuestionType: (targetId: string, text: QuestionType) => {},
  nextPage: () => {},
  prevPage: () => {},
  selectPage: (index: number) => {},
})
