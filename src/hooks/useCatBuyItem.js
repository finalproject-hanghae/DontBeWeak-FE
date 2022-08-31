import axios from "axios";
import applyInterceptorsTo from "../api/axiosInterceptors";
const baseApi = axios.create({
  baseURL: process.env.REACT_APP_DB_HOST + "/items",
});
const useThisApi = applyInterceptorsTo(baseApi);
const useCatBuyItem = async (val) => {
  const dataApiItemBuy = await useThisApi.patch(`/${val.itemName}`);
  return dataApiItemBuy;
};

export default useCatBuyItem;

// axios.patch ??? ('/api/data/3', {title: })
