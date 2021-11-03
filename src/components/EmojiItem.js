import React from "react";
import "./style.scss";
import ReactClipboard from "react-clipboard-simple";
export default function EmojiItem(props) {
  return (
    <ReactClipboard keyword={props.symbol}>
      <div className="emojiList">
        <h1>{props.symbol}</h1>
      </div>
    </ReactClipboard>
  );
}
