"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import characterSelector from "@/recoil/selector/characterSelector";
import charactersSelector from "@/recoil/selector/charactersSelector";
import styles from "../../styles/chat.module.scss";
import ModalExit from "../../components/ModalExit";
import MODAL from "../../constants/Modal";
import useChat from "@/hooks/useChat";

interface JSONDATA {
  id: number;
  type: number;
  content: string;
}
function chat() {
  const [text, setText] = useState<string>("");
  // const [text, onInputChange, resetInput] = useInput({ text: "" });
  const [message, setMessages] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const datas = require("../../data/Chat.json");

  const CHARACTERSTATUS = useRecoilValue(characterSelector);
  const CHARACTERSSTATUS = useRecoilValue(charactersSelector);

  const id = CHARACTERSTATUS ? CHARACTERSTATUS - 1 : 1;
  const character = CHARACTERSSTATUS[id];

  const defaultMessage = `안녕 나는 ${character?.name}야. 만나서 반가워. 무슨 고민이 있어서 왔니?`;
  // api 통신
  const { refetch } = useChat(id, text);
  // x 아이콘 클릭 시 모달 open
  const ExitClick = () => {
    setModalOpen(!modalOpen);
  };
  const handleClick2 = () => {
    try {
      // 입력한 텍스트를 메시지 목록에 추가
      if (message.length === 0) {
        setMessages([text]);
      } else {
        setMessages([...message, text]);
      }
      // 입력 필드 초기화
      setText("");
      console.log("set", message);
    } catch (error) {
      alert(error);
    }
  };
  // 채팅창 펼치기
  const handleOpen = () => {
    console.log("open");
    setOpen(!open);
  };
  // 채팅 글쓰기
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className={styles.finish} role="none" onClick={ExitClick}>
        <img src="/images/x.svg" alt="x" />
      </div>
      {modalOpen && (
        <div className={styles.modalBackground}>
          <ModalExit
            setModalOpen={setModalOpen}
            text={MODAL.CHAT_EXIT.TEXT}
            button1={MODAL.CHAT_EXIT.BUTTON1}
            button2={MODAL.CHAT_EXIT.BUTTON2}
          />
        </div>
      )}
      <div className={styles.background}>
        <div className={styles.backdrop}>
          {open ? (
            <div className={styles.container2}>
              <div className={styles.box2}>
                <div className={styles.top}>
                  <img src="/images/arrow.svg" alt="arrow" />
                  <button onClick={handleOpen} type="button">
                    접기
                  </button>
                </div>
                <div className={styles.msgBox}>
                  {datas?.map((msg: JSONDATA, idx: number) => (
                    <div key={idx}>
                      {msg.type === 0 ? (
                        <div className={styles.msgType0}>
                          <span>{msg.content}</span>
                        </div>
                      ) : (
                        <div className={styles.msgType1}>
                          <span>{msg.content}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className={styles.input}>
                  <input
                    type="text"
                    value={text}
                    onChange={onChange}
                    placeholder="내용을 입력해주세요"
                  />
                  {/* <input name="text" value={text} onChange={onInputChange} /> */}
                  <div role="none" onClick={handleClick2}>
                    <img
                      className={styles.send}
                      src="/images/send.svg"
                      alt="send"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.container}>
              <div className={styles.box}>
                <div className={styles.character}>
                  <img
                    src={`/images/character${CHARACTERSTATUS}.svg`}
                    alt="character"
                  />
                </div>
                <div className={styles.scrap}>
                  <img src="/images/scrap.svg" alt="scrap" />
                </div>
                <div className={styles.name}>
                  <p>토비</p>
                </div>
                <div className={styles.top}>
                  <img src="/images/arrow.svg" alt="arrow" />
                  <button onClick={handleOpen} type="button">
                    펼치기
                  </button>
                </div>
                <div className={styles.text}>
                  <p>{defaultMessage}</p>
                </div>
                <div className={styles.input}>
                  <input
                    type="text"
                    value={text}
                    onChange={onChange}
                    placeholder="내용을 입력해주세요"
                  />
                  {/* <input name="text" value={text} onChange={onInputChange} /> */}
                  <div role="none" onClick={() => refetch}>
                    <img
                      className={styles.send}
                      src="/images/send.svg"
                      alt="send"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default chat;
