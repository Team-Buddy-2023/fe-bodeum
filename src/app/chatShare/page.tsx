import React, { MouseEvent, useState, useRef } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import styles from "../styles/chat.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderContainer from "../../components/SliderContainer";
import ModalExit from "../../components/ModalExit";
import MODAL from "../../constants/Modal";

interface JSONDATA {
  id: string;
  title: string;
  content: string;
}
interface SliderProps {
  arrows: boolean;
  dots: boolean;
  isfinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
}
function chatShare() {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const datas = require("../data/Carousel.json");
  const [isActive, setActive] = useState("0");
  const [normal, setNormal] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const divRef = useRef(null);
  const router = useRouter();
  const settings: SliderProps = {
    arrows: false,
    dots: true,
    isfinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
  };
  // x 아이콘 클릭 시 모달 open
  const ExitClick = () => {
    setModalOpen(!modalOpen);
  };
  const onSideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (divRef.current === e.target) {
      setNormal(true);
    }
  };
  const onSlideClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      const t = e.target.id;
      setActive(t);
      setNormal(false);
    }
  };
  const homeClick = () => {
    router.push("/");
  };
  const comClick = () => {
    router.push("/commuity");
  };
  // 특정글을 선택하면 active처리, 그 외에 것들은 nonActive(검은색 화면)
  // 글 영역 이외인 부분을 클릭 시 -> normal은 true가 되고, active와 nonActive 모두 풀림.
  return (
    <div className={styles.background}>
      <div className={styles.sliderbackdrop}>
        <div className={styles.finish} role="none" onClick={ExitClick}>
          <img src="/images/x.svg" alt="x" />
        </div>
        {modalOpen && (
          <div className={styles.modalBackground}>
            {normal ? (
              <ModalExit
                setModalOpen={setModalOpen}
                text={MODAL.SHARE_EXIT.TEXT}
                button1={MODAL.SHARE_EXIT.BUTTON1}
                button2={MODAL.SHARE_EXIT.BUTTON2}
              />
            ) : (
              <ModalExit
                setModalOpen={setModalOpen}
                text={MODAL.SHARE.TEXT}
                button1={MODAL.SHARE.BUTTON1}
                button2={MODAL.SHARE.BUTTON2}
              />
            )}
          </div>
        )}
        <div
          role="button"
          className={styles.refGround}
          ref={divRef}
          tabIndex={0}
          onClick={onSideClick}
          onKeyDown={() => onSideClick}
        />
        <div className={styles.title}>BODEUM</div>
        <div className={styles.header}>
          저장 버튼을 누른 대화 중 공유하고 싶은 답변을 선택해주세요.
        </div>
        <div className={styles.chatSlider}>
          <Slider {...settings}>
            {datas.map((obj: JSONDATA) => (
              <SliderContainer
                obj={obj.id}
                key={obj.id}
                className={styles.card}
                title={obj.title}
                content={obj.content}
                onSlideClick={onSlideClick}
                isActive={isActive}
                normal={normal}
              />
            ))}
          </Slider>
        </div>
        <div>
          <button
            className={styles.sharebutton}
            type="button"
            onClick={homeClick}
          >
            홈
          </button>
          <button
            className={styles.sharebutton}
            type="button"
            onClick={comClick}
          >
            커뮤니티
          </button>
        </div>
      </div>
    </div>
  );
}

export default chatShare;
