// Comments Section
document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const comment = this.querySelector('textarea').value.trim();
    if (comment) {
      const commentList = document.getElementById('commentList');
      const newComment = document.createElement('p');
      newComment.textContent = comment;
      commentList.appendChild(newComment);
      this.querySelector('textarea').value = '';
    }
  });
  
  // Admin Panel
  document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = this.querySelector('input[type="text"]').value.trim();
    const content = this.querySelector('textarea').value.trim();
    if (title && content) {
      const postList = document.getElementById('postsList');
      const newPost = document.createElement('div');
      newPost.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
      postList.appendChild(newPost);
      this.reset();
    }
  });
  