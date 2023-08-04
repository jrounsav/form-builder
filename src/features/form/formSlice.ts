import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import {
  Answer,
  EntityType,
  FormEntity,
  Form as FormTS,
  Question,
  QuestionType,
} from "../../types"
import {
  makeFormId,
  insertFormEntity,
  removeFormEntityAndSetPage,
  updateFormEntity,
  updateQuestionType as updateQuestionTypeUtil,
} from "../../utils"

export interface FormState {
  forms: FormTS[]
  activeFormIndex: number
  activePageIndex: number
}

const initialState: FormState = {
  forms: [],
  activeFormIndex: 0,
  activePageIndex: 0,
}

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextForm: (state) => {
      if (state.activeFormIndex < state.forms.length - 1) {
        state.activeFormIndex += 1
      }
      state.activePageIndex = 0
    },
    prevForm: (state) => {
      if (state.activeFormIndex > 0) {
        state.activeFormIndex -= 1
      }
      state.activePageIndex = 0
    },
    nextPage: (state) => {
      const { forms, activeFormIndex, activePageIndex } = state
      const targetForm = forms[activeFormIndex]

      if (
        targetForm.children &&
        activePageIndex < targetForm.children.length - 1
      ) {
        state.activePageIndex += 1
      }
    },
    prevPage: (state) => {
      if (state.activePageIndex > 0) {
        state.activePageIndex -= 1
      }
    },
    selectPage: (state, action: PayloadAction<number>) => {
      state.activePageIndex = action.payload - 1
    },
    addForm: (state) => {
      const id = makeFormId()
      const form: FormTS = {
        id,
        title: "",
        children: [],
        entityType: EntityType.Form,
      }

      state.forms = [...state.forms, form]
    },
    addEntity: (
      state,
      action: PayloadAction<{ parentId: string; entityType: EntityType }>,
    ) => {
      const { parentId, entityType } = action.payload

      const id = makeFormId()
      let entity: FormEntity = {
        id,
        title: "",
        children: [],
        entityType,
      }

      switch (entityType) {
        case EntityType.Form:
        case EntityType.Page:
        case EntityType.Group:
          entity = {
            id,
            title: "",
            children: [],
            entityType,
          }
          break
        case EntityType.Question:
        case EntityType.Answer:
          entity = {
            id,
            text: "",
            children: [],
            questionType: QuestionType.Multi,
            entityType,
          } as Answer | Question
          break
      }

      insertFormEntity(state.forms || [], parentId, entity)
    },
    /** This is awfully convoluted */
    removeEntity: (state, action: PayloadAction<string>) => {
      const { forms, activeFormIndex } = state
      const targetForm = forms[activeFormIndex]

      const id = action.payload

      if (targetForm.id === id) {
        state.forms = state.forms.filter((form) => form.id !== id)
        activatePrevForm(state)
      } else {
        state.forms = state.forms.map((form) => {
          if (form.id !== targetForm.id) {
            return form
          } else {
            const children = !!form.children
              ? [...removeFormEntityAndSetPage(form.children, id, state)]
              : form.children

            return {
              ...form,
              children,
            }
          }
        })
      }
    },
    updateEntity: (
      state,
      action: PayloadAction<{ targetId: string; text: string }>,
    ) => {
      const { targetId, text } = action.payload
      state.forms = updateFormEntity(state.forms, targetId, text)
    },
    updateQuestionType: (
      state,
      action: PayloadAction<{ targetId: string; questionType: QuestionType }>,
    ) => {
      const { targetId, questionType } = action.payload
      state.forms = updateQuestionTypeUtil(state.forms, targetId, questionType)
    },
  },
})

export const activatePrevForm = (state: FormState) => {
  const index = state.activeFormIndex
  if (index > 0) {
    state.activeFormIndex -= 1
  }
  state.activePageIndex = 0
}

export const {
  addForm,
  nextForm,
  prevForm,
  addEntity,
  removeEntity,
  nextPage,
  prevPage,
  selectPage,
  updateEntity,
  updateQuestionType,
} = formSlice.actions

export const selectForm = (state: RootState) => {
  const { forms, activeFormIndex } = state.form
  return forms[activeFormIndex]
}

export const selectForms = (state: RootState) => {
  const { forms } = state.form
  return forms
}

export const selectActiveFormIndex = (state: RootState) => {
  const { activeFormIndex } = state.form
  return activeFormIndex
}

export const selectActivePageIndex = (state: RootState) => {
  const { activePageIndex } = state.form
  return activePageIndex
}

export default formSlice.reducer
