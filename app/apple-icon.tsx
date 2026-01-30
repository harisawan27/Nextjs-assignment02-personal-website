import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "32px",
          fontWeight: 800,
          color: "white",
          fontFamily: "sans-serif",
          letterSpacing: "-2px",
        }}
      >
        HA
      </div>
    ),
    {
      ...size,
    }
  );
}
