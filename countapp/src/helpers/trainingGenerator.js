import { generateDynamicTray } from "./trayGenerators";



export function generateTrainingData(numPages, cookieCounts) {

    const storedValues = localStorage.getItem("selectValuesPageAnswers");

    if (storedValues) {
        const values = JSON.parse(storedValues);
        const { range: { min, max }, numProblems, difficulty, placement
        } = values;
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