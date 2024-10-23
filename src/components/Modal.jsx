import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

function Modal({ children, open, className = "", ...props }) {
  const dialogRef = useRef();

  useEffect(() => {    
    const modal = dialogRef.current;
    if (open) {
      modal.showModal();
    } else {
      modal.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialogRef} className={`modal ${className}`} {...props} >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
