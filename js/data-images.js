import {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl} from './utils.js';
import {createRandomComments} from './data-comments.js';

const DESCRIPTIONS = [
  'Трамвай',
  'Кириешки',
  'Без описания',
  'Мем',
  'Дэб ногами',
  'Хайп',
  'Антихайп',
  'Плавленный сыр',
  'Мангал клаб',
];

const PHOTOS_COUNT = 25;
const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const COMMENTS = {
  MIN : 0,
  MAX : 30
};

const LIKES = {
  MAX: 200,
  MIN: 15
};


const createImage = () => ({
  id: imageIdGenerator(),

  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),

  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],

  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),

  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export {createImage, PHOTOS_COUNT};
