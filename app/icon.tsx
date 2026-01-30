import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          fontWeight: 800,
          color: "white",
          fontFamily: "sans-serif",
          letterSpacing: "-0.5px",
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
