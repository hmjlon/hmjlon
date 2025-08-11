import React, { useId, useState } from "react";

export default function IdExample() {
  const [name, setName] = useState(""); // 상태 선언
  const id = useId(); // 고유한 ID 생성

  return (
    <div>
      <label htmlFor={id}>id: {id}, 이름 : </label>
      <input
        id={id}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
