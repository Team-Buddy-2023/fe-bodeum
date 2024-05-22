"use client";

import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSearchParams, useRouter } from "next/navigation";
import useCommunity from "@/hooks/useCommunity";
import communitySelector from "@/recoil/selector/communitySelector";
import styles from "../../styles/community.module.scss";
import Header from "@/components/header";
import BoardDetail from "@/components/board";
import boardDetailState from "@/recoil/atom/boardDetailAtom";

function communityShare() {
  const { isLoading, data } = useCommunity();
  const router = useRouter();
  const params = useSearchParams().get("id");
  console.log(params);
  const BOARD = useRecoilValue(communitySelector);
  console.log(BOARD);
  const [board, setBoard] = useState([]);
  const setBoardDetail = useSetRecoilState(boardDetailState);

  console.log(board);
  useEffect(() => {
    setBoardDetail(22);
  });
  useEffect(() => {
    if (BOARD) {
      const list = BOARD.find(val => val.chatId === parseInt(params));
      console.log(list);
    }
  }, [BOARD]);
  const closePopup = () => {
    router.push("/community");
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Header community />
        {BOARD ? (
          <div className={styles.communityShareContainer}>
            <BoardDetail closePopup={closePopup} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default communityShare;
