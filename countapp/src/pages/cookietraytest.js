import React, { useState, useEffect } from "react";
import "../styles/base.css";

// Import assets
import TrayImg from "../assests/greenTray.png";
import CookieImg from "../assests/creamCookie.png";

const CookieTrayTestPage = () => {
  // Dimensions
  const trayW = 300, trayH = 400;
  const cookieW = 60, cookieH = 60;
  const padding = 20;
  const minGap = cookieW * 1.1;

  const [cookies, setCookies] = useState([]);

  useEffect(() => {
    const numCookies = Math.floor(Math.random() * 10) + 1;
    let placedCookies = [];

    for (let i = 0; i < numCookies; i++) {
      let newCookie;
      let tries = 0, maxTries = 100; // Give up after too many tries

      while (tries < maxTries) {
        newCookie = {
          x: Math.random() * (trayW - cookieW - 2 * padding) + padding,
          y: Math.random() * (trayH - cookieH - 2 * padding) + padding
        };

        // Check for overlap
        let tooClose = placedCookies.some(existing => {
          let dx = existing.x - newCookie.x;
          let dy = existing.y - newCookie.y;
          return Math.sqrt(dx * dx + dy * dy) < minGap;
        });

        if (!tooClose) break;
        tries++;
      }

      // Store the cookie's position
      placedCookies.push(newCookie);
    }

    // Convert positions for rendering
    setCookies(placedCookies.map((cookie, index) => ({
      id: index,
      left: `${Math.round(cookie.x)}px`,
      top: `${Math.round(cookie.y)}px`
    })));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Cookie Tray</h1>
      <div
        style={{
          position: "relative",
          width: `${trayW}px`,
          height: `${trayH}px`,
          margin: "0 auto"
        }}
      >
        <img src={TrayImg} alt="Tray" style={{ width: `${trayW}px`, height: `${trayH}px`, display: "block" }} />

        {cookies.map(cookie => (
          <img
            key={cookie.id}
            src={CookieImg}
            alt="Cookie"
            style={{
              position: "absolute",
              top: cookie.top,
              left: cookie.left,
              width: `${cookieW}px`,
              height: `${cookieH}px`
            }}
          />
        ))}
      </div>
      <p>Total Cookies: {cookies.length}</p>
    </div>
  );
};

export default CookieTrayTestPage;
