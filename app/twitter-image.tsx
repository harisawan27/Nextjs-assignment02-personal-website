import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Haris Awan - Full Stack Developer & Agentic AI Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #030014 0%, #0a0a1f 50%, #1a0a2e 100%)",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Main content wrapper */}
        <div
          style={{
            display: "flex",
            width: "100%",
            padding: "60px",
            zIndex: 10,
          }}
        >
          {/* Left content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: 1,
              paddingRight: "40px",
            }}
          >
            {/* Availability badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 20px",
                borderRadius: "50px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "30px",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span style={{ color: "#d1d5db", fontSize: "18px" }}>
                Available for freelance & collaborations
              </span>
            </div>

            {/* Name */}
            <div
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "white",
                marginBottom: "10px",
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              Hi, I&apos;m{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                  marginLeft: "16px",
                }}
              >
                Haris Awan
              </span>
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: "28px",
                color: "#9ca3af",
                marginBottom: "40px",
                lineHeight: 1.4,
              }}
            >
              A passionate{" "}
              <span style={{ color: "white", fontWeight: "500" }}>Full-Stack Developer</span>
              {" & "}
              <span style={{ color: "white", fontWeight: "500" }}>Agentic AI Engineer</span>
              {" "}building intelligent digital solutions
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "40px",
              }}
            >
              {[
                { value: "30+", label: "Projects Completed" },
                { value: "6+", label: "Years Experience" },
                { value: "20+", label: "Technologies" },
                { value: "AI", label: "Powered Solutions" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Profile circle with gradient border */}
            <div
              style={{
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
                padding: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#030014",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "120px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                HA
              </div>
            </div>

            {/* Floating badges */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-20px",
                padding: "12px 24px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Next.js
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-10px",
                left: "-30px",
                padding: "12px 24px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Python
            </div>
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-40px",
                transform: "translateY(-50%)",
                padding: "12px 24px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Agentic AI
            </div>

            {/* Glow effect */}
            <div
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
