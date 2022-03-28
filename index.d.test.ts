import BetterBoard from 'index.d';

BetterBoard.init({
  keysArrayOfObjects: [
    {
      "0": "S",
      "1": "O",
      "2": "L",
    },
    {
      "0": "L",
      "1": "U",
      "2": "C",
      "3": "E",
      "4": "T",
    },
    {
      "0": "O",
      "1": "M",
      "2": "N",
      "3": "I",
      "4": "B",
      "5": "U",
      "6": "S",
    },
  ],
  keysJsonUrl: '/Content/Plugins/BetterBoard/dist/BetterBoard-keys-english.json',
  keysSpecialCharsArrayOfStrings: ["#", "€", "%", "+", "-", "*"],
  keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  language: 'en',
  theme: 'light',
  capsLockActive: true,
  allowRealKeyboard: false,
  allowMobileKeyboard: false,
  cssAnimations: true,
  cssAnimationsDuration: 360,
  cssAnimationsStyle: 'slide',
  keysAllowSpacebar: true,
  keysSpacebarText: 'Space',
  keysFontFamily: 'sans-serif',
  keysFontSize: '22px',
  keysFontWeight: 'normal',
  keysIconSize: '25px',
  autoScroll: true,
  moveBody: true,
  keyboardType: 'numpad',
});

BetterBoard.run('.js-BetterBoard', {
  keysArrayOfObjects: [
    {
      "0": "S",
      "1": "O",
      "2": "L",
    },
    {
      "0": "L",
      "1": "U",
      "2": "C",
      "3": "E",
      "4": "T",
    },
    {
      "0": "O",
      "1": "M",
      "2": "N",
      "3": "I",
      "4": "B",
      "5": "U",
      "6": "S",
    },
  ],
  allowRealKeyboard: false,
  allowMobileKeyboard: false,
  language: 'en',
  theme: 'dark',
  keyboardType: 'all',
});

const input = window.document.querySelector('.js-BetterBoard') as HTMLInputElement;
BetterBoard.run(input, {
  keysArrayOfObjects: [
    {
      "0": "F",
      "1": "U",
      "2": "R",
      "3": "C",
      "4": "A",
      "5": "N",
    },
  ],
  allowRealKeyboard: false,
  allowMobileKeyboard: true,
  language: 'en',
  theme: 'dark',
  keyboardType: 'keyboard',
});
