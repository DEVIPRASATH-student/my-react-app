import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && (
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          This is a secret message! 👀
        </p>
      )}
    </div>
  );
}

export default ToggleMessage;
