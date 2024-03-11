// Fetch the US Education Data and US County Data
Promise.all([
    fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'),
    fetch('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
])
.then(responses => Promise.all(responses.map(response => response.json())))
.then(data => {
    const educationData = data[0];
    const countyData = data[1];
    
    // Process the data and create the choropleth map
})
.catch(error => console.error('Error fetching data:', error));
