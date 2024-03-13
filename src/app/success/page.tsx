"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import apis from "../../apis/api";

const page = () => {
  const params = useSearchParams();
  const limitParam: string | null = params.get("code");

  const router = useRouter();

  useEffect(() => {
    const kakaoAuth = async () => {
      try {
        const res = await apis.kakaoAuth(limitParam);
        console.log(res);
        router.push("/guide");
      } catch (e) {
        alert("로그인에 실패했습니다. 잠시 후 다시 시도해주세요.");
      }
    };

    kakaoAuth();
  }, []);
};

export default page;
