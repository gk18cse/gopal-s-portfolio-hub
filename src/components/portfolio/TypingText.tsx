import { useEffect, useState } from "react";

export function TypingText({ words, speed = 90, pause = 1400 }: { words: string[]; speed?: number; pause?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDeleting(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((v) => v + 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words, speed, pause]);

  return <span className="caret text-gradient font-semibold">{text}</span>;
}
