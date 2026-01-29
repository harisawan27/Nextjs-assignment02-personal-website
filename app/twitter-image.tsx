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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            padding: "40px",
          }}
        >
          {/* Avatar circle with gradient border */}
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
              padding: "4px",
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                fontSize: "60px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              HA
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Haris Awan
          </div>

          {/* Title with gradient */}
          <div
            style={{
              fontSize: "32px",
              fontWeight: "600",
              background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Full Stack Developer & Agentic AI Engineer
          </div>

          {/* Tech stack badges */}
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["Next.js", "Python", "TypeScript", "AI/ML", "React"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "10px 24px",
                  borderRadius: "50px",
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Website URL */}
          <div
            style={{
              marginTop: "40px",
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.6)",
            }}
          >
            harisawan.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
