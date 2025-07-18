import ApplyScrapPage from "./pages/ApplyScrapPage";
import GreetingPage from "./pages/GreetingPage";
import QuotationPage from "./pages/QuotationPage";
import ScrapCompletePage from "./pages/ScrapCompletePage";
import { useState } from "react";

function App() {
  const [stage, setStage] = useState(1);
  const [count1, setCount1] = useState(0);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [dark, setDark] = useState(false);
  const [num, setNum] = useState(0);
  const prevStage = () => {
    setStage(stage - 1);
  };

  const nextStage = () => {
    setStage(stage + 1);
  };

  const countUp = () => {
    setCount1(count1 + 1);
  };

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>

      <button className="bg-blue-500 p-4 m-4" onClick={countUp}>
        카운트 증가{count1}
      </button>

      <button className="bg-blue-500 p-4 m-4" onClick={prevStage}>
        이전
      </button>

      <span>{stage}</span>

      <button className="bg-blue-500 p-4 m-4" onClick={nextStage}>
        다음
      </button>

      {stage === 1 && <GreetingPage />}
      {stage === 2 && <ApplyScrapPage />}
      {stage === 3 && <QuotationPage />}
      {stage === 4 && <ScrapCompletePage />}

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>안녕하세요, {name}님! </p>

      <button onClick={() => setDark(!dark)}>
        테마: {dark ? "다크" : "라이트"}
      </button>

      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
}
export default App;
