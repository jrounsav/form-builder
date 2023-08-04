import { createContext } from "react"
import { EntityType, QuestionType } from "./types"
import { form1 } from "./example_data/base_config"

export const ControllerContext = createContext({
  isPreview: false,
  previewForm: form1,
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
