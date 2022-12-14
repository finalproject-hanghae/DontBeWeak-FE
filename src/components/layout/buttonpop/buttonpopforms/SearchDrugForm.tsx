import React from "react";

// Open API
import { drugSearchAPI } from "../../../../api/drugSearch";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../../style/styled";
import DirectSearchModal from "../DirectSearchModal";
import useHandleClick from "../../../../hooks/useHandleClick";
import { devices } from "../../../../device";
import ColorPicker from "../../../purpose/ColorPicker";
import { keepDrugDataMW } from "../../../../redux/modules/drugs";
import { getRandomInt } from "../../../../hooks/getRandomInt";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { drug, searchDrug } from "../../../../types/drugs";
import { switchDirectModal, switchSearchModal } from "../../../../redux/modules/modals";

const SearchDrugForm = () => {
  const dispatch = useAppDispatch();
  const isDirect = useAppSelector(state=>state.modals.modals.directSearchModal)
  //옵저버 선언
  const obsRef = React.useRef(null);
  const preventRef = React.useRef(true); //옵저버 중복 실행 방지
  const [pageNumber, setPageNumber] = React.useState(0);
  const [searchResult, setSearchResult] = React.useState<Array<searchDrug>>([]);
  const randomColor = `rgb(${getRandomInt(0, 255)},${getRandomInt(
    0,
    255
  )},${getRandomInt(0, 255)})`;
  const [color, setColor] = React.useState<string>(randomColor);

  console.log(pageNumber);

  //옵저버 핸들러
  const obsHandler = (entries: any) => {
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

  const [pickMe, setPickMe] = React.useState<string>();
  const [howEat, setHowEat] = React.useState<string>();

  const submitToSearch = async (e: any) => {
    e.preventDefault();
    setPageNumber(1);
    setSearchResult(await drugSearchAPI(drugName, 1));
  };

  const DirectModalRef = useHandleClick(switchDirectModal);

  const clickToAddDrug = () => {
    if (pickMe) {
      let tmpDrugData: drug = {
        productName: pickMe.trim(),
        customColor: color,
        done: false,
      };
      dispatch(keepDrugDataMW(tmpDrugData));
      dispatch(switchSearchModal(false));
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
          <span onClick={()=>dispatch(switchDirectModal(true))}>직접 입력하기</span>
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
            <ColorPicker color={color} setColor={setColor} />
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
  height: 33.7rem;
  align-items: center;
  justify-content: center;
  position: relative;
  @media ${devices.mobileL} {
    width: 90%;
    height: 22rem;
  }
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
    color: #fabc4f;
    cursor: pointer;
    &:hover {
      border-bottom: 1px solid #f98532;
    }
  }
  @media ${devices.mobileL} {
    font-size: 0.5rem;
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
    background-color: #a5a5a5;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  @media ${devices.mobileL} {
    font-size: 0.5rem;
    line-height: 2rem;
  }
`;

const SearchForm = styled.form`
  width: 100%;
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
  @media ${devices.mobileL} {
    width: 75%;
    height: 1.8rem;
    font-size: 0.7rem;
  }
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
  background: #fabc4f;
  color: #fff;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${devices.mobileL} {
    width: 3rem;
    height: 2rem;
    font-size: 0.7rem;
  }
`;

const PickMeBox = styled.div`
  width: 95%;
  @media ${devices.mobileL} {
    small {
      font-size: 0.5rem;
    }
  }
`;

const MyDrug = styled.div`
  width: 100%;
  height: 3.2em;
  background-color: #fcdcbe;
  display: flex;
  align-items: center;
  margin-bottom: 3%;
  h4 {
    padding-left: 5%;
    line-height: 1.2em;
  }
  @media ${devices.mobileL} {
    width: 100%;
    height: 2rem;
    h4 {
      font-size: 0.5rem;
    }
  }
`;

const AddBtn = styled.button`
  width: 95%;
  height: 3rem;
  margin: 8% 0;
  color: #fff;
  background: #fabc4f;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media ${devices.mobileL} {
    width: 95%;
    height: 2.5rem;
    font-size: 0.8rem;
  }
`;

export default SearchDrugForm;
