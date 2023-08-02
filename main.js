// Add like functionality
const likeButton = document.querySelector('.like-button');
let likeCount = 0;
likeButton.addEventListener('click', function() {
  likeCount++;
  likeButton.textContent = `Like (${likeCount})`;
});

// Add comment functionality
const commentButton = document.querySelector('.comment-button');
commentButton.addEventListener('click', function() {
  alert('This feature is not available yet.');
});

// Add share functionality
const shareButton = document.querySelector('.share-button');
shareButton.addEventListener('click', function() {
  alert('This feature is not available yet.');
});