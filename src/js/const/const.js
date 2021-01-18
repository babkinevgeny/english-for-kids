const CARDS = [
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'images/cry.jpg',
      audioSrc: 'audio/cry.mp3',
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'images/dance.jpg',
      audioSrc: 'audio/dance.mp3',
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'images/dive.jpg',
      audioSrc: 'audio/dive.mp3',
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'images/draw.jpg',
      audioSrc: 'audio/draw.mp3',
    },
    {
      word: 'fishing',
      translation: 'ловить рыбу',
      image: 'images/fishing.jpg',
      audioSrc: 'audio/fishing.mp3',
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'images/fly.jpg',
      audioSrc: 'audio/fly.mp3',
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'images/hug.jpg',
      audioSrc: 'audio/hug.mp3',
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'images/jump.jpg',
      audioSrc: 'audio/jump.mp3',
    },
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'images/open.jpg',
      audioSrc: 'audio/open.mp3',
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'images/play.jpg',
      audioSrc: 'audio/play.mp3',
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'images/point.jpg',
      audioSrc: 'audio/point.mp3',
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'images/ride.jpg',
      audioSrc: 'audio/ride.mp3',
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'images/run.jpg',
      audioSrc: 'audio/run.mp3',
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'images/sing.jpg',
      audioSrc: 'audio/sing.mp3',
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'images/skip.jpg',
      audioSrc: 'audio/skip.mp3',
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'images/swim.jpg',
      audioSrc: 'audio/swim.mp3',
    },
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'images/cat.jpg',
      audioSrc: 'audio/cat.mp3',
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'images/chick.jpg',
      audioSrc: 'audio/chick.mp3',
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'images/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'images/dog.jpg',
      audioSrc: 'audio/dog.mp3',
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'images/horse.jpg',
      audioSrc: 'audio/horse.mp3',
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'images/pig.jpg',
      audioSrc: 'audio/pig.mp3',
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'images/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3',
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'images/sheep.jpg',
      audioSrc: 'audio/sheep.mp3',
    },
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'images/bird.jpg',
      audioSrc: 'audio/bird.mp3',
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'images/fish.jpg',
      audioSrc: 'audio/fish.mp3',
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'images/frog.jpg',
      audioSrc: 'audio/frog.mp3',
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'images/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3',
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'images/lion.jpg',
      audioSrc: 'audio/lion.mp3',
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'images/mouse.jpg',
      audioSrc: 'audio/mouse.mp3',
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'images/turtle.jpg',
      audioSrc: 'audio/turtle.mp3',
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'images/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3',
    },
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'images/skirt.jpg',
      audioSrc: 'audio/skirt.mp3',
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'images/pants.jpg',
      audioSrc: 'audio/pants.mp3',
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'images/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'images/dress.jpg',
      audioSrc: 'audio/dress.mp3',
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'images/boot.jpg',
      audioSrc: 'audio/boot.mp3',
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'images/shirt.jpg',
      audioSrc: 'audio/shirt.mp3',
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'images/coat.jpg',
      audioSrc: 'audio/coat.mp3',
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'images/shoe.jpg',
      audioSrc: 'audio/shoe.mp3',
    },
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'images/sad.jpg',
      audioSrc: 'audio/sad.mp3',
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'images/angry.jpg',
      audioSrc: 'audio/angry.mp3',
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'images/happy.jpg',
      audioSrc: 'audio/happy.mp3',
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'images/tired.jpg',
      audioSrc: 'audio/tired.mp3',
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'images/surprised.jpg',
      audioSrc: 'audio/surprised.mp3',
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'images/scared.jpg',
      audioSrc: 'audio/scared.mp3',
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'images/smile.jpg',
      audioSrc: 'audio/smile.mp3',
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'images/laugh.jpg',
      audioSrc: 'audio/laugh.mp3',
    },
  ],
  [
    {
      word: 'red',
      translation: 'красный',
      image: 'images/red.jpg',
      audioSrc: 'audio/red.mp3',
    },
    {
      word: 'black',
      translation: 'черный',
      image: 'images/black.jpg',
      audioSrc: 'audio/black.mp3',
    },
    {
      word: 'white',
      translation: 'белый',
      image: 'images/white.jpg',
      audioSrc: 'audio/white.mp3',
    },
    {
      word: 'green',
      translation: 'зеленый',
      image: 'images/green.jpg',
      audioSrc: 'audio/green.mp3',
    },
    {
      word: 'yellow',
      translation: 'желтый',
      image: 'images/yellow.jpg',
      audioSrc: 'audio/yellow.mp3',
    },
    {
      word: 'blue',
      translation: 'синий',
      image: 'images/blue.jpg',
      audioSrc: 'audio/blue.mp3',
    },
    {
      word: 'orange',
      translation: 'оранжевый',
      image: 'images/orange.jpg',
      audioSrc: 'audio/orange.mp3',
    },
    {
      word: 'purple',
      translation: 'фиолетовый',
      image: 'images/purple.jpg',
      audioSrc: 'audio/purple.mp3',
    },
  ],
  [
    {
      word: 'short',
      translation: 'низкий',
      image: 'images/short.jpg',
      audioSrc: 'audio/short.mp3',
    },
    {
      word: 'tall',
      translation: 'высокий',
      image: 'images/tall.jpg',
      audioSrc: 'audio/tall.mp3',
    },
    {
      word: 'thin',
      translation: 'худой',
      image: 'images/thin.jpg',
      audioSrc: 'audio/thin.mp3',
    },
    {
      word: 'thick',
      translation: 'полный',
      image: 'images/thick.jpg',
      audioSrc: 'audio/thick.mp3',
    },
    {
      word: 'bald',
      translation: 'лысый',
      image: 'images/bald.jpg',
      audioSrc: 'audio/bald.mp3',
    },
    {
      word: 'blonde',
      translation: 'блондин / блондинка',
      image: 'images/blonde.jpg',
      audioSrc: 'audio/blonde.mp3',
    },
    {
      word: 'brunette',
      translation: 'брюнет / брюнетка',
      image: 'images/brunette.jpg',
      audioSrc: 'audio/brunette.mp3',
    },
    {
      word: 'curly',
      translation: 'кудрявый',
      image: 'images/curly.jpg',
      audioSrc: 'audio/curly.mp3',
    },
  ],
];

