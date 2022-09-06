export type loginData = {
  username: string;
  password: string;
};
export type signupData = {
  username: string;
  nickname: string;
  password: string;
  passwordCheck: string;
};

export type user = {
  username: string;
  nickname: string;
  level: number;
  point: number;
  exp: number;
};
