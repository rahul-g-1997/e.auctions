import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import {
  RecordVoiceOverOutlined,
  VoiceOverOff,
  SettingsOutlined,
} from "@mui/icons-material";

import Style from "./speech.module.css";

export default function Speech() {
  const [showSpeechSettings, setShowSpeechSettings] = useState(false);
  const [highlightedText, setHighlightedText] = useState("");
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis({
    onEnd: () => setHighlightedText("Please select the text you want to speak"),
  });

  const voice = voices[voiceIndex] || null;

  const handleMouseOver = (event) => {
    const hoveredText = event.target.textContent.trim();
    speak({ text: hoveredText });
  };

  const handleVoiceChange = (e) => {
    setVoiceIndex(e.target.value);
  };

  const handleRateChange = (e) => {
    setRate(e.target.value);
  };

  const handlePitchChange = (e) => {
    setPitch(e.target.value);
  };

  return (
    <div className={Style.container}>
      <div className={Style.aside2}>
        <div
          className={`${Style.speech} ${
            showSpeechSettings ? Style.expanded : ""
          }`}
        >
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
              <SettingsOutlined
                onClick={() => setShowSpeechSettings(!showSpeechSettings)}
              />
            </div>
          )}
        </div>
        {showSpeechSettings && (
          <div className={Style.dialog}>
            <label htmlFor="rate"> Languages : </label>
            <select
              name="voice"
              value={voiceIndex || ""}
              onChange={handleVoiceChange}
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
                <label htmlFor="rate">Speaking speed : </label>
                <span>{rate}</span>&nbsp;&nbsp;
                <input
                  type="range"
                  min="0.5"
                  max="2"
                  step="0.1"
                  value={rate}
                  onChange={handleRateChange}
                />
              </div>
            </div>
            <div className={Style.rangeContainer}>
              <div>
                <label htmlFor="pitch">Pitch : </label>
                <span>{pitch}</span>&nbsp;&nbsp;
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={pitch}
                  id="pitch"
                  onChange={handlePitchChange}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Added onMouseOver event handler to trigger speech */}
      <div className={Style.content} onMouseOver={handleMouseOver}>
        {/* Your content here */}
        Testing
      </div>
    </div>
  );
}
