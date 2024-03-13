"use client";

import Image from "next/image";
import { AiOutlineArrowDown } from "react-icons/ai";
import styles from "./page.module.scss";
import Spacing from "../components/atom/Spacing";
import { ICharacterProps } from "../types/main";
import Footer from "../components/main/Footer";

export default function MainPage() {
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

  const LOGINSTATUS = false;

  const LoginKakaoFn = () => {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=e1ca1242637d6f7e5d769861cbf80017&redirect_uri=http://localhost:3000/success&response_type=code";
  };

  return (
    <main className={styles.main}>
      <Spacing height="100px" />
      <section className={styles.topSection}>
        <video
          className={styles.videoFileDesktop}
          width="1350"
          height="772"
          autoPlay
          muted
          loop
        >
          <source src="/videos/main_video_desktop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className={styles.videoFileMobile}
          width="347"
          height="605"
          autoPlay
          muted
          loop
        >
          <source src="/videos/main_video_mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id={styles.scroll}>
          <span>Scroll Down</span>
          <Spacing height="0px" />
          <AiOutlineArrowDown />
        </div>
      </section>

      <Spacing height="100px" />

      <section className={styles.bottomSection}>
        <div className={styles.bgImgContainer}>
          <div className={styles.leftBox}>
            <Image
              src="/images/mian_logo.png"
              alt="메인 로고"
              width="350"
              height="64"
              id={styles.logo}
            />
            <div className={styles.desc}>
              원하는 플러피를 선택하고 대화를 시작해보세요
            </div>
            <Spacing height="10px" />
            <div className={styles.nav}>
              {LOGINSTATUS ? (
                <>
                  <button className={styles.defaultBtn} type="button">
                    마이페이지
                  </button>
                  <button className={styles.defaultBtn} type="button">
                    커뮤니티
                  </button>
                </>
              ) : (
                <>
                  <button
                    className={styles.kakaoBtn}
                    onClick={() => {
                      LoginKakaoFn();
                    }}
                    type="button"
                  >
                    <Image
                      src="/images/ic_kakao.svg"
                      alt="카카오 로그인"
                      width="20"
                      height="20"
                    />
                    <span>카카오로 5초만에 시작하기</span>
                  </button>
                  <button className={styles.defaultBtn} type="button">
                    <span>커뮤니티</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className={styles.rightBox}>
            {CHARACTER.map((item: ICharacterProps, idx: number) => {
              return (
                <div className={styles.characterCard} key={idx}>
                  <span className={styles.name}>{item.name}</span>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width="150"
                    height="150"
                  />
                  <p className={styles.info}>{item.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Spacing height="100px" />
      <Footer />
    </main>
  );
}
