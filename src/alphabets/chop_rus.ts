export type CharItemType = {
  titleEng: string;
  titleRus: string;
  src: string;
  rusChar: string;
};

export type AlphabetType = Record<string, CharItemType>;

export const alphabet: AlphabetType = {
  q: {
    titleEng: "yogi",
    titleRus: "йог",
    src: "http://localhost:3000/images/alphabet/chop/yogi.png",
    rusChar: "й",
  },
  w: {
    titleEng: "heron",
    titleRus: "цапля",
    src: "http://localhost:3000/images/alphabet/chop/heron.png",
    rusChar: "ц",
  },
  e: {
    titleEng: "iron",
    titleRus: "утюг",
    src: "http://localhost:3000/images/alphabet/chop/iron.png",
    rusChar: "у",
  },
  r: {
    titleEng: "bush",
    titleRus: "куст",
    src: "http://localhost:3000/images/alphabet/chop/bush.png",
    rusChar: "к",
  },
  t: {
    titleEng: "food",
    titleRus: "еда",
    src: "http://localhost:3000/images/alphabet/chop/food.png",
    rusChar: "е",
  },
  y: {
    titleEng: "rhinoceros",
    titleRus: "носорог",
    src: "http://localhost:3000/images/alphabet/chop/rhinoceros.png",
    rusChar: "н",
  },
  u: {
    titleEng: "dumbbell",
    titleRus: "гантеля",
    src: "http://localhost:3000/images/alphabet/chop/dumbbell.png",
    rusChar: "г",
  },
  i: {
    titleEng: "balloon",
    titleRus: "шарик воздушный",
    src: "http://localhost:3000/images/alphabet/chop/balloon.png",
    rusChar: "ш",
  },
  o: {
    titleEng: "pike",
    titleRus: "щука",
    src: "http://localhost:3000/images/alphabet/chop/pike.png",
    rusChar: "щ",
  },
  p: {
    titleEng: "hare",
    titleRus: "заяц",
    src: "http://localhost:3000/images/alphabet/chop/hare.png",
    rusChar: "з",
  },
  "[": {
    titleEng: "ferret",
    titleRus: "хорек",
    src: "http://localhost:3000/images/alphabet/chop/ferret.png",
    rusChar: "х",
  },
  "]": {
    titleEng: "brick, stone, entrance",
    titleRus: "кирпич, камень, въезд",
    src: "http://localhost:3000/images/alphabet/chop/brick.png",
    rusChar: "ъ",
  },
  a: {
    titleEng: "lantern",
    titleRus: "фонарь",
    src: "http://localhost:3000/images/alphabet/chop/lantern.png",
    rusChar: "ф",
  },
  s: {
    titleEng: "mouse",
    titleRus: "мышь",
    src: "http://localhost:3000/images/alphabet/chop/mouse.png",
    rusChar: "ы",
  },
  d: {
    titleEng: "crow",
    titleRus: "ворона",
    src: "http://localhost:3000/images/alphabet/chop/crow.png",
    rusChar: "в",
  },
  f: {
    titleEng: "watermellon",
    titleRus: "арбуз",
    src: "http://localhost:3000/images/alphabet/chop/watermellon.png",
    rusChar: "а",
  },
  g: {
    titleEng: "locomotive",
    titleRus: "паровоз",
    src: "http://localhost:3000/images/alphabet/chop/locomotive.png",
    rusChar: "п",
  },
  h: {
    titleEng: "hand",
    titleRus: "рука",
    src: "http://localhost:3000/images/alphabet/chop/hand.png",
    rusChar: "р",
  },
  j: {
    titleEng: "cloud",
    titleRus: "облако",
    src: "http://localhost:3000/images/alphabet/chop/cloud.png",
    rusChar: "о",
  },
  k: {
    titleEng: "moon",
    titleRus: "луна",
    src: "http://localhost:3000/images/alphabet/chop/moon.png",
    rusChar: "л",
  },
  l: {
    titleEng: "house",
    titleRus: "дом",
    src: "http://localhost:3000/images/alphabet/chop/house.png",
    rusChar: "д",
  },
  ";": {
    titleEng: "toad",
    titleRus: "жаба",
    src: "http://localhost:3000/images/alphabet/chop/toad.png",
    rusChar: "ж",
  },
  "'": {
    titleEng: "bookcase",
    titleRus: "этажерка",
    src: "http://localhost:3000/images/alphabet/chop/bookcase.png",
    rusChar: "э",
  },
  z: {
    titleEng: "apple",
    titleRus: "яблоко",
    src: "http://localhost:3000/images/alphabet/chop/apple.png",
    rusChar: "я",
  },
  x: {
    titleEng: "cup",
    titleRus: "чашка",
    src: "http://localhost:3000/images/alphabet/chop/cup.png",
    rusChar: "ч",
  },
  c: {
    titleEng: "cheese",
    titleRus: "сыр",
    src: "http://localhost:3000/images/alphabet/chop/cheese.png",
    rusChar: "с",
  },
  v: {
    titleEng: "sea",
    titleRus: "море",
    src: "http://localhost:3000/images/alphabet/chop/sea.png",
    rusChar: "м",
  },
  b: {
    titleEng: "Indian",
    titleRus: "индеец",
    src: "http://localhost:3000/images/alphabet/chop/indian.png",
    rusChar: "и",
  },
  n: {
    titleEng: "stool",
    titleRus: "табуретка",
    src: "http://localhost:3000/images/alphabet/chop/stool.png",
    rusChar: "т",
  },
  m: {
    titleEng: "lion cub",
    titleRus: "львенок",
    src: "http://localhost:3000/images/alphabet/chop/lion-cub.png",
    rusChar: "ь",
  },
  ",": {
    titleEng: "ram",
    titleRus: "баран",
    src: "http://localhost:3000/images/alphabet/chop/ram.png",
    rusChar: "б",
  },
  ".": {
    titleEng: "spinning top",
    titleRus: "юла",
    src: "http://localhost:3000/images/alphabet/chop/spinning-top.png",
    rusChar: "ю",
  },
  "/": {
    titleEng: "",
    titleRus: "",
    src: "",
    rusChar: ".",
  },
};
