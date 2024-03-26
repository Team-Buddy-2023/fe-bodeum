import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import apis from "@/apis/api";

async function chat(id: number, text: string) {
  try {
    const res = await apis.chat(id, text);
    return res;
  } catch (e) {
    throw new Error("채팅 전송에 실패했습니다.");
  }
}

function useChat(id: number, text: string) {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["Chat"],
    queryFn: () => chat(id, text),
  });
  useEffect(() => {});
  return { isLoading, error, data, refetch };
}

export default useChat;
