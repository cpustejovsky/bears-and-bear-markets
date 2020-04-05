import React, { useState } from "react";
import CtaModal from "./CtaModal";
import MarketStatus from "./MarketStatus";
export default function CtaButton() {
  const [ctaModal, setCtaModal] = useState(false);
  return (
    <>
      <CtaModal ctaModal={ctaModal} setCtaModal={setCtaModal} />
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Data provided</strong> by{" "}
            <a onClick={() => setCtaModal(!ctaModal)}>Polygon.io</a>. Source
            code is found{" "}
            <a
              href="https://github.com/cpustejovsky/bears-and-bear-markets"
              target="_blank"
              rel="noreferrer noopener"
            >
              here
            </a>
            .
          </p>
          <MarketStatus />
        </div>
      </footer>
    </>
  );
}
