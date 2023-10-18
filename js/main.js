import {createImage, PHOTOS_COUNT} from './data.js';
import {createPictures} from './create-pictures.js';

const pictures = Array.from({length: PHOTOS_COUNT}, createImage);

createPictures(pictures);

