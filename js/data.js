import {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl} from './utils.js';

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

const LIKES = {
  MAX: 200,
  MIN: 15
};

const COMMENTS = {
  MIN : 0,
  MAX : 30
};

const NAMES = [
  'Миша',
  'Артем',
  'Никита',
  'Даша',
  'Акакий',
  'Алдар Баирович',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_COUNT = 25;
const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const createRandomComment = (generatorComments, generatorUrl) => ({
  id: generatorComments(),
  avatar: createImageUrl(generatorUrl(), 'photos/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const createRandomComments = (count) => {
  const result = [];
  const commentIdGenerator = createRandomIdFromRangeGenerator(1, count);

  for(let i = 0; i < count; i++) {
    const urlIdGenerator = createRandomIdFromRangeGenerator(1, 6);

    result.push(createRandomComment(commentIdGenerator, urlIdGenerator));
  }

  return result;
};

const createImage = () => ({
  id: imageIdGenerator(),

  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),

  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],

  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),

  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export{createImage, PHOTOS_COUNT};
