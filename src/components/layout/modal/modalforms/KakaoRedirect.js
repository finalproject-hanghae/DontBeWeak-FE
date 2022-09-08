import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../../../redux/modules/kakao";
// import { userAction } from "../../../../redux/modules/userAction";
// import userAction from "../../../../redux/modules/kakao";
const KakaoRedirect = (props) => {
    const dispatch = useDispatch();

    // const href = window.location.href;
    // let params = new URL(document.URL).searchParams;
    // let code = params.get("code");
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, [])
}

export default KakaoRedirect;