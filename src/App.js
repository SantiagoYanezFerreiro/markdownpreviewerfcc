import logo from "./logo.svg";
import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <div id="preview">{marked.parse(text)}</div>
      <div>aaa</div>
    </div>
  );
}

export default App;
