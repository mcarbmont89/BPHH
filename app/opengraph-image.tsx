import { ImageResponse } from "next/og"

export const alt = "Botic Partners · Headhunting y selección de talento con IA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "72px 80px",
          background: "#1A1A2E",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>
          <div style={{ width: 20, height: 20, borderRadius: 10, background: "#4251f0", marginRight: 18 }} />
          Botic Partners
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Headhunting y selección de talento con IA
          </div>
          <div style={{ fontSize: 30, color: "#b8bdd6", marginTop: 28 }}>Europa y Latinoamérica · boticpartners.com</div>
        </div>
        <div style={{ height: 8, width: 160, background: "#4251f0", borderRadius: 4 }} />
      </div>
    ),
    size,
  )
}
