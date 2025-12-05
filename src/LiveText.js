import { useState } from "react";

function LiveText() {
  const [text, setText] = useState("");

  return (
    <div style={{ margin: "20px 0" }}>
      <h2>Live Text Display</h2>

      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <p style={{ marginTop: "10px", fontSize: "20px" }}>
        You typed: {text}
      </p>
    </div>
  );
}

export default LiveText;
