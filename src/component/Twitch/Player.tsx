import React, { useRef } from "react";
import { TwitchPlayer } from "react-twitch-embed";
interface PlayerProps {
  ch: string;
  h: string;
  w: string;
}

export default function Player({ ch, h, w }: PlayerProps) {
  const embed = useRef(); // We use a ref instead of state to avoid rerenders.

  const handleReady = (e: any) => {
    embed.current = e;
  };
  return (
    <TwitchPlayer
      height={h}
      width={w}
      channel={ch}
      autoplay
      muted
      onReady={handleReady}
    />
  );
}
