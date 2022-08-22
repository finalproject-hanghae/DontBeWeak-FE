import React from "react";
import { useDispatch } from "react-redux";
// Open API
import { drugSearchAPI } from "../../../../api/drugSearch";

// Icon
import Plus from "../../../../assets/images/plus_icon.png";
import Minus from "../../../../assets/images/minus_icon.png";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../../style/styled";
import DirectSearchModal from "../DirectSearchModal";
import useHandleClick from "../../../../hooks/useHandleClick";
import axios from "axios";

import { keepDrugDataMW } from "../../../../redux/modules/drugs";

const SearchDrugForm = ({ setDrug }) => {
  const dispatch = useDispatch();
  //옵저버 선언
  const obsRef = React.useRef(null);
  const preventRef = React.useRef(true); //옵저버 중복 실행 방지
  const [pageNumber, setPageNumber] = React.useState(0);
  const [searchResult, setSearchResult] = React.useState([]);

  // console.log(pageNumber);

  //옵저버 핸들러
  const obsHandler = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPageNumber((prev) => prev + 1);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.75 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const getMoreList = React.useCallback(async () => {
    const tmpData = await drugSearchAPI(drugName, pageNumber);
    tmpData && setSearchResult([...searchResult, ...tmpData]);
  }, [pageNumber]);

  React.useEffect(() => {
    preventRef.current = true;
    getMoreList();
  }, [pageNumber]);

  //

  const [drugName, setDrugName] = React.useState("");
  const [pickMe, setPickMe] = React.useState();
  const [howEat, setHowEat] = React.useState();
  const [color, setColor] = React.useState("#000000");

  const submitToSearch = async (e) => {
    e.preventDefault();
    setPageNumber(1);
    setSearchResult(await drugSearchAPI(drugName, 1));
  };

  const [isDirect, showDirectInput, DirectModalRef] = useHandleClick();

  // 컬러피커 핸들러
  const colorRef = React.useRef("");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const customColor = colorRef.current.value;
  console.log(customColor, "랴랴ㅏ커스텀 컬러 값이ㅣ닷");
  //

  const clickToAddDrug = () => {
    if (pickMe) {
      let tmpDrugData = {
        productName: pickMe,
        customColor: customColor,
        done: false,
      };
      dispatch(keepDrugDataMW(tmpDrugData));
      setDrug(false);
    }
    return;
  };

  return (
    <Wrap>
      <SearchForm onSubmit={submitToSearch}>
        <DrugInput
          placeholder="상품명을 입력해주세요."
          onChange={(e) => {
            setDrugName(e.target.value);
          }}
        />
        <SearchBtn>검색</SearchBtn>
      </SearchForm>

      <DirectSearch>
        <p>
          찾으시는 영양제가 없으신가요?
          <span onClick={showDirectInput}>직접 입력하기</span>
        </p>
        {isDirect ? (
          <DirectSearchModal ref={DirectModalRef} setPickMe={setPickMe} />
        ) : null}
      </DirectSearch>
      <SearchList>
        {searchResult ? (
          searchResult.map((val, idx) => {
            return (
              <Idx
                onClick={() => {
                  setPickMe(val.PRDUCT);
                  setHowEat(val.SRV_USE);
                }}
                key={"li" + idx}
              >
                {val.PRDUCT}
              </Idx>
            );
          })
        ) : (
          <p>찾을 수 없습니다.</p>
        )}
        {searchResult && <Observer ref={obsRef}></Observer>}
      </SearchList>

      {pickMe && (
        <PickMeBox>
          <MyDrug>
            <h4>{pickMe}</h4>
            {/* 컬러피커 */}
            <Pallete color={color} onClick={() => colorRef.current.click()}>
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                ref={colorRef}
                hidden
              />
            </Pallete>
            <img
              src={Minus}
              onClick={() => {
                setPickMe("");
                setHowEat("");
              }}
              alt="minus_icon"
            />
          </MyDrug>

          <small>{howEat}</small>
        </PickMeBox>
      )}
      <AddBtn onClick={clickToAddDrug}> 등록 </AddBtn>
    </Wrap>
  );
};

// styled-component 적용

const Wrap = styled(ColumnFlexDiv)`
  width: 90%;
  height: 560px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Observer = styled.div`
  height: 10px;
`;

const DirectSearch = styled(RowFlexDiv)`
  width: 95%;
  height: 10%;
  align-items: center;
  justify-content: center;
  span {
    font-weight: bolder;
    margin-left: 5px;
    color: #f98532;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #f98532;
    }
  }
`;

const SearchList = styled.div`
  width: 93%;
  height: 30%;
  margin-bottom: 5%;
  line-height: 3rem;
  padding-left: 2%;
  border-radius: 5px;
  border: 0.5px solid #a4a4a4;
  font-size: 1rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f98532;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

const SearchForm = styled.form`
  width: 100%;
  overflow: hidden;
  margin-top: 8%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const DrugInput = styled.input`
  width: 75%;
  height: 2.3rem;
  padding-left: 1.5%;
  border: 0.5px solid #a4a4a4;
  border-radius: 5px;
  margin-right: 2%;
  outline: none;
`;

const Idx = styled.li`
  list-style: none;
  padding: 0px 5px;
  cursor: pointer;
  &:hover {
    background-color: #cdcdcd;
  }
`;

const SearchBtn = styled.button`
  width: 15%;
  height: 2.5rem;
  text-align: center;
  line-height: 1.9rem;
  background: #f98532;
  color: #fff;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const PickMeBox = styled.div`
  width: 95%;
  small {
  }
`;
const Pallete = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  /* border: 0.2rem solid orange; */
  box-sizing: border-box;
  border-radius: 5rem;
  background: ${(props) => props.color};
  position: absolute;
  right: 5rem;
  cursor: pointer;
`;

const MyDrug = styled.div`
  width: 100%;
  height: 3.2em;
  background-color: #fff3aa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3%;
  h4 {
    padding-left: 5%;
    line-height: 1.2em;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 5%;
    cursor: pointer;
  }
`;

const AddBtn = styled.button`
  width: 95%;
  height: 3rem;
  margin: 8% 0;
  color: #fff;
  background: #f98532;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SearchDrugForm;
