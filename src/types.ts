export enum EntityType {
  Form = "form",
  Page = "page",
  Group = "group",
  Question = "question",
  Answer = "answer",
}

export enum QuestionType {
  Multi = "multi",
  Single = "single",
  Text = "text",
}

export enum ExportType {
  Builder = "formbuilder",
  JSONForms = "jsonforms",
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

export interface FormExport {
  config: string
  title: string
  type: ExportType
}
