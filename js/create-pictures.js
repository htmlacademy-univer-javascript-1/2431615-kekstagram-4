const createPictures = (pictures) =>{
  const picturesTemplate = document.querySelector('#picture')
    .content
    .querySelector('a');

  const pictureFragments = document.createDocumentFragment();
  const pictureContainer = document.querySelector('.pictures');

  pictures.forEach(({url, description, likes, comments}) => {
    const currentPicture = picturesTemplate.cloneNode(true);
    currentPicture.querySelector('img').src = url;
    currentPicture.querySelector('img').alt = description;
    currentPicture.querySelector('.picture__comments').textContent = comments.length;
    currentPicture.querySelector('.picture__likes').textContent = likes;

    pictureFragments.append(currentPicture);
  });
  pictureContainer.append(pictureFragments);
};

export {createPictures};
