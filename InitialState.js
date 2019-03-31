import randomPhrase from './randomPhrase'

export const initialState = {
  selectedHaiku: 0,
  selectedLine: 0,
  isShowingTranslation: false,
  haiku: {
    0: {
      optionsArray: {
        0: [randomPhrase(), 'mountain stream​ / in', randomPhrase(), 1],
        1: [randomPhrase(), randomPhrase(), 'alone / hair / washing', 2],
        2: ['god / to know', randomPhrase(), randomPhrase(), 0]
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
      literalTranslation: ['mountain stream​ / in', 'alone / hair / washing', 'god / to know'],
      poeticTranslation: 'god knows in a mountain stream a woman alone washing her hair'
    },
    1: {
      optionsArray: {
        0: [randomPhrase(), randomPhrase(), 'wind / to blow', 2],
        1: [randomPhrase(), 'death / come / to receive', randomPhrase(), 1],
        2: ['hearing', randomPhrase(), randomPhrase(), 0]
      },
      isCompleted: false,
      soundsArray: [require('./assets/1-0.mp3'), require('./assets/1-1.mp3'), require('./assets/1-2.mp3')],
      haikuLines: {
        0: '風が吹く',
        1: '仏来給ふ',
        2: 'けはひあり'
      },
      emoji: '💀',
      name: 'Death',
      literalTranslation: ['wind / to blow', 'death / come / to receive', 'hearing'],
      poeticTranslation: 'a wind blows and I hear the soul of the deceased coming'
    },
  }
}