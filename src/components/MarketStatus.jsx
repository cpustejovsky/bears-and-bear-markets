import React from 'react'
import { CheckMarketStatus } from "../api/polygon";

export default function MarketStatus() {
    let marketStatus = CheckMarketStatus();
    const renderMarketStatus = () => {
        if (marketStatus === "open") {
          return (
            <p>
              Market: <span className="navbar__market__open">Open</span>
            </p>
          );
        } else if (marketStatus === "closed") {
          return (
            <p>
              Market: <span className="navbar__market__closed">Closed</span>
            </p>
          );
        } else if (marketStatus === "error") {
          return (
            <p>
              <strong>Market Times:</strong> 9:30AM to 4:30PM EST
            </p>
          );
        } else {
          console.log("API has changed; please update accordingly");
          return (
            <p>
              <strong>Market Times:</strong> 9:30AM to 4:30PM EST
            </p>
          );
        }
      };
    
    return (
        <div>
            {renderMarketStatus()}
        </div>
    )
}
