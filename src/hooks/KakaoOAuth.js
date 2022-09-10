const CLIENT_ID = "599bca646044fc4147f7f8f4c461f9ca";
const REDIRECT_URI = "localhost:3000/auth/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=599bca646044fc4147f7f8f4c461f9ca&redirect_uri=
http://localhost:3000/auth/kakao/callback&response_type=code`;

// export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;