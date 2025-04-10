import React, { useState, useEffect, useRef } from "react";
import "../styles/base.css";
import BlueTray from "../assests/greenTray.png";
import CookieImg from "../assests/creamCookie.png";
import { generateDynamicTray } from "../helpers/trayGenerators";

const STTTest = () => {
  const trayW = 300;
  const trayH = 400;
  const cookieW = 60;
  const cookieH = 60;
  const padding = 20;
  const minGap = cookieW * 1.1;

  const [numCookies, setNumCookies] = useState(5);
  const [cookiesPositions, setCookiesPositions] = useState([]);

  const [transcript, setTranscript] = useState("");
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  // Dynamic Tray positions
  useEffect(() => {
    const positions = generateDynamicTray(numCookies, trayW, trayH, cookieW, cookieH, padding, minGap);
    setCookiesPositions(positions);
  }, [numCookies, trayW, trayH, cookieW, cookieH, padding, minGap]);

  // Dropdown menu
  const handleNumCookiesChange = (e) => {
    setNumCookies(parseInt(e.target.value, 10));
  };

  // Start speech recongition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("Browser does not support Speech Recognition.");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = "";
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptSegment = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptSegment;
        } else {
          interimTranscript += transcriptSegment;
        }
      }
      setTranscript(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognitionRef.current = recognition;
  }, []);

  // Toggle on and off
  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div
      className="stt-test"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="numCookies">Select number of cookies: </label>
        <select id="numCookies" value={numCookies} onChange={handleNumCookiesChange}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div style={{ position: "relative", width: `${trayW}px`, height: `${trayH}px` }}>
        <img src={BlueTray} alt="Tray" style={{ width: "100%", height: "100%" }} />
        {cookiesPositions.map((cookie) => (
          <img
            key={cookie.id}
            src={CookieImg}
            alt={`Cookie ${cookie.id}`}
            style={{
              position: "absolute",
              left: cookie.left,
              top: cookie.top,
              width: `${cookieW}px`,
              height: `${cookieH}px`
            }}
          />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={toggleListening}>
          {listening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      <div style={{ marginTop: "20px", width: "80%", textAlign: "center" }}>
        <h2>Transcript</h2>
        <p>{transcript}</p>
      </div>
    </div>
  );
};

export default STTTest;
