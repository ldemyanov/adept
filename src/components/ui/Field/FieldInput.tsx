import React, { useState, KeyboardEvent, useRef, useEffect } from "react";

type FieldInputProps = {
  previousValue: string;
  acceptChange: (newValue: string) => void;
};

const FieldInput: React.FC<FieldInputProps> = ({ previousValue, acceptChange }) => {
  const [text, setText] = useState<string>(previousValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.addEventListener("click", outerClickByInput, { capture: true });
    () => removeEventListener("click", outerClickByInput, { capture: true });
  }, []);

  const updateValue = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      acceptChange(text);
    }
  };

  const clickByInput = (event: React.MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
  };

  const outerClickByInput = (event: MouseEvent) => {
    if (event.target !== inputRef.current) {
      acceptChange(text);
      removeEventListener("click", outerClickByInput, { capture: true });
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue={text}
      onKeyDown={updateValue}
      onChange={(event) => setText(event.target.value)}
      onClick={clickByInput}
    />
  );
};

export default FieldInput;
