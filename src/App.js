import { useState } from "react";
import "./App.css";
import Line from "./components/Line";
import Search from "./components/Search";
import Data from "./emojiList_mar8cs.json";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <Search text={text} setText={setText} />
      <div>
        {Data.map((emoji, index) => {
          return (
            emoji.keywords.includes(text.toLowerCase()) && (
              <Line emoji={emoji} />
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
