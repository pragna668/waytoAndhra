onst searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

// Sample data for demonstration
const sampleData = [
    "Kurnool",
    "Kadapa",
    "Anantapur",
    "Nellore",
    "Chittor",
    "Kiwi",
    "Mango",
    "Orange",
    "Peach",
    "Strawberry"
];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const results = sampleData.filter(item => item.toLowerCase().includes(query));
    
    // Display results
    resultsDiv.innerHTML = results.length ? 
        results.map(item => `<p>${item}</p>`).join('') : 
        '<p>No results found.</p>';
});
