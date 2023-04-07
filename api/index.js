import axios from "axios";
import { RAPID_API_KEY } from "@env";
export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "50.13002717297118",
          tr_latitude: tr_lat ? tr_lat : "50.2973176471578",
          bl_longitude: bl_lng ? bl_lng : "18.89146640564267",
          tr_longitude: tr_lng ? tr_lng : "19.12291896395016",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key": RAPID_API_KEY,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
