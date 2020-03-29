import React from "react";
import ReactDom from "react-dom";

const CtaModal = ({ ctaModal, setCtaModal }) => {
  if (!ctaModal) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal is-active">
      <div className="modal-background" onClick={() => setCtaModal(false)} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">CTA: {ctaModal}</p>
          <button className="delete" onClick={() => setCtaModal(false)} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            VISIT POLYGON.IO
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={() => setCtaModal(false)}>
            Cancel
          </a>
        </footer>
      </div>
    </div>,
    document.querySelector("#cta")
  );
};

export default CtaModal;
