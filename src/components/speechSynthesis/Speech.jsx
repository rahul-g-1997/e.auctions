import { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import {
  RecordVoiceOverOutlined,
  VoiceOverOff,
  SettingsOutlined,
} from "@mui/icons-material";
import Dialog from "./Dialog";
import  Style from "./speech.module.css";

export default function Speech() {
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  const onEnd = () => {
    setHighlightedText("");
  };
  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd,
  });

  const voice = voices[voiceIndex] || null;

  const handleTextSet = () => {
    const text = window.getSelection().toString();
    if (text !== "") setHighlightedText(text);
  };

  // setting highlightedText state when text has been highlighted
  useEffect(() => {
    document.addEventListener("mouseup", handleTextSet);
    return () => {
      document.removeEventListener("mouseup", handleTextSet);
    };
  }, []);

  return (
    <div className={Style.app}>
      {supported && (
        <div className={Style.speechMenu}>
          {!speaking ? (
            <RecordVoiceOverOutlined
              onClick={() =>
                speak({ text: highlightedText, voice, rate, pitch })
              }
            />
          ) : (
            <VoiceOverOff onClick={cancel} />
          )}
          <SettingsOutlined onClick={() => setShowSpeechSettings(true)} />
        </div>
      )}

      <Dialog
        open={showSpeechSettings}
        onClose={() => setShowSpeechSettings(false)}
      >
        <div className="speechSettings">
          {/* VOices -- browser dependent */}
          <select
            name="voice"
            value={voiceIndex || ""}
            onChange={(e) => {
              setVoiceIndex(e.target.value);
            }}
          >
            {voices.map((option, index) => (
              <option key={option.voiceURI} value={index}>
                {`${option.lang} - ${option.name} ${
                  option.default ? "- Default" : ""
                }`}
              </option>
            ))}
          </select>
          <div className={Style.rangeContainer}>
            <div>
              <label htmlFor="rate">Rate: </label>
              <span>{rate}</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={rate}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
          </div>
          <div className={Style.rangeContainer}>
            <div>
              <label htmlFor="pitch">Pitch: </label>
              <span>{pitch}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={pitch}
              id="pitch"
              onChange={(event) => {
                setPitch(event.target.value);
              }}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
