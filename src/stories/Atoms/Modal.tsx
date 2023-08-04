import { ReactNode } from "react"
import "./modal.css"
import { Button } from "./Button"

interface ModalProps {
  isOpen: boolean
  children: ReactNode
  close: () => void
}

export const Modal = ({ isOpen, close, children }: ModalProps) => {
  if (!isOpen) return null

  function handleForegroundClick(e: any) {
    e.stopPropagation()
  }

  return (
    <div className="modal" onClick={close}>
      <div onClick={handleForegroundClick} className="modal-content">
        {children}
        <Button primary label="Close" onClick={close} />
      </div>
    </div>
  )
}
