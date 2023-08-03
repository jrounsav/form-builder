import { useContext } from "react"
import { ControllerContext } from "../ControllerContext"

const useController = () => {
  const {
    isEditMode,
    addEntity,
    removeEntity,
    nextPage,
    prevPage,
    selectPage,
    activePage,
  } = useContext(ControllerContext)

  return {
    activePage,
    addEntity,
    isEditMode,
    removeEntity,
    nextPage,
    prevPage,
    selectPage,
  }
}

export default useController
