import axios from "axios";
import { useState, useEffect } from "react";

const polygon = axios.create({
  method: "get",
  baseURL: "https://api.polygon.io",
  params: {
    apiKey: process.env.REACT_APP_API_KEY
  }
});
//TODO: check that this work
export function CheckMarketStatus() {
  const [marketStatus, setMarketStatus] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await polygon.get(`/marketstatus/now`);
        setMarketStatus(response.data.market);
      } catch (error) {
        console.log(error);
        setMarketStatus("error");
      }
    })();
  }, [marketStatus]);
  return marketStatus;
}

export async function FetchStockTicker(symbol) {
/*
    First check day and time

    If the market is open at current day and time, run get request with /v2/snapshot/locale/us/markets/stocks/tickers/{ticker} and return relevant data.

    Otherwise, run /v1/last_quote/stocks/{ticker} and return relevant data.
*/

}
