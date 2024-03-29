import React from "react";
import styles from "../styles/loading.module.scss";

function loading() {
  return (
    <div className={styles.background}>
      <div className={styles.loading}>
        <div className={styles.dots}>
          <div className={styles.droplet} />
          <div className={styles.droplet} />
          <div className={styles.droplet} />
        </div>
        <img src="/images/loading.svg" alt="loading" />
      </div>
      <div className={styles.character}>
        <img src="/images/character.svg" alt="character" />
      </div>
      <div className={styles.comment}>캐릭터 문구</div>
    </div>
  );
}

export default loading;
