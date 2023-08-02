export enum EntityType {
  Form,
  Page,
  Group,
  Question,
  Answer,
}

export enum QuestionType {
  Multi,
  Single,
  Text,
}

export interface FormEntity {
  id: string
  title?: string
  children?: FormEntity[]
  parentId?: string
  entityType: EntityType
}

export interface Form extends FormEntity {
  entityType: EntityType.Form
  children?: Page[]
}

export interface Page extends FormEntity {
  entityType: EntityType.Page
  children?: Group[]
}

export interface Group extends FormEntity {
  entityType: EntityType.Group
  children?: Question[]
}

export interface Question extends FormEntity {
  text: string
  questionType: QuestionType
  children: Answer[]
  entityType: EntityType.Question
}

export interface Answer extends FormEntity {
  text: string
  maxLength?: number
  entityType: EntityType.Answer
}
