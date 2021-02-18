import axios from "axios";
import {
  FETCH_HOUSE_FAIL,
  FETCH_HOUSE_REQUEST,
  FETCH_HOUSE_SUCCESS,
} from "./../actionTypes";
export const houseOnSaleFetch = () => async (dispatch) => {
  const production_url = "/house/sale";
  const dev_url = "/house/sale";
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const locationSearchFilter = (location) => async (dispatch) => {
  const production_url = `/house/location-filter/${location}`;
  const dev_url = `/house/location-filter/${location}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};

export const roomSearchFilter = (roomNO) => async (dispatch) => {
  const production_url = `/house/room-filter/${roomNO}`;
  const dev_url = `/house/room-filter/${roomNO}`;
  try {
    dispatch({ type: FETCH_HOUSE_REQUEST });
    const { data } = await axios.get(production_url);
    dispatch({ type: FETCH_HOUSE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_HOUSE_FAIL, payload: error });
  }
};
