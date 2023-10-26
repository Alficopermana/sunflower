// CONFETTI SYSTEM
document.getElementsByClassName("button")[0].addEventListener("click", () => {
var count = 400;
var defaults = {
    origin: { y: 0.6 }
    };

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26+100,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60+100,
});
fire(0.35, {
  spread: 100+100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120+100,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120+100,
  startVelocity: 45,
});
})

// WISH SYSTEM
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  
// COMMENT SYSTEM
document.addEventListener('DOMContentLoaded', function() {
  displayComments();
  document.getElementById('commentForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('nameInput').value;
      var comment = document.getElementById('commentInput').value;
      if(name.trim() !== '' && comment.trim() !== '') {
          addComment(name, comment);
          displayComments();
          document.getElementById('nameInput').value = '';
          document.getElementById('commentInput').value = '';
      }
  });
});

function addComment(name, comment) {
  var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  comments.push({ name: name, comment: comment });
  localStorage.setItem('comments', JSON.stringify(comments));
}

function displayComments() {
  var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
  var commentsList = document.getElementById('commentsList');
  commentsList.innerHTML = '';

  for (var i = 0; i < comments.length && i < 100; i++) {
      var comment = comments[i];
      var commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.comment}</p>
                                  <button onclick="deleteComment(${i})">Delete</button>`;
      commentsList.appendChild(commentElement);
  }
}

function deleteComment(index) {
  if (confirm('Are you sure you want to delete this comment?')) {
      var comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
      comments.splice(index, 1);
      localStorage.setItem('comments', JSON.stringify(comments));
      displayComments();
  }
}
