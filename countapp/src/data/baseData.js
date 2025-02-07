// Define counting cases
// Maybe make this more dynamic?
const baseData ={
    pages: [
        {
            message:[" Cookie Monster has 10 cookies. Can Big Bird also have 10 cookies? Which tray has 10 cookies? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: require("../assests/Cookie.png"),
                top: "25px",
                left: "40px",
              },
              {
                id: 2,
                img: require("../assests/Cookie.png"),
                top: "20px",
                left: "150px",
              },
              {
                id: 3,
                img: require("../assests/Cookie.png"),
                top: "90px",
                left: "80px",
              },
              {
                id: 4,
                img: require("../assests/Cookie.png"),
                top: "80px",
                left: "170px",
              },
              {
                id: 5,
                img: require("../assests/Cookie.png"),
                top: "140px",
                left: "20px",
              },
              {
                id: 6,
                img: require("../assests/Cookie.png"),
                top: "140px",
                left: "160px",
              },
              {
                id: 7,
                img: require("../assests/Cookie.png"),
                top: "195px",
                left: "60px",
              },
              {
                id: 8,
                img: require("../assests/Cookie.png"),
                top: "210px",
                left: "180px",
              },
              {
                id: 9,
                img: require("../assests/Cookie.png"),
                top: "260px",
                left: "40px",
              },
              {
                id: 10,
                img: require("../assests/Cookie.png"),
                top: "290px",
                left: "150px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/rasinCookie.png"),
                    top: "5px",
                    left: "40px",
                  },
                  {
                    id: 2,
                    img: require("../assests/rasinCookie.png"),
                    top: "60px",
                    left: "40px",
                  },
                  {
                    id: 3,
                    img: require("../assests/rasinCookie.png"),
                    top: "50px",
                    left: "130px",
                  },
                  {
                    id: 4,
                    img: require("../assests/rasinCookie.png"),
                    top: "100px",
                    left: "200px",
                  },
                  {
                    id: 5,
                    img: require("../assests/rasinCookie.png"),
                    top: "125px",
                    left: "50px",
                  },
                  {
                    id: 6,
                    img: require("../assests/rasinCookie.png"),
                    top: "160px",
                    left: "180px",
                  },
                  {
                    id: 7,
                    img: require("../assests/rasinCookie.png"),
                    top: "190px",
                    left: "50px",
                  },
                  {
                    id: 8,
                    img: require("../assests/rasinCookie.png"),
                    top: "220px",
                    left: "140px",
                  },
                  {
                    id: 9,
                    img: require("../assests/rasinCookie.png"),
                    top: "290px",
                    left: "140px",
                  },
                  {
                    id: 10,
                    img: require("../assests/rasinCookie.png"),
                    top: "290px",
                    left: "50px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/rasinCookie.png"),
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: require("../assests/rasinCookie.png"),
                    top: "90px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: require("../assests/rasinCookie.png"),
                    top: "160px",
                    left: "50px",
                  },
                  {
                    id: 4,
                    img: require("../assests/rasinCookie.png"),
                    top: "200px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: require("../assests/rasinCookie.png"),
                    top: "260px",
                    left: "50px",
                  },
                ],
              },
            ],
          },
          {
            message:[" Cookie Monster has 5 cookies. Can Big Bird also have 5 cookies? Which tray has 5 cookies? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: require("../assests/creamCookie.png"),
                top: "25px",
                left: "40px",
              },
              {
                id: 2,
                img: require("../assests/creamCookie.png"),
                top: "70px",
                left: "150px",
              },
              {
                id: 3,
                img: require("../assests/creamCookie.png"),
                top: "130px",
                left: "50px",
              },
              {
                id: 4,
                img: require("../assests/creamCookie.png"),
                top: "180px",
                left: "170px",
              },
              {
                id: 5,
                img: require("../assests/creamCookie.png"),
                top: "250px",
                left: "70px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/heartCookie.png"),
                    top: "25px",
                    left: "50px",
                  },
                  {
                    id: 2,
                    img: require("../assests/heartCookie.png"),
                    top: "40px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: require("../assests/heartCookie.png"),
                    top: "100px",
                    left: "20px",
                  },
                  {
                    id: 4,
                    img: require("../assests/heartCookie.png"),
                    top: "110px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: require("../assests/heartCookie.png"),
                    top: "160px",
                    left: "90px",
                  },
                  {
                    id: 6,
                    img: require("../assests/heartCookie.png"),
                    top: "180px",
                    left: "190px",
                  },
                  {
                    id: 7,
                    img: require("../assests/heartCookie.png"),
                    top: "210px",
                    left: "30px",
                  },
                  {
                    id: 8,
                    img: require("../assests/heartCookie.png"),
                    top: "240px",
                    left: "150px",
                  },
                  {
                    id: 9,
                    img: require("../assests/heartCookie.png"),
                    top: "280px",
                    left: "90px",
                  },
                  {
                    id: 10,
                    img: require("../assests/heartCookie.png"),
                    top: "300px",
                    left: "190px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/heartCookie.png"),
                    top: "25px",
                    left: "150px",
                  },
                  {
                    id: 2,
                    img: require("../assests/heartCookie.png"),
                    top: "90px",
                    left: "50px",
                  },
                  {
                    id: 3,
                    img: require("../assests/heartCookie.png"),
                    top: "150px",
                    left: "140px",
                  },
                  {
                    id: 4,
                    img: require("../assests/heartCookie.png"),
                    top: "200px",
                    left: "50px",
                  },
                  {
                    id: 5,
                    img: require("../assests/heartCookie.png"),
                    top: "260px",
                    left: "150px",
                  },
                ],
              },
            ],
          },
          {
            message:[" Cookie Monster has 5 cookies. Can Big Bird also have 5 cookies? Which tray has 5 cookies? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: require("../assests/PinkCookie.png"),
                top: "25px",
                left: "40px",
              },
              {
                id: 2,
                img: require("../assests/PinkCookie.png"),
                top: "70px",
                left: "150px",
              },
              {
                id: 3,
                img: require("../assests/PinkCookie.png"),
                top: "140px",
                left: "40px",
              },
              {
                id: 4,
                img: require("../assests/PinkCookie.png"),
                top: "180px",
                left: "170px",
              },
              {
                id: 5,
                img: require("../assests/PinkCookie.png"),
                top: "270px",
                left: "90px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/oreo.png"),
                    top: "30px",
                    left: "40px",
                  },
                  {
                    id: 2,
                    img: require("../assests/oreo.png"),
                    top: "10px",
                    left: "150px",
                  },
                  {
                    id: 3,
                    img: require("../assests/oreo.png"),
                    top: "90px",
                    left: "40px",
                  },
                  {
                    id: 4,
                    img: require("../assests/oreo.png"),
                    top: "70px",
                    left: "150px",
                  },
                  {
                    id: 5,
                    img: require("../assests/oreo.png"),
                    top: "150px",
                    left: "40px",
                  },
                  {
                    id: 6,
                    img: require("../assests/oreo.png"),
                    top: "140px",
                    left: "160px",
                  },
                  {
                    id: 7,
                    img: require("../assests/oreo.png"),
                    top: "210px",
                    left: "80px",
                  },
                  {
                    id: 8,
                    img: require("../assests/oreo.png"),
                    top: "230px",
                    left: "180px",
                  },
                  {
                    id: 9,
                    img: require("../assests/oreo.png"),
                    top: "260px",
                    left: "40px",
                  },
                  {
                    id: 10,
                    img: require("../assests/oreo.png"),
                    top: "290px",
                    left: "150px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/oreo.png"),
                    top: "25px",
                    left: "90px",
                  },
                  {
                    id: 2,
                    img: require("../assests/oreo.png"),
                    top: "140px",
                    left: "50px",
                  },
                  {
                    id: 3,
                    img: require("../assests/oreo.png"),
                    top: "130px",
                    left: "160px",
                  },
                  {
                    id: 4,
                    img: require("../assests/oreo.png"),
                    top: "220px",
                    left: "170px",
                  },
                  {
                    id: 5,
                    img: require("../assests/oreo.png"),
                    top: "260px",
                    left: "50px",
                  },
                ],
              },
            ],
          },
          {
            message:[" Cookie Monster has 10 cookies. Can Big Bird also have 10 cookies? Which tray has 10 cookies? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: require("../assests/yellowcookie.png"),
                top: "30px",
                left: "10px",
              },
              {
                id: 2,
                img: require("../assests/yellowcookie.png"),
                top: "10px",
                left: "180px",
              },
              {
                id: 3,
                img: require("../assests/yellowcookie.png"),
                top: "90px",
                left: "90px",
              },
              {
                id: 4,
                img: require("../assests/yellowcookie.png"),
                top: "120px",
                left: "170px",
              },
              {
                id: 5,
                img: require("../assests/yellowcookie.png"),
                top: "150px",
                left: "20px",
              },
              {
                id: 6,
                img: require("../assests/yellowcookie.png"),
                top: "195px",
                left: "95px",
              },
              {
                id: 7,
                img: require("../assests/yellowcookie.png"),
                top: "200px",
                left: "180px",
              },
              {
                id: 8,
                img: require("../assests/yellowcookie.png"),
                top: "280px",
                left: "20px",
              },
              {
                id: 9,
                img: require("../assests/yellowcookie.png"),
                top: "320px",
                left: "90px",
              },
              {
                id: 10,
                img: require("../assests/yellowcookie.png"),
                top: "290px",
                left: "170px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/donut.png"),
                    top: "10px",
                    left: "60px",
                  },
                  {
                    id: 2,
                    img: require("../assests/donut.png"),
                    top: "20px",
                    left: "170px",
                  },
                  {
                    id: 3,
                    img: require("../assests/donut.png"),
                    top: "90px",
                    left: "40px",
                  },
                  {
                    id: 4,
                    img: require("../assests/donut.png"),
                    top: "80px",
                    left: "140px",
                  },
                  {
                    id: 5,
                    img: require("../assests/donut.png"),
                    top: "160px",
                    left: "50px",
                  },
                  {
                    id: 6,
                    img: require("../assests/donut.png"),
                    top: "140px",
                    left: "150px",
                  },
                  {
                    id: 7,
                    img: require("../assests/donut.png"),
                    top: "200px",
                    left: "140px",
                  },
                  {
                    id: 8,
                    img: require("../assests/donut.png"),
                    top: "270px",
                    left: "40px",
                  },
                  {
                    id: 9,
                    img: require("../assests/donut.png"),
                    top: "250px",
                    left: "190px",
                  },
                  {
                    id: 10,
                    img: require("../assests/donut.png"),
                    top: "300px",
                    left: "120px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: require("../assests/donut.png"),
                    top: "25px",
                    left: "170px",
                  },
                  {
                    id: 2,
                    img: require("../assests/donut.png"),
                    top: "60px",
                    left: "90px",
                  },
                  {
                    id: 3,
                    img: require("../assests/donut.png"),
                    top: "120px",
                    left: "50px",
                  },
                  {
                    id: 4,
                    img: require("../assests/donut.png"),
                    top: "160px",
                    left: "170px",
                  },
                  {
                    id: 5,
                    img: require("../assests/donut.png"),
                    top: "260px",
                    left: "70px",
                  },
                ],
              },
            ],
          },

    ]
};

export default baseData;