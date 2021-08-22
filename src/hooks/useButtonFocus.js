import { useState, useEffect } from "react";

export const useButtonFocus = () => {
  const [isFocused, setIsFocused] = useState(null);

  useEffect(() => {
    if (isFocused) setIsFocused(true);
    return () => {
      setIsFocused(false);
    };
  }, [isFocused]);

  return {
    isFocused,
    setIsFocused,
  };
};
