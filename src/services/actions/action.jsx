export const DISPLAY_DATA = "DISPLAY_DATA";
export const REQUEST_PAGE = "REQUEST_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";

export const displayData = (data) => {
  // console.log(data);
  return {
    type: DISPLAY_DATA,
    data: data,
  };
};

export const requestPage = (data, index) => {
  console.log("next page index", index);
  return {
    type: REQUEST_PAGE,
    data: data,
    index: index,
  };
};

export const removePage = (data, index) => {
  console.log("pervious page index", index);
  return {
    type: PREVIOUS_PAGE,
    data: data,
    index: index,
  };
};
