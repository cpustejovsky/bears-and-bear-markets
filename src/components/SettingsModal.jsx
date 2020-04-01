import React from "react";
import ReactDom from "react-dom";

const SettingsModal = ({ settingsModal, onClose }) => {
  if (!settingsModal) {
    return null;
  }
  return ReactDom.createPortal(
    <div className="modal is-active">
      <div className="modal-background" onClick={() => onClose(false)} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button className="delete" onClick={() => onClose(false)} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <strong>Settings coming soon!</strong>
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
