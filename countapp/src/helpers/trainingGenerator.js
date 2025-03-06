import { generateDynamicTray } from "./trayGenerators";



export function generateTrainingData(numPages, cookieCounts) {

    // Default values
    const defaultMin = 1;
    const defaultMax = 10;
    const defaultNumProblems = 3;
    const defaultDifficulty = "Easy";
    const defaultPlacement = "Dynamic";

    // Get stored values
    const storedValues = localStorage.getItem("selectValuesPageAnswers");

    let min, max, numProblems, difficulty, placement;

    // Set values to stored values
    if (storedValues) {
      const values = JSON.parse(storedValues);
      min = values.range && values.range.min !== undefined ? values.range.min : defaultMin;
      max = values.range && values.range.max !== undefined ? values.range.max : defaultMax;
      numProblems = values.numProblems !== undefined ? values.numProblems : defaultNumProblems;
      difficulty = values.difficulty || defaultDifficulty;
      placement = values.placement || defaultPlacement;
    } else {
      min = defaultMin;
      max = defaultMax;
      numProblems = defaultNumProblems;
      difficulty = defaultDifficulty;
      placement = defaultPlacement;
    }

    const trayW = 300,
    trayH = 400,
    cookieW = 60,
    cookieH = 60,
    padding = 20,
    minGap = cookieW * 1.1;

  const pages = [];

  for (let i = 0; i < numPages; i++) {
    const cookieAmount = cookieCounts[i] || 1;

    // generate layouts
    if (placement === "Static") {
    
    }
    const leftTrayCookies = generateDynamicTray(cookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
    const greenTrayCookies = generateDynamicTray(cookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);
    const purpleTrayCookies = generateDynamicTray(cookieAmount, trayW, trayH, cookieW, cookieH, padding, minGap);

    // Messages for TTS
    const plural = cookieAmount > 1 ? "s" : "";
    pages.push({
      message: [
        `Cookie Monster has ${cookieAmount} cookie${plural}. Can Big Bird also have ${cookieAmount} cookie${plural}? Which tray has ${cookieAmount} cookie${plural}? Green? or purple?`
      ],
      message1: [
        `Cookie Monster has ${cookieAmount} cookie${plural}. Let's count together!`
      ],
      message2: [
        `Can Big Bird also have ${cookieAmount} cookie${plural}? Which tray has ${cookieAmount} cookie${plural}? Green? or purple?`
      ],
      cookies: leftTrayCookies.map((cookie, index) => ({
        id: index,
        img: require("../assests/seashellCookie.png"),
        top: cookie.top,
        left: cookie.left
      })),
      greenTray: [
        {
          biscuits: greenTrayCookies.map((cookie, index) => ({
            id: index,
            img: require("../assests/multiCookie.png"),
            top: cookie.top,
            left: cookie.left
          }))
        }
      ],
      purpleTray: [
        {
          biscuits: purpleTrayCookies.map((cookie, index) => ({
            id: index,
            img: require("../assests/multiCookie.png"),
            top: cookie.top,
            left: cookie.left
          }))
        }
      ]
    });
  }

  return { pages };
}