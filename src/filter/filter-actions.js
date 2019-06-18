export const UPDATE_FILTER = "UPDATE_FILTER";
export const UPDATE_FILTER_UI = "UPDATE_FILTER_UI";
export const UPDATE_FILTER_SUCCESS = "UPDATE_FILTER_SUCCESS";
export const GET_DATA_ARRAY = "GET_DATA_AS_ARRAY";
export const GET_DATA_QUERY_RESULTS = "GET_DATA_AS_QUERY_RESULT";

export const updateFilter = payload => ({
  type: UPDATE_FILTER,
  payload
});
// TODO: the payload for this should be QueryResults
export const updateFilterSuccess = payload => ({
  type: UPDATE_FILTER_SUCCESS,
  payload
});
export const updateFilterUI = payload => ({
  type: UPDATE_FILTER_UI,
  payload
});
export const getDataArray = payload => ({
  type: GET_DATA_ARRAY,
  payload
});
export const getDataQueryResults = payload => ({
  type: GET_DATA_QUERY_RESULTS,
  payload
});
