"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useSetCookie } from "../../hooks/use-cookies";

export default function KakaoLoginPage() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const kakaoAuth = async () => {
      const token = {
        authToken: params.get("token"),
      };
      console.log(token);

      try {
        // const res = await api.apis.kakaoAuth(token)
        // hooks.setAccessToken(res.data.accessToken)
        // hooks.setRefreshToken(res.data.refreshToken)
        router.push("/");
      } catch (e) {
        alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    };

    kakaoAuth();
  }, []);

  return <div>123</div>;
}
