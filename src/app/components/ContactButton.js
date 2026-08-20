    "use client";

import { useState } from "react";

export default function ContactButton() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button
        className="primary-btn"
        onClick={() => setShowMessage(!showMessage)}
      >
        Contact Me
      </button>

      {showMessage && (
        <p style={{ marginTop: "12px" }}>
          Feel free to connect with me for frontend opportunities.
        </p>
      )}
    </div>
  );
}