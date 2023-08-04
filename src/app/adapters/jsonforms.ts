import {
  ExportType,
  Form,
  FormExport,
  Group,
  Page,
  QuestionType,
} from "../../types"
import {
  Category,
  GroupLayout,
  JsonSchema,
  LabelElement,
} from "@jsonforms/core"

const type = ExportType.JSONForms
const friendlyTypeName = "JSON Forms"

const _toConfig = (form: Form) => {
  let schema: JsonSchema = { type: "object", properties: {} }
  let uischema: any = { type: "VerticalLayout", elements: [] }
  const data = {}

  if (form?.children?.length) {
    uischema = {
      ...uischema,
      type: "Categorization",
      options: {
        variant: "stepper",
        showNavButtons: true,
      },
    }

    form.children.forEach((page: Page) => {
      const uicategory: Category = {
        type: "Category",
        label: page?.title || "",
        elements: [],
      }

      if (page?.children?.length) {
        page.children.forEach((group: Group) => {
          const uigroup: GroupLayout = {
            type: "Group",
            label: group.title,
            elements: [],
          }

          if (group?.children?.length) {
            group.children.forEach((question) => {
              switch (question.questionType) {
                case QuestionType.Multi:
                  if (question?.text) {
                    const label: LabelElement = {
                      type: "Label",
                      text: question.text,
                    }
                    uigroup.elements.push(label)
                  }
                  if (question.children.length) {
                    question.children.forEach((answer) => {
                      const schemactrl = {
                        type: "boolean",
                      }
                      const uicontrol = {
                        type: "Control",
                        scope: `#/properties/${answer.id}`,
                        label: answer.text,
                      }
                      schema.properties![answer.id] = schemactrl
                      uigroup.elements.push(uicontrol)
                    })
                  }
                  break
                case QuestionType.Single:
                  if (question.children.length) {
                    const schemactrl = {
                      type: "string",
                      enum: question?.children
                        ? question.children.map(
                            (answer) => answer.text || answer.id,
                          )
                        : [],
                    }

                    const uicontrol = {
                      type: "Control",
                      scope: `#/properties/${question.id}`,
                      ...(question?.text && { label: question.text }),
                      options: {
                        format: "radio",
                      },
                    }

                    schema.properties![question.id] = schemactrl
                    uigroup.elements.push(uicontrol)
                  }
                  break
                case QuestionType.Text:
                  const schemactrl = {
                    type: "string",
                  }
                  const uicontrol = {
                    type: "Control",
                    scope: `#/properties/${question.id}`,
                    label: question.text,
                    options: {
                      multi: true,
                    },
                  }
                  schema.properties![question.id] = schemactrl
                  uigroup.elements.push(uicontrol)
              }
            })
          }

          uicategory.elements.push(uigroup)
        })
      }
      uischema.elements.push(uicategory)
    })
  }

  return JSON.stringify({ schema, uischema, data })
}

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
