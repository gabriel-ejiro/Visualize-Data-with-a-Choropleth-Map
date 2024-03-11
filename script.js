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

// User story #3

// Select the SVG container
const svg = d3.select("#choropleth");

// Create county elements
svg.selectAll(".county")
    .data(countyData.features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("d", d3.geoPath()); // Use d3.geoPath() to generate the path data for each county

// user story #4

// Define a color scale with at least 4 different fill colors
const colorScale = d3.scaleOrdinal()
    .domain(["low", "medium", "high", "very high"]) // Adjust domain based on your data values
    .range(["#8dd3c7", "#ffffb3", "#bebada", "#fb8072"]); // Adjust range to specify the fill colors

// Use the color scale to set the fill color of the counties
svg.selectAll(".county")
    .style("fill", d => colorScale(d.properties.dataValue)); // Adjust accessor function based on your data structure

//user story #5
// Assuming `svg` is your SVG container and `countyData` is your county GeoJSON data

// Create county elements and set data-fips and data-education properties
svg.selectAll(".county")
    .data(countyData.features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("data-fips", d => d.properties.fips)
    .attr("data-education", d => d.properties.education)
    .attr("d", d3.geoPath());

// user story #6

// Create county elements for each data point
svg.selectAll(".county")
    .data(countyData.features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("data-fips", d => d.properties.fips)
    .attr("data-education", d => d.properties.education)
    .attr("d", d3.geoPath());
