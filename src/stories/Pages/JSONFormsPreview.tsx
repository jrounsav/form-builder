import React, { useState } from "react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { JsonForms } from "@jsonforms/react"
import { JsonSchema, UISchemaElement } from "@jsonforms/core"

interface JSONFormsPreview {
  schema?: JsonSchema
  uischema?: UISchemaElement
  data?: any
}

export function JSONFormsPreview({ schema, uischema, data }: JSONFormsPreview) {
  const [_data, setData] = useState(data)
  return (
    <div className="App">
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={_data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, errors }) => setData(data)}
      />
    </div>
  )
}
