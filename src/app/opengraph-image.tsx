import { ImageResponse } from "next/og";

export const alt = "Your First Keploy Tests in Go";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared (Slack, email, social).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 32, color: "#a1a1aa" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "#ea580c",
              color: "#fff",
              fontSize: 28,
            }}
          >
            ▶
          </div>
          Keploy + Go
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>Your First Keploy Tests in Go</div>
          <div style={{ fontSize: 34, color: "#a1a1aa" }}>
            Record real API traffic, replay it as tests. No test code, no database.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#fb923c" }}>
          keploy record → keploy test
        </div>
      </div>
    ),
    size,
  );
}
