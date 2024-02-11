import { useSpeechSynthesis } from "react-speech-kit";

const useHoverSpeech = () => {
  const { speak, cancel } = useSpeechSynthesis();

  const handleMouseOver = (event) => {
    const hoveredText = event.target.textContent.trim();
    speak({ text: hoveredText });
  };

  const handleMouseOut = () => {
    cancel(); // Stop speech synthesis when mouse leaves
  };

  return { handleMouseOver, handleMouseOut };
};

export default useHoverSpeech;
