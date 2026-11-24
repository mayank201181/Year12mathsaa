import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #312e81 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M62 16 C52 16, 48 24, 48 36 L44 68 C43 79, 39 84, 30 84" fill="none" stroke="#ffffff" strokeWidth={10} strokeLinecap="round" />
          <circle cx="66" cy="18" r="6" fill="#a5b4fc" />
          <circle cx="28" cy="82" r="6" fill="#a5b4fc" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