const NAVIGATION = ['Navigation', 'Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Colors', 'Appearance', 'Statistic'];

const CATEGORIES = ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Colors', 'Appearance'];

const SCORE_MAX_SIZE = 20;

const FIRST_TABLE_COLS = [
  {
    title: 'Word',
    type: 'string',
    sortKey: 'word',
  },
  {
    title: 'Translation',
    type: 'string',
    sortKey: 'translation',
  },
  {
    title: 'Trains',
    type: 'number',
    sortKey: 'train',
  },
  {
    title: 'Guesses',
    type: 'number',
    sortKey: 'play',
  },
  {
    title: 'Errors',
    type: 'number',
    sortKey: 'errors',
  },
  {
    title: '% Success',
    type: 'number',
    sortKey: 'percentageOfSuccess',
  },
  {
    title: 'Category',
    type: 'string',
    sortKey: 'category',
  },
];

const NAVIGATION_INDEX = NAVIGATION.indexOf('Navigation');
const STATISTIC_INDEX = NAVIGATION.indexOf('Statistic');

const CATEGORY_MAX_SIZE = 8;

const NAVIGATION_ACTIVE_LINK_CLASS = 'navigation__link--active';

const SORTING_ORDER = {
  asc: 'asc',
  desc: 'desc',
};

const TIME_INTERVALS = {
  halfSecond: 500,
  oneSecond: 1000,
  fiveSeconds: 5000,
};

const STATISTIC_INDICATORS = {
  play: 'play',
  errors: 'errors',
  train: 'train',
  percentageOfSuccess: 'percentageOfSuccess',
};

export {
  CARDS,
  SCORE_MAX_SIZE,
  NAVIGATION,
  CATEGORIES,
  FIRST_TABLE_COLS,
  NAVIGATION_INDEX,
  STATISTIC_INDEX,
  CATEGORY_MAX_SIZE,
  NAVIGATION_ACTIVE_LINK_CLASS,
  SORTING_ORDER,
  TIME_INTERVALS,
  STATISTIC_INDICATORS,
};
