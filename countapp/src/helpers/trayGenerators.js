// Positions for cookies for static tray allocation
const cookiePositions = {
    1: [
      { x: 120, y: 170 }
    ],
    2: [
      { x: 70, y: 170 },
      { x: 170, y: 170 }
    ],
    3: [
      { x: 45, y: 170 },
      { x: 120, y: 170 },
      { x: 195, y: 170 }
    ],
    4: [
      { x: 70, y: 103 },
      { x: 170, y: 103 },
      { x: 70, y: 236 },
      { x: 170, y: 236 }
    ],
    5: [
      { x: 70, y: 103 },
      { x: 170, y: 103 },
      { x: 70, y: 236 },
      { x: 170, y: 236 },
      { x: 120, y: 170 }
    ],
    6: [
      { x: 45, y: 103 },
      { x: 120, y: 103 },
      { x: 195, y: 103 },
      { x: 45, y: 236 },
      { x: 120, y: 236 },
      { x: 195, y: 236 }
    ],
    7: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 120, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    8: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 70, y: 170 },
      { x: 170, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    9: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 45, y: 170 },
      { x: 120, y: 170 },
      { x: 195, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ],
    10: [
      { x: 45, y: 70 },
      { x: 120, y: 70 },
      { x: 195, y: 70 },
      { x: 30, y: 170 },
      { x: 90, y: 170 },
      { x: 150, y: 170 },
      { x: 210, y: 170 },
      { x: 45, y: 270 },
      { x: 120, y: 270 },
      { x: 195, y: 270 }
    ]
  };


  // Function to generate DynamicTray
  export function generateDynamicTray(numCookies, trayW, trayH, cookieW, cookieH, padding, minGap) {
    let placedCookies = [];
  
    for (let i = 0; i < numCookies; i++) {
      let newCookie;
      let tries = 0, maxTries = 100;
  
      while (tries < maxTries) {
        newCookie = {
          x: Math.random() * (trayW - cookieW - 2 * padding) + padding,
          y: Math.random() * (trayH - cookieH - 2 * padding) + padding
        };
        
        // Check for overlap
        const tooClose = placedCookies.some(existing => {
          const dx = existing.x - newCookie.x;
          const dy = existing.y - newCookie.y;
          return Math.sqrt(dx * dx + dy * dy) < minGap;
        });
  
        if (!tooClose) break;
        tries++;
      }
      placedCookies.push(newCookie);
    }
  
    // Map the positions into render-friendly values
    return placedCookies.map((cookie, index) => ({
      id: index,
      left: `${Math.round(cookie.x)}px`,
      top: `${Math.round(cookie.y)}px`
    }));
  }

