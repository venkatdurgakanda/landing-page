function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      return response.json(); // Convert to JSON
    })
    .then(function(data) {
      const postList = document.getElementById('post-list');
      postList.innerHTML = ''; // Clear old data

      data.slice(0, 5).forEach(function(post) {
        const li = document.createElement('li');
        li.textContent = '#${post.id}: ${post.title}';
        postList.appendChild(li);
      });
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}