import React from "react";
import { TwitchChat } from "react-twitch-embed";
interface ChatProps {
  ch: string;
}
export default function Chat({ ch }: ChatProps) {
  return <TwitchChat channel={ch} />;
}
