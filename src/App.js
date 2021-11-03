import React, { useState } from "react";
import EmojiContainer from "./components/EmojiContainer";
import Header from "./components/Header";
import emojiList from "./json/emoji.json";
import "./components/style.scss";
function App() {
  const [emojisList, setEmojisList] = useState(emojiList);

  const searchEmojis = (e) => {
    console.log(e.target.value);
    let searchedEmojis = emojiList.filter((emoji) =>
      emoji.keywords.includes(e.target.value)
    );
    setEmojisList(searchedEmojis);
  };
  return (
    <div className="App">
      <Header />
      <div className="search">
        <input type="text" name="search" onChange={searchEmojis} />
      </div>
      <EmojiContainer emojisList={emojisList} />
    </div>
  );
}

export default App;
