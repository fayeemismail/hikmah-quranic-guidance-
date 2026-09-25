import React from "react";
import {
  LuCompass,
  LuHeartHandshake,
  LuShieldCheck,
  LuSprout,
  LuFlame,
  LuBookOpen,
  LuHourglass,
  LuSun,
  LuFeather,
  LuMountain,
  LuSparkles,
} from "react-icons/lu";

interface TopicIconProps {
  name: string;
  className?: string;
}

export default function TopicIcon({ name, className = "w-5 h-5" }: TopicIconProps) {
  switch (name) {
    case "compass":
      return <LuCompass className={className} aria-hidden="true" />;
    case "heart-handshake":
      return <LuHeartHandshake className={className} aria-hidden="true" />;
    case "shield-check":
      return <LuShieldCheck className={className} aria-hidden="true" />;
    case "sprout":
      return <LuSprout className={className} aria-hidden="true" />;
    case "flame":
      return <LuFlame className={className} aria-hidden="true" />;
    case "book-open":
      return <LuBookOpen className={className} aria-hidden="true" />;
    case "hourglass":
      return <LuHourglass className={className} aria-hidden="true" />;
    case "sunrise":
    case "sun":
      return <LuSun className={className} aria-hidden="true" />;
    case "feather":
      return <LuFeather className={className} aria-hidden="true" />;
    case "mountain":
      return <LuMountain className={className} aria-hidden="true" />;
    default:
      return <LuSparkles className={className} aria-hidden="true" />;
  }
}
