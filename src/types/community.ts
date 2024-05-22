export interface GetCommunity {
  answer: string;
  chatId: number;
  comment: string;
  dateTime: string;
  fluffyName: string;
  nickname: string;
  userId: number;
}

export interface BoardPropsData {
  nickname: string;
  date: string;
  comment: string;
  answer: string;
  fluffy: number;
}
