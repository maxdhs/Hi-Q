export const initialState = {
  selectedHaiku: 0,
  selectedLine: 0,
  isShowingTranslation: false,
  haiku: {
    0: {
      optionsArray: {
        0: ['cat is drinking', 'cat is eating', 'cat is sleeping', 2],
        1: ['catng', 'cat is ing', 'cat l4eeping', 2],
        2: ['cat is king', 'c2at is eatng', 'ca3t leeping', 0]
      },
      isCompleted: false,
      soundsArray: [require('./assets/0-0.mp3'), require('./assets/0-1.mp3'), require('./assets/0-2.mp3')],
      haikuLines: {
        0: '山川に',
        1: 'ひとり髪洗ふ',
        2: '神ぞ知る'
      },
      emoji: '🗻',
      name: 'Mountain',
      literalTranslation: ['cat is above', 'dark red', 'was not blue'],
      poeticTranslation: ['god knows', 'in a mountain stream', 'a woman alone washing her hair']
    },
    1: {
      optionsArray: {
        0: ['cat is drinking', 'cat is eating', 'cat is sleeping', 2],
        1: ['catng', 'cat is ing', 'cat l4eeping', 2],
        2: ['cat is king', 'c2at is eatng', 'ca3t leeping', 0]
      },
      isCompleted: false,
      soundsArray:[require('./assets/0-0.mp3'), require('./assets/0-1.mp3'), require('./assets/0-2.mp3')],
      haikuLines: {
        0: '草の戸も',
        1: '住替る代ぞ',
        2: 'ひなの家'
      },
      emoji: '🌙',
      name: 'Dream',
      literalTranslation: ['cat is above', 'dark red', 'was not blue'],
      poeticTranslation: ['the pond', 'is beautiful', 'in the march waters']
    },
  },

}