import { useState } from "react";

const useVisualMode = (initialMode) => {
  const [history, setHistory] = useState([initialMode]);
  const transition = (newMode, replace = false) => {

    !replace
      ?
      setHistory((prev) => [...prev, newMode])
      :
      setHistory((prev) => [...prev.slice(0, prev.length - 1), newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  };
  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;