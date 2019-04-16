import randomPhrase from "./randomPhrase";

export const initialState = {
  selectedHaiku: 0,
  selectedLine: 0,
  isShowingTranslation: false,
  haiku: {
    0: {
      optionsArray: {
        0: [randomPhrase(), "mountain stream​ / in", randomPhrase(), 1],
        1: [randomPhrase(), randomPhrase(), "alone / hair / washing", 2],
        2: ["god / to know", randomPhrase(), randomPhrase(), 0]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/0-0.mp3"),
        require("./assets/0-1.mp3"),
        require("./assets/0-2.mp3")
      ],
      haikuLines: {
        0: "山川に",
        1: "ひとり髪洗ふ",
        2: "神ぞ知る"
      },
      emoji: "🗻",
      name: "Mountain",
      literalTranslation: [
        "mountain stream​ / in",
        "alone / hair / washing",
        "god / to know"
      ],
      poeticTranslation:
        "god knows in a mountain stream a woman alone washing her hair"
    },
    1: {
      optionsArray: {
        0: [randomPhrase(), randomPhrase(), "wind / to blow", 2],
        1: [randomPhrase(), "death / come / to receive", randomPhrase(), 1],
        2: ["hearing", randomPhrase(), randomPhrase(), 0]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/1-0.mp3"),
        require("./assets/1-1.mp3"),
        require("./assets/1-2.mp3")
      ],
      haikuLines: {
        0: "風が吹く",
        1: "仏来給ふ",
        2: "けはひあり"
      },
      emoji: "💀",
      name: "Death",
      literalTranslation: [
        "wind / to blow",
        "death / come / to receive",
        "hearing"
      ],
      poeticTranslation:
        "a wind blows and I hear the soul of the deceased coming"
    },
    2: {
      optionsArray: {
        0: ["you / and / I", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "lie / as / if delving into", 2],
        2: [randomPhrase(), "autumn / 's / end", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/2-0.mp3"),
        require("./assets/2-1.mp3"),
        require("./assets/2-2.mp3")
      ],
      haikuLines: {
        0: "君と我",
        1: "うそにほればや",
        2: "秋の暮"
      },
      emoji: "💛",
      name: "Fake Love",
      literalTranslation: [
        "you / and / I",
        "lie / as / if delving into",
        "autumn / 's / end"
      ],
      poeticTranslation:
        "you and me, how about we fake being in love in autumn's end"
    },

    3: {
      optionsArray: {
        0: [randomPhrase(), "spider / to / birth", randomPhrase(), 1],
        1: ["web / if not weaving", randomPhrase(), randomPhrase(), 0],
        2: [randomPhrase(), randomPhrase(), "bad / is it?", 2]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/3-0.mp3"),
        require("./assets/3-1.mp3"),
        require("./assets/3-2.mp3")
      ],
      haikuLines: {
        0: "蜘蛛に生れ",
        1: "網をかけねば",
        2: "ならぬかな"
      },
      emoji: "🕷️",
      name: "Web",
      literalTranslation: [
        "spider / to / birth",
        "web / if not weaving",
        "bad / is it?"
      ],
      poeticTranslation: "a spider born to spin a thread must weave a web"
    },

    4: {
      optionsArray: {
        0: [randomPhrase(), randomPhrase(), "grass / picking", 2],
        1: [randomPhrase(), "today / 's / field / grief", randomPhrase(), 1],
        2: ["night rain / to come", randomPhrase(), randomPhrase(), 0]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/4-0.mp3"),
        require("./assets/4-1.mp3"),
        require("./assets/4-2.mp3")
      ],
      haikuLines: {
        0: "草摘みし",
        1: "今日の野いたみ",
        2: "夜雨来る"
      },
      emoji: "🌧️",
      name: "Rain",
      literalTranslation: [
        "grass / picking",
        "today / 's / field / grief",
        "night rain / to come"
      ],
      poeticTranslation:
        "a night rain mourns the field where herbs were picked up this day"
    },

    5: {
      optionsArray: {
        0: [randomPhrase(), randomPhrase(), "white / rose", 2],
        1: [randomPhrase(), "so called / even if", randomPhrase(), 1],
        2: ["red / faint", randomPhrase(), randomPhrase(), 0]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/5-0.mp3"),
        require("./assets/5-1.mp3"),
        require("./assets/5-2.mp3")
      ],
      haikuLines: {
        0: "白牡丹",
        1: "といふといへども",
        2: "紅ほのか"
      },
      emoji: "🌹",
      name: "Rose",
      literalTranslation: [
        "white / rose",
        "so called / even if",
        "red / faint"
      ],
      poeticTranslation: "a so called white rose still tinged with red"
    },

    6: {
      optionsArray: {
        0: ["spring breeze​ / and", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "fighting spirit / embracing", 2],
        2: [randomPhrase(), "hill / on / to stand", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/6-0.mp3"),
        require("./assets/6-1.mp3"),
        require("./assets/6-2.mp3")
      ],
      haikuLines: {
        0: "春風や",
        1: "闘志抱きて",
        2: "丘に佇つ"
      },
      emoji: "⚔️",
      name: "Fight",
      literalTranslation: [
        "spring breeze​ / and",
        "fighting spirit / embracing",
        "hill / on / to stand"
      ],
      poeticTranslation:
        "I stand on a hill in a spring wind with my heart full of fight"
    },

    7: {
      optionsArray: {
        0: ["duck​ / 's / bill / from", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "dripping", 2],
        2: [randomPhrase(), "spring / 's / mud", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/7-0.mp3"),
        require("./assets/7-1.mp3"),
        require("./assets/7-2.mp3")
      ],
      haikuLines: {
        0: "鴨の嘴より",
        1: "たらたらと",
        2: "春の泥"
      },
      emoji: "🦆",
      name: "Duck",
      literalTranslation: [
        "duck​ / 's / bill / from",
        "dripping",
        "spring / 's / mud"
      ],
      poeticTranslation: "Spring mud dribbles from the bill of a wild duck"
    },

    8: {
      optionsArray: {
        0: ["going / spring / and", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "bird / cry / fish / 's", 2],
        2: [randomPhrase(), "eyes / tears", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/8-0.mp3"),
        require("./assets/8-1.mp3"),
        require("./assets/8-2.mp3")
      ],
      haikuLines: {
        0: "行春や",
        1: "鳥啼き魚の",
        2: "目は泪"
      },
      emoji: "🌱",
      name: "Spring",
      literalTranslation: [
        "going / spring / and",
        "bird / cry / fish / 's ",
        "eyes / tears"
      ],
      poeticTranslation:
        "the birds cry and the fishes have tears on their eyes with the passing of spring"
    },

    8: {
      optionsArray: {
        0: ["summer / grass / and", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "soldiers", 2],
        2: [randomPhrase(), "dream / 's / remains", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/8-0.mp3"),
        require("./assets/8-1.mp3"),
        require("./assets/8-2.mp3")
      ],
      haikuLines: {
        0: "夏草や",
        1: "兵どもが",
        2: "夢の跡"
      },
      emoji: "🛡️",
      name: "Warrior",
      literalTranslation: [
        "summer / grass / and",
        "soldiers",
        "dream / 's / remains"
      ],
      poeticTranslation:
        "the grasses in the summer are all that's left of a warrior's dreams"
    },

    9: {
      optionsArray: {
        0: ["tranquility / and", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "stone / to / to permeate", 2],
        2: [randomPhrase(), "cicada / 's / cry", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/9-0.mp3"),
        require("./assets/9-1.mp3"),
        require("./assets/9-2.mp3")
      ],
      haikuLines: {
        0: "閑けさや",
        1: "岩にしみいる",
        2: "蝉の声"
      },
      emoji: "😌",
      name: "Tranquility",
      literalTranslation: [
        "tranquility / and",
        "stone / to / to permeate",
        "cicada / 's / cry"
      ],
      poeticTranslation:
        "a cicada's voice penetrating the very rock, tranquility"
    },

    10: {
      optionsArray: {
        0: ["old / pool / and", randomPhrase(), randomPhrase(), 0],
        1: [randomPhrase(), randomPhrase(), "frog / to jump in", 2],
        2: [randomPhrase(), "water / 's / sound", randomPhrase(), 1]
      },
      isCompleted: false,
      soundsArray: [
        require("./assets/9-0.mp3"),
        require("./assets/9-1.mp3"),
        require("./assets/9-2.mp3")
      ],
      haikuLines: {
        0: "古池や",
        1: "蛙飛び込む",
        2: "水の音"
      },
      emoji: "🐸",
      name: "Frog",
      literalTranslation: [
        "old / pool / and",
        "frog / to jump in",
        "water / 's / sound"
      ],
      poeticTranslation: "a frog leaps into an old pond with the sound of water"
    }
  }
};
