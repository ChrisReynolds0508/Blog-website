// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage
// Function to toggle the light/dark mode
function toggleMode() {
    // Get the current mode from local storage
    const currentMode = localStorage.getItem('mode');

    // Check if the current mode is 'dark'
    if (currentMode === 'dark') {
        // Set the mode to 'light'
        localStorage.setItem('mode', 'light');
        // Remove the 'dark' class from the body element
        document.body.classList.remove('dark');
    } else {
        // Set the mode to 'dark'
        localStorage.setItem('mode', 'dark');
        // Add the 'dark' class to the body element
        document.body.classList.add('dark');
    }
}

// Function to read from local storage
function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Function to write to local storage
function writeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}