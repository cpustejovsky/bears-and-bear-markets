import axios from "axios";
import moment from "moment-timezone";
import { useState, useEffect, useRef } from "react";

const polygon = axios.create({
  method: "get",
  baseURL: "https://api.polygon.io",
  params: {
    apiKey: process.env.REACT_APP_API_KEY
  }
});
const isMarketOpen = () => {
  let now = moment().tz("America/New_York");
  let isWeekday =
    now.format("dddd") !== "Saturday" && now.format("dddd") !== "Sunday";
  let isAfterOpen =
    (now.format("A") === "AM" && Number(now.format("hh")) >= 10) ||
    (Number(now.format("hh")) === 9 && Number(now.format("mm")) >= 30);
  let isBeforeClose =
    Number(now.format("hh")) <= 3 ||
    Number(now.format("hh")) === 12 ||
    (Number(now.format("hh")) === 4 && Number(now.format("mm")) <= 30);
  if (now.format("A") === "AM") {
    return isWeekday && isAfterOpen;
  } else if (now.format("A") === "PM") {
    return isWeekday && isBeforeClose;
  }
};

const fetchTickerData = async symbol => {
  if (isMarketOpen()) {
    try {
      const response = await polygon.get(
        `/v2/snapshot/locale/us/markets/stocks/tickers/${symbol}`
      );
      let data = {
        ticker: response.data.ticker.ticker,
        price: response.data.ticker.lastTrade.p,
        change: response.data.ticker.todaysChange,
        percent: response.data.ticker.todaysChangePerc
      };
      return data;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const response = await polygon.get(`/v1/last_quote/stocks/${symbol}`);
      let data = {
        ticker: response.data.symbol,
        price: response.data.last.askprice,
        change: null,
        percent: null
      };
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export function FetchStockTicker(symbol) {
  //TODO: figure out if price went down or up (either currently or before close) and pass that information along
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [percent, setPercent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let data = await fetchTickerData(symbol);
      setName(data.ticker);
      setPrice(data.price);
      setChange(data.change);
      setPercent(data.percent);
    }
    fetchData();
  }, [symbol]);


  useInterval(async () => {
    if (isMarketOpen()) {
      let data = await fetchTickerData(symbol);
      setName(data.ticker);
      setPrice(data.price);
      setChange(data.change);
      setPercent(data.percent);
    }
  }, 10000);

  return [name, price, change, percent];
}

export async function FetchTickerDetails(symbol) {
  try {
    const response = await polygon.get(`/v1/meta/symbols/${symbol}/company`);
    const companyData = {
      symbol: response.data.symbol,
      logo: response.data.logo,
      name: response.data.name,
      country: response.data.country,
      sector: response.data.sector,
      industry: response.data.industry,
      ceo: response.data.ceo,
      employees: response.data.employees,
      url: response.data.url,
      description: response.data.description,
      similar: response.data.similar
    };
    return companyData;
  } catch (error) {
    console.log(error)
    return "error"
  }
}

//TODO: check that this work when market status api endpoint is back online
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
