import {
  GET_COORDS,
  GET_CURRENT_WEATHER_DATA,
  GET_WEATHER_DATA,
} from "../../Actions/MainActions/ActionTypes";

const initialState = {
  id: "Hello",
  title: "hello bro",
  coords: { lat: null, lng: null },
  loading: true,
  forecastData: {},
  currentData: {},
};
const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDS:
      return (state = {
        ...state,
        coords: action.coords,
      });
    case GET_CURRENT_WEATHER_DATA:
      return (state = {
        ...state,
        currentData: action.currentData,
      });
    case GET_WEATHER_DATA:
      console.log(action.forecastData);
      return (state = {
        ...state,
        forecastData: action.forecastData,
      });
    default:
      return state;
  }
};
export default MainReducer;
