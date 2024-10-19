import { createPortal } from "react-dom";
import { useEffect, useRef, useContext } from "react";
import UserProgressContext from "../store/UserProgressContext";

function Modal({ children, open, className = "" }) {
  const {hideCart} = useContext(UserProgressContext);
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
    <dialog ref={dialogRef} className={`modal ${className}`} onClose={hideCart} >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
