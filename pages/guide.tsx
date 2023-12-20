import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/chat.module.scss";

function guide() {
  const [number, setNumber] = useState(0);
  const router = useRouter();
  const handleCount = () => {
    if (number !== 2) {
      setNumber(number + 1);
    } else {
      router.push("/chat");
    }
  };
  return (
    <div role="none" onClick={handleCount}>
      <div className={styles.black}>
        <div className={styles.container}>
          <div className={styles.box}>
            {number === 0 ? (
              <>
                <div className={styles.message}>
                  <p>마음에 드는 답변을 저장할 수 있어요</p>
                </div>
                <div className={styles.spring}>
                  <img src="/spring.svg" alt="spring" />
                </div>
                <div className={styles.scrap}>
                  <img src="/scrap.svg" alt="scrap" />
                </div>
              </>
            ) : null}
            {number === 1 ? (
              <>
                <div className={styles.top}>
                  <img src="/arrow.svg" alt="arrow" />
                  <button type="button">펼치기</button>
                </div>
                <div className={styles.spring2}>
                  <img src="/spring2.svg" alt="spring2" />
                </div>
                <div className={styles.message2}>
                  <p>이전 대화 내용을 볼 수 있어요</p>
                </div>
              </>
            ) : null}
            <div className={styles.text}>
              <p>
                안녕 나는 토비야. 너의 가치와 우선순위를 고려해보는 게 중요해.
                미래에 후회하지 않기 위해서는 본인의 목표와 가치에 맞는 선택을
                하면 돼. 다양한 가능성을 탐색하고 네 직감에 따라 결정해봐.
                중요한 건 네가 마음으로 편안하고 확신 있는 결정을 내릴 수 있게
                하는 거야. 힘내 친구야...
              </p>
            </div>
            {number === 2 ? (
              <>
                <div className={styles.top} />
                <div className={styles.input}>
                  <input type="text" placeholder="내용을 입력해주세요" />
                  {/* <input name="text" value={text} onChange={onInputChange} /> */}
                  <div>
                    <img className={styles.send} src="/send.svg" alt="send" />
                  </div>
                </div>
                <div className={styles.spring3}>
                  <img src="/spring3.svg" alt="spring3" />
                </div>
                <div className={styles.message3}>
                  <p>위아래로 스크롤 해 내용을 볼 수 있어요</p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.backdrop}>
          <div className={styles.character}>
            <img src="/character.svg" alt="character" />
          </div>
          <div className={styles.container}>
            <div className={styles.box}>
              <div className={styles.scrap}>
                <img src="/scrap.svg" alt="scrap" />
              </div>
              <div className={styles.name}>
                <p>토비</p>
              </div>
              <div className={styles.top}>
                <img src="/arrow.svg" alt="arrow" />
                <button type="button">펼치기</button>
              </div>
              <div className={styles.text}>
                <p>
                  안녕 나는 토비야. 너의 가치와 우선순위를 고려해보는 게 중요해.
                  미래에 후회하지 않기 위해서는 본인의 목표와 가치에 맞는 선택을
                  하면 돼. 다양한 가능성을 탐색하고 네 직감에 따라 결정해봐.
                  중요한 건 네가 마음으로 편안하고 확신 있는 결정을 내릴 수 있게
                  하는 거야. 힘내 친구야...
                </p>
              </div>
              <div className={styles.input}>
                <input type="text" placeholder="내용을 입력해주세요" />
                {/* <input name="text" value={text} onChange={onInputChange} /> */}
                <div role="none">
                  <img className={styles.send} src="/send.svg" alt="send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default guide;
