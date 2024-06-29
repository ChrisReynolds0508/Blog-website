// Selects the form element
const form = document.querySelector('form');

const handleFormSubmission = function(event) {
  event.preventDefault();
  
  // Grab the form data
  const formData = new FormData(form);
  
  // Check if any field is empty
  let hasEmptyFields = false;
  for (let [key, value] of formData.entries()) {
    if (value.trim() === '') {
      hasEmptyFields = true;
      break;
    }
  }
  
  // Display error message if any field is empty
  if (hasEmptyFields) {
    alert('Please fill in all fields');
    return;
  }
  
  // Store the form data in local storage
  for (let [key, value] of formData.entries()) {
    localStorage.setItem(key, value);
  }
  
  // Redirect to the blog page
  redirectPage('blog.html');
};

form.addEventListener('submit', handleFormSubmission);

let redirectURL = '';

const redirectPage = function (url) {
  location.assign(url);
};
