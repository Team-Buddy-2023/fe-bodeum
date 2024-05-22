import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { GetCommunity } from "@/types/community";
import communityState from "@/recoil/atom/communityAtom";
import boardDetailState from "@/recoil/atom/boardDetailAtom";
import styles from "../styles/community.module.scss";
import LinkComponents from "@/components/Link";

interface Props {
  closePopup: () => void;
}
const CHARACTER = [
  {
    name: "토비",
    src: "/images/ch_tobi.png",
    info: "따뜻한 마음을 지닌 활발한 토비 당신에게 즐거운 웃음과 감동을 전해 밝게 비춰드릴게요",
  },
  {
    name: "마이로",
    src: "/images/ch_myro.png",
    info: "이성적이면서 현실적인 판단을 당신에게 전달해드릴 똑똑한 조언자 마이로에요",
  },
  {
    name: "루미나",
    src: "/images/ch_rumina.png",
    info: "감성적이고 창의적인 루미나 당신이 예상치 못한 답변으로 감동을 전달해드릴게요",
  },
  {
    name: "블리",
    src: "/images/ch_bly.png",
    info: "누구에게나 사랑을 전달하며 온 세상을 따뜻하게 만드는 블리 당신에게 희망을 드릴게요",
  },
];
function BoardDetail({ closePopup }: Props) {
  const BOARD = useRecoilValue(communityState);
  const BOARDID = useRecoilValue(boardDetailState);
  const BOARDDETAIL = BOARD.filter(
    (val: GetCommunity) => val.chatId === BOARDID,
  );
  console.log(BOARD, BOARDID, BOARDDETAIL);
  const [board, setBoard] = useState([
    {
      nickname: "",
      comment: "",
      dateTime: "",
      answer: "",
      fluffyName: "",
      userId: 0,
    },
  ]);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    setBoard(BOARDDETAIL);
  }, [BOARDID]);

  const handleOpen = (chatId: string) => {
    setOpen(open === chatId ? null : chatId);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>
        <div className={styles.finish} role="none" onClick={closePopup}>
          <img src="/images/x.svg" alt="x" />
        </div>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src="/images/userIcon.svg" alt="userIcon" />
            <div className={styles.nickName}>{board[0].nickname}</div>
            <div className={styles.date}>{board[0].dateTime}</div>
          </div>
          <div
            className={styles.dots}
            onClick={() => handleOpen(String(BOARDID))}
            role="none"
          >
            <img src="/images/threeDots.svg" alt="threeDots" />
          </div>
        </div>
        <div className={styles.commentBox}>{board[0].comment}</div>
        <div className={styles.whiteBox}>
          <img className={styles.bg} src="/images/main_bg.png" alt="bg" />
          <p>{board[0].answer}</p>
          {board[0].fluffyName === "토비" ? (
            <img
              className={styles.character}
              src="/images/ch_tobi.png"
              alt="character"
            />
          ) : board[0].fluffyName === "마이로" ? (
            <img
              className={styles.character}
              src="/images/ch_myro.png"
              alt="character"
            />
          ) : board[0].fluffyName === "루미나" ? (
            <img
              className={styles.character}
              src="/images/ch_rumina.png"
              alt="character"
            />
          ) : board[0].fluffyName === "블리" ? (
            <img
              className={styles.character}
              src="/images/ch_bly.png"
              alt="character"
            />
          ) : null}
        </div>
        {open === String(BOARDID) && (
          <LinkComponents
            handleOpen={handleOpen}
            chatId={BOARDID}
            userId={BOARD[0].userId}
          />
        )}
      </div>
    </div>
  );
}

export default BoardDetail;
