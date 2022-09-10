import React from "react";
import { useAppDispatch } from "../redux/hooks";


const useHandleClick = (actionFunction:any) => {
  const dispatch = useAppDispatch()
  const openedModalRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e:any) => {
      if (
        openedModalRef.current &&
        !openedModalRef.current?.contains(e.target)
      ) {
        dispatch(actionFunction(false));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openedModalRef]);

  return openedModalRef;
};

export default useHandleClick;

//  const [friends,showModal,friendListModalRef] = useHandleClick();
// 스테이트 오픈함수 모달범위Ref
