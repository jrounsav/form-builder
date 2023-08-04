import { useContext, useState } from "react"
import { ControllerContext } from "../ControllerContext"

const useController = () => {
  const {
    // Preview attr
    isPreview,
    previewForm,

    // Normal attr
    isEditMode,
    addEntity,
    removeEntity,
    updateEntity,
    updateQuestionType,
    nextPage,
    prevPage,
    selectPage,
    activePage,
  } = useContext(ControllerContext)

  const [previewPageIndex, setPreviewPage] = useState(0)
  const previewNextPage = () => {
    if (
      previewForm &&
      previewForm.children &&
      previewPageIndex < previewForm.children.length - 1
    ) {
      setPreviewPage((prev) => (prev += 1))
    }
  }
  const previewPrevPage = () => {
    if (previewPageIndex > 0) {
      setPreviewPage((prev) => (prev -= 1))
    }
  }
  const previewSelectPage = (index: number) => {
    setPreviewPage(index - 1)
  }

  return {
    activePage: isPreview ? previewPageIndex : activePage,
    addEntity,
    isEditMode,
    removeEntity,
    updateEntity,
    nextPage: isPreview ? previewNextPage : nextPage,
    prevPage: isPreview ? previewPrevPage : prevPage,
    selectPage: isPreview ? previewSelectPage : selectPage,
    updateQuestionType,
  }
}

export default useController
