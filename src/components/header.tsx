import React from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/header.module.scss";

interface DATA {
  community: boolean;
}
function Header({ community }: DATA) {
  const router = useRouter();
  const prevButton = () => {
    router.back();
  };
  const userButton = () => {
    router.push("/mypage");
  };
  const homeButton = () => {
    window.location.replace("/");
  };
  return (
    <div className={styles.header}>
      {community === true ? (
        <>
          <img
            className={styles.prev}
            src="/images/blackPrev.svg"
            alt="prev"
            role="none"
            onClick={prevButton}
          />
          <div className={styles.title} onClick={homeButton} role="none">
            Bodeum
          </div>
          <img
            className={styles.user}
            src="/images/blackUser.svg"
            alt="user"
            role="none"
            onClick={userButton}
          />
        </>
      ) : (
        <div className={styles.title} onClick={homeButton} role="none">
          Bodeum
        </div>
      )}
    </div>
  );
}

export default Header;
