import { useState } from "react";
import Backdrop from "./backdrop";
import Overlay from "./overlay";

function Todo(args) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  function deleteHandler() {
    setOverlayOpen(true);
  }
  function closeOverlay() {
    setOverlayOpen(false);
  }

  return (
    <div className="card">
      <h2> {args.text} </h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {overlayOpen && <Overlay onClick={closeOverlay} />}
      {overlayOpen && <Backdrop onClick={closeOverlay} />}
    </div>
  );
}

export default Todo;
