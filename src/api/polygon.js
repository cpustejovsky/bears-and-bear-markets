import axios from "axios";
import { useState, useEffect } from "react";

const polygon = axios.create({
  method: "get",
  baseURL: "https://api.polygon.io",
  params: {
    apiKey: process.env.REACT_APP_API_KEY
  }
});
axios.request(polygon);
//TODO: check that this work
export function CheckMarketStatus() {
  const [marketStatus, setMarketStatus] = useState("");

  useEffect(() => {
    (async () => {
      try {
        //   const response = await axios.get(
        //     `https://api.polygon.io/marketstatus/now?apiKey=${process.env.REACT_APP_API_KEY}`
        //   );
        //   setMarketStatus(response.data.market);
        setMarketStatus("error");
      } catch (error) {
        console.log(error);
        setMarketStatus("error");
      }
    })();
  }, [marketStatus]);
  return marketStatus;
}

export async function FetchStockTickers() {
  const response = await polygon.get(
    "/v2/reference/tickers?sort=ticker&perpage=50&page=1"
  );
  //   const response = await axios.get('https://api.polygon.io/v2/reference/tickers?sort=ticker&perpage=50&page=1&apiKey=88_aEee41Bvn3eu4F9GU2xgUYi21KInjsGjc_W')
  console.log(response.data);
}
