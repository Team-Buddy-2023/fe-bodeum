import React from "react";
import { useRouter } from "next/router";

function MyPage() {
  const router = useRouter();

  // 모든 스토리지 정보 삭제
  const Logout = () => {
    window.localStorage.removeItem("loginState");
    window.sessionStorage.removeItem("chat");
    window.sessionStorage.removeItem("chatShare");
    window.sessionStorage.removeItem("character");
    router.push("/");
  };
  return (
    <div>
      <button type="button" onClick={Logout}>
        로그아웃
      </button>
    </div>
  );
}

export default MyPage;
