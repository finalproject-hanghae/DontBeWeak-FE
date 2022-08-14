import React from "react";
import { drugSearchAPI } from "../../api/drugSearch";
import styled from "styled-components";

const SearchDrug = () => {
  const [drugName, setDrugName] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [pickMe, setPickMe] = React.useState();
  const [howEat, setHowEat] = React.useState();
  console.log(drugName);
  console.log(searchResult);

  const submitToSearch = async (e) => {
    e.preventDefault();
    setSearchResult(await drugSearchAPI(drugName));
  };

  return (
    <>
      <SearchForm onSubmit={submitToSearch}>
        <DrugInput
          onChange={(e) => {
            setDrugName(e.target.value);
          }}
        />
        <SearchBtn>검색</SearchBtn>
      </SearchForm>

      {searchResult ? (
        searchResult.map((val, idx) => {
          return (
            <li
              style={{ listStyle: "none" }}
              onClick={() => {
                setPickMe(val.PRDUCT);
                setHowEat(val.SRV_USE);
              }}
              key={"li" + idx}
            >
              {val.PRDUCT}
            </li>
          );
        })
      ) : (
        <p>찾을 수 없습니다.</p>
      )}
      <h4>{pickMe}</h4>
      <small>{howEat}</small>
      
      <AddBtn> 등록 </AddBtn>
    </>
  );
};


// styled-component 적용

const SearchForm = styled.form`
  width: 100%;
  overflow: hidden;
  margin: 3%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

const DrugInput = styled.input`
  width: 75%;
  height: 1.7rem;
  padding-left: 1.5%;
  border: 0.5px solid #a4a4a4;
  border-radius: 5px;
  margin-right: 2%;
  outline: none;
`;

const SearchBtn = styled.button`
  width: 15%;
  height: 2rem;
  text-align: center;
  line-height: 1.9rem;
  background: #f98532;
  color: #fff;
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddBtn = styled.button`
  width: 95%;
  height: 3rem;
  line-height: 3rem;
  margin: 3%;
  color: #fff;
  background: #f98532;
  text-align: center;
  font-size: 1rem;
  font-weight: 800;
  border: none;
  border-radius: 3px;
  cursor: pointer;

`;

export default SearchDrug;
