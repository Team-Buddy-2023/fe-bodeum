import React from "react";
import styles from "../styles/ModalChatExit.module.scss";

interface ModalChatProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  button1: string;
  button2: string;
}
function ModalExit({ setModalOpen, text, button1, button2 }: ModalChatProps) {
  const onSetModal = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <div className={styles.buttonWrap}>
        <button className={styles.button1} type="button" onClick={onSetModal}>
          {button1}
        </button>
        <button className={styles.button2} type="button">
          {button2}
        </button>
      </div>
    </div>
  );
}

export default ModalExit;
