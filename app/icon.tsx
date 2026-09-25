import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation matching the Hikmah Logo Emblem
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
          backgroundColor: "#102A24",
          borderRadius: "50%",
          border: "1.5px solid #B69A5A",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Arch Peak */}
          <path
            d="M12 2C8 6 6 8.5 6 12"
            stroke="#B69A5A"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M12 2C16 6 18 8.5 18 12"
            stroke="#B69A5A"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Celestial Star */}
          <circle cx="12" cy="6.5" r="1" fill="#B69A5A" />

          {/* Open Quran Pages */}
          <path
            d="M12 19V11C10 9.5 7 9.5 4 10.5V17.5C7 16.5 10 16.5 12 18C14 16.5 17 16.5 20 17.5V10.5C17 9.5 14 9.5 12 11"
            stroke="#B69A5A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Quran Spine / Base Stand */}
          <path
            d="M9 20L12 18L15 20"
            stroke="#B69A5A"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
