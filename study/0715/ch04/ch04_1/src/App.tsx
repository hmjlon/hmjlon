// App.tsx

import { useState } from "react";
import Clock from "./pages/Clock";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div>
      <h2>{"덧셈기"}</h2>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(parseInt(e.target.value))}
      />
      <span>{"+"}</span>
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(parseInt(e.target.value))}
      />
      <p>{`덧셈 결과는 : ${number1 + number2}`}</p>
    </div>
  );
}
