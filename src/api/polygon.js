import axios from "axios";
import moment from "moment-timezone";
import { useState, useEffect } from "react";

const polygon = axios.create({
  method: "get",
  baseURL: "https://api.polygon.io",
  params: {
    apiKey: process.env.REACT_APP_API_KEY
  }
});

const isMarketOpen = () => {
  let now = moment().tz('America/New_York');
  let isWeekday =
    now.format("dddd") !== "Saturday" && now.format("dddd") !== "Sunday";
  let isAfterOpen =
    now.format("A") === "AM" &&
    Number(now.format("hh")) >= 9 &&
    Number(now.format("mm")) >= 30;
  let isBeforeClose =
    now.format("A") === "PM" &&
    Number(now.format("hh")) <= 4 &&
    Number(now.format("mm")) <= 30;
  return isWeekday && isAfterOpen && isBeforeClose;
};

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

export function FetchStockTicker(symbol) {
  //TODO: figure out if price went down or up (either currently or before close) and pass that information along
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    if (isMarketOpen()) {
      (async symbol => {
        try {
          const response = await polygon.get(
            `/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}`
          );
          setName(response.data.ticker.ticker);
          setPrice(response.data.ticker.lastTrade.p);
        } catch (error) {
          console.log(error);
        }
      })(symbol);
    } else {
      (async symbol => {
        try {
          const response = await polygon.get(`/v1/last_quote/stocks/${symbol}`);
          setName(response.data.symbol);
          setPrice(response.data.last.askprice);
        } catch (error) {
          console.log(error);
        }
      })(symbol);
    }
  }, [name, price]);
  return [name, price];
}
