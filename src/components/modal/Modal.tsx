import { createPortal } from "react-dom";
import css from "./Modal.module.css";

type ButtonProps = {
  text?: string;
  onClick: () => void;
};

type ModalProps = {
  content: React.ReactNode | string;
  acceptBtn: ButtonProps;
  closeBtn: ButtonProps;
};

const Modal: React.FC<ModalProps> = ({ content, acceptBtn, closeBtn }) => {
  return createPortal(
    <div className={css.modalOuter}>
      <div className={css.modalInner}>
        <div className={css.content}>{content}</div>
        <div className={css.footer}>
          <button onClick={closeBtn.onClick}>{closeBtn.text || "Close"}</button>
          <button onClick={acceptBtn.onClick}>{acceptBtn.text || "Accept"}</button>
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export default Modal;
