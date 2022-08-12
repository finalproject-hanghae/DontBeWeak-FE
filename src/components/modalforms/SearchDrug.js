import React from "react";
import { drugSearchAPI } from "../../api/drugSearch";

const SearchDrug = () => {
  const [drugName, setDrugName] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);
  const [pickMe,setPickMe] = React.useState();
  const [howEat,setHowEat] = React.useState();
  console.log(drugName);
  console.log(searchResult);

  const submitToSearch = async (e) => {
    e.preventDefault();
    setSearchResult(await drugSearchAPI(drugName));
  };

  return (
    <>
      <form onSubmit={submitToSearch}>
        <input
          onChange={(e) => {
            setDrugName(e.target.value);
          }}
        />
        <button>검색</button>
      </form>

      {searchResult ? (
        searchResult.map((val, idx) => {
          return <li onClick={()=>{setPickMe(val.PRDUCT);setHowEat(val.SRV_USE)}} key={"li" + idx}>{val.PRDUCT}</li>;
        })
      ) : (
        <p>찾을 수 없습니다.</p>
      )}
      <h4>{pickMe}</h4>
      <small>{howEat}</small>

    </>
  );
};

export default SearchDrug;
