// Selects the form element
const form = document.querySelector('form');
const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
const handleFormSubmission = function(event) {
  event.preventDefault();
  const formData = {
    title: form.title.value,
    username: form.username.value,
    content: form.content.value,
  }

};

form.addEventListener('submit', handleFormSubmission);

let redirectURL = '';

const redirectPage = function (url) {
  location.assign(url);
};
const checkFormFields = function() {
  if (form.title.value === '' || form.username.value === '' || form.content.value === '') {
    alert('Please fill in all fields before submitting the form.');
    return false;
  }
  return true;
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (checkFormFields()) {
    const formData = {
      title: form.title.value,
      username: form.username.value,
      content: form.content.value,
    };
    blogPosts.push(formData);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // Redirect to the blog page
    redirectPage('blog.html');
  }
});