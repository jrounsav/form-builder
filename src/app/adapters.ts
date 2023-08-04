import { Adapter, ExportType, Form, FormExport } from "../types"
import formBuilderAdapter from "./adapters/formbuilder"
import jsonFormsAdapter from "./adapters/jsonforms"

export interface AdapterMap {
  [ExportType.Builder]: Adapter
  [ExportType.JSONForms]: Adapter
}

const _adapters: AdapterMap = {
  [ExportType.Builder]: formBuilderAdapter,
  [ExportType.JSONForms]: jsonFormsAdapter,
}

export const adapters = Object.values(_adapters).map(
  (adapter: Adapter) => adapter,
)

export const formToExportConfig = (
  adapterId: ExportType,
  form: Form,
): FormExport => {
  return _adapters[adapterId].func(form)
}
