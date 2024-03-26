import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "chat",
  storage: sessionStorage,
});

const chatState = atom({
  key: "chatState",
  default: [{ id: 0, text: "" }],
  effects_UNSTABLE: [persistAtom],
});

export default chatState;
