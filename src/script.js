// Select the necessary elements
const postsSection = document.getElementById('posts');
const newPostForm = document.getElementById('new-post-form');
const postContent = document.getElementById('post-content');

// Handle the form submission
newPostForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the page from refreshing

  // Get the content of the new post
  const content = postContent.value;

  // Create a new post element
  const post = document.createElement('div');
  post.classList.add('post');
  post.textContent = content;

  // Add the new post to the posts section
  postsSection.prepend(post);

  // Clear the textarea
  postContent.value = '';
});
