import logo from "./logo.svg";
import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)


  **bold text**
  `);
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
