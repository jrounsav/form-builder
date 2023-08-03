import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import {
  Answer,
  EntityType,
  FormEntity,
  Form as FormTS,
  Question,
  QuestionType,
} from "../../types"
import { form1, form2 } from "../../example_data/base_config"
import { makeFormId, insertFormEntity, removeFormEntity } from "../../utils"

interface FormState {
  forms: FormTS[]
  activeFormIndex: number
  activePageIndex: number
}

const initialState: FormState = {
  forms: [form1, form2],
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
        title: `${EntityType.Form} ${id}`,
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
        title: `${entityType} ${id}`,
        children: [],
        entityType,
      }

      switch (entityType) {
        case EntityType.Form:
        case EntityType.Page:
        case EntityType.Group:
          entity = {
            id,
            title: `${entityType} ${id}`,
            children: [],
            entityType,
          }
          break
        case EntityType.Question:
        case EntityType.Answer:
          entity = {
            id,
            text: `${entityType} ${id}`,
            children: [],
            questionType: QuestionType.Multi,
            entityType,
          } as Answer | Question
          break
      }

      insertFormEntity(state.forms || [], parentId, entity)
    },
    removeEntity: (state, action: PayloadAction<string>) => {
      const { forms, activeFormIndex } = state
      const targetForm = forms[activeFormIndex]

      const id = action.payload

      if (targetForm.id === id) {
        state.forms = state.forms.filter((form) => form.id !== id)
        /** TODO - this sucks */
        state.activeFormIndex = 0
        state.activePageIndex = 0
      } else {
        /** TODO - this sucks too */
        state.activePageIndex = 0
        state.forms = state.forms.map((form) => {
          if (form.id !== targetForm.id) {
            return form
          } else {
            const children = !!form.children
              ? [...removeFormEntity(form.children, id)]
              : form.children

            return {
              ...form,
              children,
            }
          }
        })
      }
    },
  },
})

export const {
  addForm,
  nextForm,
  prevForm,
  addEntity,
  removeEntity,
  nextPage,
  prevPage,
  selectPage,
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
