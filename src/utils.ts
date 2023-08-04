import { FormState } from "./features/form/formSlice"
import { EntityType, FormEntity, QuestionType } from "./types"

export function randomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters[randomIndex]
  }

  return result
}

export function makeFormId(): string {
  return randomString(10).toLowerCase()
}

export function insertFormEntity(arr: any[], id: string, entity: FormEntity) {
  for (const item of arr) {
    if (item.id === id) {
      item.children.push(entity)
    } else {
      if (Array.isArray(item.children)) {
        item.children = insertFormEntity(item.children, id, entity)
      }
    }
  }
  return arr
}

export function updateFormEntity(arr: any[], id: string, text: string) {
  for (const item of arr) {
    if (item.id === id) {
      switch (item.entityType) {
        case EntityType.Form:
        case EntityType.Page:
        case EntityType.Group:
          item.title = text
          break
        case EntityType.Question:
        case EntityType.Answer:
          item.text = text
          break
      }
    } else {
      if (Array.isArray(item.children)) {
        item.children = updateFormEntity(item.children, id, text)
      }
    }
  }
  return arr
}

export function updateQuestionType(
  arr: any[],
  id: string,
  questionType: QuestionType,
) {
  for (const item of arr) {
    if (item.id === id) {
      switch (item.entityType) {
        case EntityType.Question:
          item.questionType = questionType
          break
        case EntityType.Form:
        case EntityType.Page:
        case EntityType.Group:
        case EntityType.Answer:
        default:
      }
    } else {
      if (Array.isArray(item.children)) {
        item.children = updateQuestionType(item.children, id, questionType)
      }
    }
  }
  return arr
}

export function removeFormEntityAndSetPage(
  arr: any[],
  value: any,
  state: FormState,
) {
  const filteredArr = []

  for (const item of arr) {
    if (item.id !== value) {
      if (Array.isArray(item.children)) {
        item.children = removeFormEntityAndSetPage(item.children, value, state)
      }
      filteredArr.push(item)
    } else {
      /**
       * nesting state mgmt like this is bad practice.
       * Using this here to easily get the removed entity type
       * which allows the system to determine whether the page
       * values need to be reset.
       *
       * This should be merged with the formSlice form removal logic
       * to also enable resetting the forms page rather than have two
       * branches
       */
      const canBack = state.activePageIndex > 0
      const shouldBack = item.entityType === EntityType.Page

      if (canBack && shouldBack) {
        state.activePageIndex -= 1
      }
    }
  }

  return filteredArr
}
