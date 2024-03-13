import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json,",
  },
});

api.interceptors.request.use(config => {
  return config;
});

const apis = {
  kakaoAuth: (token: string | null) =>
    api.get(`/oauth/callback/kakao/`, { params: { code: token } }),
};

export default apis;
