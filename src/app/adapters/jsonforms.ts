import { ExportType, Form, FormExport } from "../../types"

// Update this for each adapter
const type = ExportType.JSONForms
const friendlyTypeName = "JSON Forms"

/**
 * Convert builder JSON to other config
 *
 * TODO - - -
 */
const _toConfig = (form: Form) => JSON.stringify(form)

const adapterFunc = (form: Form): FormExport => {
  return {
    config: _toConfig(form),
    title: form.title || "",
    type,
  }
}

const adapter = {
  name: friendlyTypeName,
  id: type,
  func: adapterFunc,
}

export default adapter
