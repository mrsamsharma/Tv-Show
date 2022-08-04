import addLike from './addLike.js';

export default (id, title, image) => {
  const showContainer = document.querySelector('.shows-wrapper');
  const showDiv = document.createElement('div');
  showDiv.className = 'show';
  showDiv.setAttribute('id', id);
  const showImg = document.createElement('img');
  showImg.setAttribute('src', image);
  showImg.setAttribute('alt', title);
  showDiv.appendChild(showImg);
  const infoWrapper = document.createElement('div');
  infoWrapper.className = 'info-wrapper';
  const showTitle = document.createElement('span');
  showTitle.className = 'title';
  showTitle.textContent = title;
  infoWrapper.appendChild(showTitle);
  const likeContainer = document.createElement('div');
  likeContainer.className = 'like-container';
  const likeIcon = document.createElement('i');
  likeIcon.className = 'like-icon';
  // likeIcon.addEventListener('click', (e) => {
  //   addLike(e.target.parentElement.parentElement.parentElement.id);
  // });
  likeContainer.appendChild(likeIcon);
  const likesNumber = document.createElement('span');
  likesNumber.className = 'like-number';
  likesNumber.textContent = 0;
  likeContainer.appendChild(likesNumber);
  infoWrapper.appendChild(likeContainer);
  showDiv.appendChild(infoWrapper);
  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  showDiv.appendChild(commentBtn);
  showContainer.appendChild(showDiv);
};
