import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  console.log(`call App() -> ${text}`);
  return (
    <div>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => setText("")}>Limpar</button>
      <p>O texto digitado possui {text.length} caracteres.</p>
    </div>
  );
}
