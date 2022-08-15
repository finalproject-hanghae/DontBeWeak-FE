import React from "react";

// Open API
import { drugSearchAPI } from "../../../../api/drugSearch";

// Icon
import Plus from "../../../../assets/images/plus_icon.png";
import Minus from "../../../../assets/images/minus_icon.png";

// 스타일 관련
import styled from "styled-components";
import { ColumnFlexDiv, RowFlexDiv } from "../../../../style/styled";

const SearchDrugForm = () => {
  const [isDirect, setIsDirect] = React.useState(false);

  const showDirectInput = () => {
    setIsDirect(true);
  };
  console.log(isDirect);

  const [drugName, setDrugName] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  const [pickMe, setPickMe] = React.useState();
  const [howEat, setHowEat] = React.useState();

  const submitToSearch = async (e) => {
    e.preventDefault();
    setSearchResult(await drugSearchAPI(drugName));
  };

  return (
    <Wrap>
      <SearchForm onSubmit={submitToSearch}>
        <DrugInput
          placeholder="상품명 또는 제조사명을 입력해주세요."
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
          <DirectSearchModal>
            <DirectInput placeholder="상품명을 입력해주세요." />
            <SearchBtn> 확인 </SearchBtn>
          </DirectSearchModal>
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
      </SearchList>

      {pickMe && (
        <MyDrug>
          <h4>{pickMe}</h4>
          <img src={Minus} alt="plus_icon" />
        </MyDrug>
      )}
      <small>{howEat}</small>

      <AddBtn> 등록 </AddBtn>
    </Wrap>
  );
};

// styled-component 적용

const Wrap = styled(ColumnFlexDiv)`
  width: 95%;
  min-height: 70%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const DirectSearch = styled(RowFlexDiv)`
  width: 95%;
  height: 15%;
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

const DirectSearchModal = styled(RowFlexDiv)`
  width: 350px;
  height: 85px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  position: absolute;
  align-items: center;
  justify-content: center;
`;

const DirectInput = styled.input`
  width: 65%;
  height: 30%;
  margin-right: 3%;
  border: 0.5px solid #a4a4a4;
  outline: none;
  border-radius: 5px;
  line-height: 1.5rem;
  font-size: 1rem;
  padding: 1.3% 2%;
`;

const SearchList = styled.div`
  width: 93%;
  height: 40%;
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
  margin-top: 5%;
  padding: 1% 0;
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

const MyDrug = styled.div`
  width: 95%;
  height: 3rem;
  background-color: #fff3aa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h4 {
    padding-left: 5%;
    line-height: 0.5em;
  }
  img {
    width: 25px;
    height: 25px;
    margin-right: 5%;
  }
`;

const AddBtn = styled.button`
  width: 95%;
  height: 3rem;
  margin: 5% 0;
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
