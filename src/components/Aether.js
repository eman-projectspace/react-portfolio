import React, { useState } from "react";

const Aether = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
          backgroundColor: "#0a3d62", // dark blue
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 60,
          height: 60,
          cursor: "pointer",
          fontSize: 28,
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
        }}
        title="Chat with Aether"
      >
        ⚡
      </button>

      {/* Chat iframe */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 380,
            height: 500,
            zIndex: 9998,
            boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <iframe
            title="Aether Bot"
            src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/02/26/21/20260226214913-RJOLZ7UJ.json"
            style={{ width: "100%", height: "100%", border: "none" }}
            allow="microphone"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Aether;