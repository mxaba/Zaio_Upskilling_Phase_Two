const { default: Axios } = require("axios");
const {
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
  FETCH_HOUSE_FAIL,
} = require("./../actionTypes");

const rentHouseAction = () => async (dispatch) => {
  const production_url = "/house/rent";
  const dev_url = "/house/rent";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await Axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export default rentHouseAction;
