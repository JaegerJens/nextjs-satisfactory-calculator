import { useCallback, useState } from "react";

export interface RevealButtonProps {
  secret: string;
}

export const RevealButton = ({ secret }: RevealButtonProps) => {
  const [revealed, setReveal] = useState(false);
  const onClick = useCallback(() => {
    setReveal(true);
  }, []);

  if (revealed) {
    return <div>{secret}</div>;
  }
  return <button onClick={onClick}>Reveal</button>;
};
