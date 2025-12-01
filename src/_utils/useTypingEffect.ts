import { useCallback, useRef, useState } from "react";

export default function useTypingEffect({
  textArray,
}: {
  textArray: string[];
}) {
  const TYPING_DELAY = 200;
  const ERASING_DELAY = 100;
  const NEW_TEXT_DELAY = 2000; // Delay between current and next text

  const [isTyping, setIsTyping] = useState(false);
  const [typedTextContent, setTypedTextContent] = useState("");
  const charIndexRef = useRef(0);
  const textArrayIndexRef = useRef(0);

  const type = useCallback(() => {
    if (charIndexRef.current < textArray[textArrayIndexRef.current].length) {
      if (!isTyping) {
        setIsTyping(true);
      }

      setTypedTextContent(
        (prev) =>
          prev +
          textArray[textArrayIndexRef.current].at(charIndexRef.current - 1)
      );
      charIndexRef.current++;
      setTimeout(type, TYPING_DELAY);
    } else {
      setIsTyping(false);
      setTimeout(erase, NEW_TEXT_DELAY);
    }
  }, [isTyping]);

  const erase = useCallback(() => {
    if (charIndexRef.current > 0) {
      if (!isTyping) {
        setIsTyping(true);
      }
      charIndexRef.current--;
      setTypedTextContent(
        textArray[textArrayIndexRef.current].slice(0, charIndexRef.current)
      );
      setTimeout(erase, ERASING_DELAY);
    } else {
      setIsTyping(false);
      textArrayIndexRef.current =
        textArrayIndexRef.current + 1 >= textArray.length
          ? 0
          : textArrayIndexRef.current + 1;
      setTypedTextContent("");
      setTimeout(type, TYPING_DELAY + 1100);
    }
  }, [isTyping, type]);

  const initTypingAnimation = useCallback(() => {
    if (textArray.length) {
      setTimeout(type, NEW_TEXT_DELAY + 250);
    }
  }, [type]);

  return { initTypingAnimation, isTyping, typedTextContent };
}
