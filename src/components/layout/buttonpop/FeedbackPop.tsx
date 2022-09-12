import React from "react";
import styled, { keyframes } from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../style/styled";
import { devices } from "../../../device";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { switchFeedbackModal } from "../../../redux/modules/modals";

const FeedbackPop = () => {
  const dispatch =useAppDispatch();
  const msg = useAppSelector((state)=>state.modals.modals.feedbackModal)
  const [isClose, setIsClose] = React.useState(false);

  const openMsg = () => {
    if (msg === false) {
      dispatch(switchFeedbackModal(true));
      setIsClose(true);
    } else {
      dispatch(switchFeedbackModal(false));
      setIsClose(false);
    }
  };

  return (
    <Wrap>
      <PopBtn onClick={openMsg}>
        <img
          src={
            "https://media2.giphy.com/media/FybR3f1cKn5VLlLCkl/giphy.gif?cid=ecf05e4750cae04e05d377fb12692843f61cb9ef6187c771&rid=giphy.gif&ct=s"
          }
        />
        {isClose ? (
          <div>
            <small>X</small>
          </div>
        ) : (
          <small>Click !</small>
        )}
      </PopBtn>
      {msg ? (
        <Contents>
          <a
            target="blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScJdPn8S2gt6h3kHaHvV2mC-g9kR017yAT2kzWKLcVyQgaCPA/viewform"
          >
            이곳에서 서비스 개선을 위한 피드백을 해주세요 📋
          </a>
        </Contents>
      ) : null}
    </Wrap>
  );
};

// Style
const Wrap = styled(RowFlexDiv)`
  width: fit-content;
  height: fit-content;
  margin: auto;
  margin-bottom:2rem;
  align-items: center;
  @media ${devices.mobileL} {
    height: 3rem;
  }
  position: fixed;
  bottom: 0;
  left: 5%;
`;

const PopBtn = styled(ColumnFlexDiv)`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 5rem;
  text-align: center;
  cursor: pointer;
  img {
    width: 3.5rem;
    height: 3.5rem;
  }
  small {
    font-size: 0.8rem;
  }
  &:hover {
    img {
      transform: scale(1.1,1.1);
    }
    small {
      font-size: 0.9rem;
      font-weight: 800;
    }
  }
  @media ${devices.mobileL} {
    height: 3rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    small {
      font-size: 0.5rem;
    }

    &:hover {
    img {
      transform: scale(1.1,1.1);
    }
    small {
      transform: scale(1.1,1.1);
      font-weight: 800;
    }
  }
  }
`;

const MsgEffect = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const Contents = styled.div`
  width: fit-content;
  height: 3.5rem;
  border-radius: 1rem;
  text-align: center;
  line-height: 3.5rem;
  animation: ${MsgEffect} 0.7s ease-in-out;
  background-color: rgba(255, 253, 236, 0.5);
  a {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
  }
  @media ${devices.mobileL} {
    width: fit-content;
    height: 2rem;
    border-radius: 0.5rem;
    line-height: 2rem;
    a {
      font-size: 0.5rem;
    }
  }
`;

export default FeedbackPop;
