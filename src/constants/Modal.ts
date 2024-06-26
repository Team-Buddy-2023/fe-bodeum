interface DATA {
  TEXT: Array<string>;
  BUTTON1: string;
  BUTTON2: string;
}
const MODAL = {
  CHAT_EXIT: <DATA>{
    TEXT: ["대화를 끝낼까요?"],
    BUTTON1: "돌아가기",
    BUTTON2: "끝내기",
  },
  SHARE_EXIT: <DATA>{
    TEXT: ["결과창을 닫을까요?", "다시 결과창으로 돌아올 수 없어요"],
    BUTTON1: "돌아가기",
    BUTTON2: "홈",
  },
  SHARE: <DATA>{
    TEXT: ["선택한 답변을 커뮤니티에 공유할까요?"],
    BUTTON1: "돌아가기",
    BUTTON2: "공유하기",
  },
  NOCHAT: <DATA>{
    TEXT: ["대화를 나누지 않았습니다.", "종료하시겠습니까?"],
    BUTTON1: "돌아가기",
    BUTTON2: "종료하기",
  },
  NOSELECTSHARE: <DATA>{
    TEXT: ["선택된 대화가 없습니다.", "대화를 선택해주세요."],
    BUTTON1: "돌아가기",
    BUTTON2: "",
  },
  HOME: <DATA>{
    TEXT: ["지금 홈으로 이동하면", "다시 결과창으로 돌아올 수 없어요"],
    BUTTON1: "돌아가기",
    BUTTON2: "홈",
  },
  COMMUNITY: <DATA>{
    TEXT: ["지금 커뮤니티로 이동하면", "다시 결과창으로 돌아올 수 없어요"],
    BUTTON1: "돌아가기",
    BUTTON2: "커뮤니티",
  },
};

export default MODAL;
