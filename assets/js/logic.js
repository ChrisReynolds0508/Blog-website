// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

// TODO: Create functions to read and write from local storage
function toggleMode() {
    // Check if dark mode is already enabled
    const isDarkMode = document.body.classList.contains('dark');
    const toggleButton = document.getElementById('toggle');

    // Toggle the class based on current state
    if (isDarkMode) {
        // Switch to light mode
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
        toggleButton.innerHTML = '🌞'; // Sun emoji for light mode
    } else {
        // Switch to dark mode
        document.body.classList.add('dark');
        localStorage.setItem('mode', 'dark');
        toggleButton.innerHTML = '🌜'; // Moon emoji for dark mode
    }
}

// Function to set initial mode based on localStorage
function setInitialMode() {
    const savedMode = localStorage.getItem('mode');
    const toggleButton = document.getElementById('toggle');

    if (savedMode === 'dark') {
        document.body.classList.add('dark');
        toggleButton.innerHTML = '🌜'; // Moon emoji for dark mode
    } else {
        document.body.classList.remove('dark');
        toggleButton.innerHTML = '🌞'; // Sun emoji for light mode
    }
}

// Call setInitialMode to set the mode when the script loads
setInitialMode();
// Function to read from local storage
function readFromLocalStorage(key) {
    return localStorage.getItem(key);
}

// Function to write to local storage
function writeToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}