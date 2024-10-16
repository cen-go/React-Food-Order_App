import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <dialog className="modal" open>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
