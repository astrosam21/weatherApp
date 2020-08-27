import {
  GET_COORDS,
  GET_WEATHER_DATA,
  GET_CURRENT_WEATHER_DATA,
} from "./ActionTypes";
import { create } from "apisauce";
const api = create({
  baseURL: "http://api.openweathermap.org",
  headers: { Accept: "application/json" },
});
export const getCoordsSuccess = (val, dispatch) => {
  api
    .get(
      `/data/2.5/forecast?lat=${val.lat}&lon=${val.lng}&appid=3b3e078e97d26bac68819c6c75d38232`
    )
    .then((response) => {
      console.log(response.data);
      console.log(val);
      dispatch({
        type: GET_WEATHER_DATA,
        forecastData: response.data,
      });
    })
    .catch();
  api
    .get(
      `/data/2.5/weather?lat=${val.lat}&lon=${val.lng}&appid=3b3e078e97d26bac68819c6c75d38232`
    )
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_CURRENT_WEATHER_DATA,
        currentData: response.data,
      });
    })
    .catch();
};
export const onDetect = (val, dispatch) => {
  console.log("run");
  dispatch({
    type: GET_COORDS,
    coords: val,
  });
};
