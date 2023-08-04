import { ExportType, Form, FormExport } from "../types"

export interface AdapterInfo {
  name: string
  id: string
}

export const adapters = [{ name: "Builder", id: ExportType.Builder }]

export const generateBuilderConfig = (form: Form): FormExport => {
  return {
    config: JSON.stringify(form),
    title: form.title || "",
    type: ExportType.Builder,
  }
}
