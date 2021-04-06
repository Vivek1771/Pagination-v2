import { combineReducers } from "redux";
import tableData from "./reducer";

const root = combineReducers({
  pG: tableData,
});
export default root;
