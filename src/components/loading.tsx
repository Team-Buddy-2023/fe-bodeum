import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import characterSelector from "@/recoil/selector/characterSelector";
import styles from "../styles/loading.module.scss";
import Dots from "./Dots";

function loading() {
  const CHARACTERSTATUS = useRecoilValue(characterSelector);
  const [imgNum, setImgNum] = useState(0);
  useEffect(() => {
    setImgNum(CHARACTERSTATUS);
  }, [CHARACTERSTATUS]);
  return (
    <div className={styles.background}>
      <div className={styles.loading}>
        <div className={styles.dotBox}>
          <Dots />
        </div>
        <img src="/images/loading.svg" alt="loading" />
      </div>
      <div className={styles.character}>
        <img src={`/images/character${imgNum}.svg`} alt="character" />
      </div>
      <div className={styles.comment}>캐릭터 문구</div>
    </div>
  );
}

export default loading;
