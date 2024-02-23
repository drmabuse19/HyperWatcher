import React from "react";

import TwitchChat from "./Twitch/Chat";
interface PlayerProps {
  channel: string;
  width: string;
  height: string;
}
export default function Chat({ channel, width, height }: PlayerProps) {
  return (
    <div>
      <TwitchChat ch={channel} />
    </div>
  );
}
