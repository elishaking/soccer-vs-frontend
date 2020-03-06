export default interface Player {
  name: string;
  league: {
    imageUrls: {
      light: string;
      dark: string;
    };
    name: string;
  };
  club: {
    name: string;
    imageUrl: string;
  };
  nation: {
    name: string;
    imageUrl: string;
  };
  headshot: string;
  position: string;
  positionFull: string;
  height: number;
  weight: number;
  birthdate: string;
  foot: string;
  rating: number;
  mainDetails: {
    acceleration: number;
    aggression: number;
    agility: number;
    balance: number;
    ballcontrol: number;
    skillMoves: number;
    crossing: number;
    curve: number;
    dribbling: number;
    freekickaccuracy: number;
    composure: number;
    finishing: number;
  };
  gk: any;
  more: any;
}

export const Ronaldo: Player = {
  league: {
    imageUrls: {
      dark:
        "https://www.easports.com/fifa/ultimate-team/web-app/content/ 7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/31.png",
      light:
        "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/light/31.png"
    },
    name: "Serie A TIM"
  },
  nation: {
    imageUrl:
      "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/38.png",
    name: "Portugal"
  },
  club: {
    imageUrl:
      "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/45.png",
    name: "Juventus"
  },
  headshot:
    "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/20801.png",
  position: "ST",
  height: 187,
  weight: 83,
  birthdate: "02/05/1985",
  foot: "Right",
  mainDetails: {
    acceleration: 95,
    aggression: 75,
    agility: 94,
    balance: 76,
    ballcontrol: 99,
    crossing: 98,
    curve: 95,
    dribbling: 95,
    finishing: 99,
    freekickaccuracy: 89,
    composure: 99,
    skillMoves: 5
  },
  gk: {
    gkdiving: 7,
    gkhandling: 11,
    gkkicking: 15,
    gkpositioning: 14,
    gkreflexes: 11
  },
  more: {
    headingaccuracy: 99,
    interceptions: 41,
    jumping: 99,
    longpassing: 90,
    longshots: 99,
    marking: 40,
    penalties: 90,
    positioning: 99,
    potential: 94,
    reactions: 99,
    shortpassing: 95,
    shotpower: 99,
    slidingtackle: 32,
    sprintspeed: 98,
    standingtackle: 44,
    stamina: 99,
    strength: 95,
    vision: 96,
    volleys: 92,
    weakFoot: 4
  },
  name: "Cristiano Ronaldo",
  positionFull: "Striker",
  rating: 99
};

export const Messi = {
  league: {
    imageUrls: {
      dark:
        "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/dark/53.png",
      light:
        "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/leagueLogos/light/53.png"
    },
    name: "LaLiga Santander"
  },
  nation: {
    imageUrl:
      "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/flags/list/52.png",
    name: "Argentina"
  },
  club: {
    imageUrl:
      "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/clubs/dark/241.png",
    name: "FC Barcelona"
  },
  headshot:
    "https://www.easports.com/fifa/ultimate-team/web-app/content/7D49A6B1-760B-4491-B10C-167FBC81D58A/2019/fut/items/images/mobile/portraits/158023.png",
  position: "CF",
  height: 170,
  weight: 72,
  birthdate: "06/24/1987",
  foot: "Left",
  mainDetails: {
    acceleration: 99,
    aggression: 66,
    agility: 93,
    balance: 97,
    ballcontrol: 99,
    crossing: 85,
    curve: 99,
    dribbling: 99,
    finishing: 99,
    freekickaccuracy: 99,
    composure: 99,
    skillMoves: 4
  },
  gk: {
    gkdiving: 6,
    gkhandling: 11,
    gkkicking: 15,
    gkpositioning: 14,
    gkreflexes: 8
  },
  more: {
    headingaccuracy: 98,
    interceptions: 30,
    jumping: 94,
    longpassing: 96,
    longshots: 99,
    marking: 46,
    penalties: 81,
    positioning: 99,
    potential: 94,
    reactions: 97,
    shortpassing: 99,
    shotpower: 92,
    slidingtackle: 36,
    sprintspeed: 94,
    standingtackle: 39,
    stamina: 99,
    strength: 82,
    vision: 99,
    volleys: 93,
    weakFoot: 4
  },
  name: "Messi",
  positionFull: "Centre Forward",
  rating: 99
};
