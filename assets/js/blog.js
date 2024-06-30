// TODO: Create a variable that selects the main element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function that reads from local storage and returns the data

// TODO: Call the function to render the list of blog posts
const mainElement = document.querySelector('main');

function buildAndAppendElement(tag, text, parent) {
    const element = document.createElement(tag);
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

function handleNoBlogPosts() {
    const message = "No blog posts to display.";
    const noPostsElement = buildAndAppendElement('p', message, mainElement);
}

function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}

function renderBlogPosts() {
    const blogPosts = JSON.parse(readFromLocalStorage('blogPosts'));

    if (blogPosts && blogPosts.length > 0) {
        blogPosts.forEach(post => {
            // Example: Render each blog post as an article
            const article = document.createElement('article');
          buildAndAppendElement('h2', post.title, article);
            buildAndAppendElement('p', `Posted by: ${post.username}`, article);
            buildAndAppendElement('blockquote', post.content, article);
            mainElement.appendChild(article);
        });
    } else {
        handleNoBlogPosts();
    }
}

// Call renderBlogPosts to display blog posts when the page loads
renderBlogPosts();

