```javascript
// Function to fetch GitHub user data
async function fetchGitHubUser(username, token) {
    const url = `https://api.github.com/users/${username}${token ? `?token=${token}` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('User not found');
    return response.json();
}

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target;
    const username = form.querySelector('input[name="username"]').value;
    const token = new URLSearchParams(window.location.search).get('token');

    try {
        const userData = await fetchGitHubUser(username, token);
        const createdAt = new Date(userData.created_at).toISOString().split('T')[0]; // Format date to YYYY-MM-DD
        document.querySelector("#github-created-at").textContent = createdAt; // Update DOM
    } catch (error) {
        console.error(error);
        document.querySelector("#github-created-at").textContent = "User not found"; // Handle error
    }
}

// Check if the form exists and is valid
const seed = 'example'; // Replace with actual seed logic
const form = document.querySelector(`#github-user-${seed}`);
if (form && form.tagName === "FORM") {
    form.addEventListener('submit', handleFormSubmit); // Attach event listener
}

// Check for local files and fetch data if they exist
async function fetchLocalData() {
    try {
        const csvResponse = await fetch('./data.csv');
        if (csvResponse.ok) {
            const csvText = await csvResponse.text();
            // Parse CSV and compute totals (implementation not shown)
        }
    } catch (error) {
        console.error('Error fetching data.csv:', error);
    }

    try {
        const jsonResponse = await fetch('./rates.json');
        if (jsonResponse.ok) {
            const ratesData = await jsonResponse.json();
            // Use ratesData for conversion (implementation not shown)
        }
    } catch (error) {
        console.error('Error fetching rates.json:', error);
    }
}

// Call local data fetch function
fetchLocalData();
```