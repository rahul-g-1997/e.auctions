// useHoverSpeech.js
import { useSpeechSynthesis } from "react-speech-kit";

const useHoverSpeech = () => {
  const { speak } = useSpeechSynthesis();

  const handleMouseOver = (event) => {
    const hoveredText = event.target.textContent.trim();
    speak({ text: hoveredText });
  };

  return { handleMouseOver };
};

export default useHoverSpeech;
