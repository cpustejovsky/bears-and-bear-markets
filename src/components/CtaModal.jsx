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
          <p className="modal-card-title">What is Polygon.io?</p>
          <button className="delete" onClick={() => setCtaModal(false)} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <p>
              Started by ex-Googlers with a proven track record of building
              performant, large scale platforms with clean, intuitive usability,
              polygon.io provides reliable market data at low cost and with
              simple integrations.
            </p>
            <strong>
              Visit{" "}
              <a
                href="https://polygon.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                polygon.io
              </a>{" "}
              to learn more.
            </strong>
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
