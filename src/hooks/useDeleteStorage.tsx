const useDeleteAll = () => {
  window.localStorage.removeItem("recoil-persist");
  window.sessionStorage.removeItem("chat");
  window.sessionStorage.removeItem("chatShare");
  window.sessionStorage.removeItem("character");
};
const useDeleteUser = () => {
  window.localStorage.removeItem("recoil-persist");
};

const useDeleteChat = () => {
  window.sessionStorage.removeItem("chat");
};

const useDeleteChatShare = () => {
  window.sessionStorage.removeItem("chatShare");
};

export { useDeleteAll, useDeleteUser, useDeleteChat, useDeleteChatShare };
