import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./component/Player";
import Chat from "./component/Chat";
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Player height="600px" width="100%" channel="detoo" />
      <Chat height="200" width="200" channel="detoo" />
    </div>
  );
}

export default App;
