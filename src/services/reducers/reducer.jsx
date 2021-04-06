import { DISPLAY_DATA } from "../actions/action";
import { REQUEST_PAGE } from "../actions/action";
import { PREVIOUS_PAGE } from "../actions/action";

const initialState = {
  citiesData: [],
};

export default function tableData(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_DATA:
      return {
        ...state,
        citiesData: action.data,
      };
    case REQUEST_PAGE:
      return {
        ...state,
        citiesData: action.data.slice(
          action.index * 10,
          action.index * 10 + 10
        ),
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        citiesData: action.data.slice(
          action.index * 10,
          action.index * 10 + 10
        ),
      };
    default:
      return state;
  }
}
