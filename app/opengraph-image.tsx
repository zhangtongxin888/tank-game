import { ImageResponse } from "next/og";

export const alt = "Tank Game Wiki field manual";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          padding: 64,
          overflow: "hidden",
          color: "#171812",
          background: "#f2ead8",
          border: "18px solid #171812",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "68%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "8px 15px",
              color: "#fff9e9",
              background: "#177b73",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            PLAYER FIELD MANUAL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, fontWeight: 900, lineHeight: 0.9 }}>
              DON&apos;T SPAWN
            </div>
            <div style={{ display: "flex", color: "#f05832", fontSize: 110, fontWeight: 900, lineHeight: 0.9 }}>
              CLUELESS.
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 25, fontWeight: 700 }}>
            Tank Game beginner guide · codes · tank tactics
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: -30,
            top: 95,
            display: "flex",
            width: 390,
            height: 390,
            alignItems: "center",
            justifyContent: "center",
            border: "18px solid #171812",
            borderRadius: 999,
            background: "#f6cf3d",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 150,
              height: 230,
              alignItems: "center",
              justifyContent: "center",
              border: "16px solid #171812",
              borderRadius: 38,
              background: "#f05832",
              transform: "rotate(35deg)",
              fontSize: 74,
              fontWeight: 900,
            }}
          >
            TG
          </div>
        </div>
      </div>
    ),
    size,
  );
}
