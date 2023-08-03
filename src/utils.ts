import { FormEntity } from "./types"

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

export function removeFormEntity(arr: any[], value: any) {
  const filteredArr = []

  for (const item of arr) {
    if (item.id !== value) {
      if (Array.isArray(item.children)) {
        item.children = removeFormEntity(item.children, value)
      }
      filteredArr.push(item)
    }
  }

  return filteredArr
}
