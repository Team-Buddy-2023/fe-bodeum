import axios from "axios";

const api = axios.create({
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
  getQuestionList: (type: string) =>
    api.post("/esgSurvey/getEsgList", { questionCategoryEsg: type }),
};

export default apis;
