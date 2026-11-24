import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #312e81 100%)`,
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M62 16 C52 16, 48 24, 48 36 L44 68 C43 79, 39 84, 30 84" fill="none" stroke="#ffffff" strokeWidth={9} strokeLinecap="round" />
          <circle cx="66" cy="18" r="6" fill="#a5b4fc" />
          <circle cx="28" cy="82" r="6" fill="#a5b4fc" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 0.8,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
