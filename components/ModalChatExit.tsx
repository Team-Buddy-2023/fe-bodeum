import React from "react";
import styles from "../styles/ModalChatExit.module.scss";

function ModalChatExit() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>대화를 끝낼까요?</div>
      <div className={styles.buttonWrap}>
        <button className={styles.button1} type="button">
          돌아가기
        </button>
        <button className={styles.button2} type="button">
          끝내기
        </button>
      </div>
    </div>
  );
}

export default ModalChatExit;
