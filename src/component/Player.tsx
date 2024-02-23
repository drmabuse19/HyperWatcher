import React from "react";
import TwitchPlayer from "./Twitch/Player";

interface PlayerProps {
  channel: string;
  width: string;
  height: string;
}
export default function Player({ channel, width, height }: PlayerProps) {
  return <TwitchPlayer h={height} w={width} ch={channel} />;
}
