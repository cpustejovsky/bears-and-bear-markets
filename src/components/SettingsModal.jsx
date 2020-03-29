import React from "react";
import ReactDom from "react-dom";

const SettingsModal = ({ settingsModal, onClose }) => {
  if (!settingsModal) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="">
      <div className="modal-background" onClick={() => onClose(false)} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings: {settingsModal}</p>
          <button className="delete" onClick={() => onClose(false)} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            “Above all, do not lie to yourself. A man who lies to himself and
            listens to his own lie comes to a point where he does not discern
            any truth either in himself or anywhere around him, and thus falls
            into disrespect towards himself and others. Not respecting anyone,
            he ceases to love, and having no love, he gives himself up to the
            passions and coarse pleasures, in order to occupy and amuse himself,
            and in his vices reaches complete bestiality, and it all comes from
            lying continually to others and to himself.”
          </div>
        </section>
        <footer className="modal-card-foot">
          <a className="button" onClick={() => onClose(false)}>
            Cancel
          </a>
        </footer>
      </div>
    </div>,
    document.querySelector("#settings")
  );
};

export default SettingsModal;
