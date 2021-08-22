import React, { useRef, useEffect } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { useButtonFocus } from "./hooks/useButtonFocus";

function App() {
  const modal = useRef(null);
  const buttonRef = useRef(null);

  const openModal = () => {
    modal.current.open();
  };

  const setFocus = () => {
    buttonRef.current.focus();
  };

  return (
    <div className="App">
      <h1>React Modal</h1>
      <button ref={buttonRef} onClick={openModal}>
        Open modal
      </button>
      <Modal ref={modal} setFocus={setFocus}>
        Hi I'm a modal
      </Modal>
    </div>
  );
}

export default App;
