import React, { useState } from "react";
import CtaModal from "./CtaModal";
export default function CtaButton() {
  const [ctaModal, setCtaModal] = useState(false);
  return (
    <>
      <CtaModal ctaModal={ctaModal} setCtaModal={setCtaModal} />
      <div onClick={()=>setCtaModal(!ctaModal)}  className="buttons">
        <button className="button is-primary is-large is-fullwidth">
          Data Provided by Polygon.io
        </button>
      </div>
    </>
  );
}
