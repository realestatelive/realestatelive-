import { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import styles from "@/styles/VoiceSearch.module.css";

const VoiceSearch = ({ onResult }: { onResult: (text: string) => void }) => {
  const [listening, setListening] = useState(false);
  let recognition: any;

  if (typeof window !== "undefined" && 'webkitSpeechRecognition' in window) {
    recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "ar-EG";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      onResult(text);
      setListening(false);
    };
    recognition.onend = () => setListening(false);
  }

  const startListening = () => {
    if (recognition) {
      setListening(true);
      recognition.start();
    }
  };
  const stopListening = () => {
    if (recognition) {
      setListening(false);
      recognition.stop();
    }
  };

  return (
    <button
      className={styles.voiceBtn}
      onClick={listening ? stopListening : startListening}
      type="button"
      title="بحث صوتي"
    >
      {listening ? <FaMicrophoneSlash /> : <FaMicrophone />} بحث صوتي
    </button>
  );
};

export default VoiceSearch;
