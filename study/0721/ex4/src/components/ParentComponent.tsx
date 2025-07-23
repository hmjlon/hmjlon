import React, { useRef } from "react";
import CustomInput from "./CustomInput";

export interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

export default function ParentComponent() {
  const InputRef = useRef<CustomInputHandle | null>(null);

  return (
    <div>
      <CustomInput ref={InputRef} />
      <button onClick={() => InputRef.current?.focus()}>포커스</button>
      <button onClick={() => InputRef.current?.clear()}>초기화</button>
    </div>
  );
}
