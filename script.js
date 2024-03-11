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

// user story #7
// Create county elements for each data point
svg.selectAll(".county")
    .data(countyData.features)
    .enter()
    .append("path")
    .attr("class", "county")
    .attr("data-fips", d => d.properties.fips)
    .attr("data-education", d => d.properties.education)
    .attr("d", d3.geoPath());

// Check if the data-fips and data-education values match the sample data
svg.selectAll(".county")
    .each(function(d) {
        const fips = d.properties.fips;
        const education = d.properties.education;
        // Compare fips and education with the sample data and log any mismatches
        if (/* Check if fips and education match sample data */) {
            console.log(`County with fips ${fips} has incorrect education value: ${education}`);
        }
    });

// user 8 & 9
// Create a legend
const legend = svg.append("g")
    .attr("id", "legend");

// Define the legend colors
const legendColors = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072"]; // Adjust colors as needed

// Create rectangles for each color in the legend
legend.selectAll("rect")
    .data(legendColors)
    .enter()
    .append("rect")
    .attr("x", (d, i) => 20 + i * 50) // Adjust positioning as needed
    .attr("y", 20) // Adjust positioning as needed
    .attr("width", 40)
    .attr("height", 20)
    .style("fill", d => d);

// Add text labels for each color in the legend
legend.selectAll("text")
    .data(legendColors)
    .enter()
    .append("text")
    .attr("x", (d, i) => 30 + i * 50) 
    .attr("y", 45) 
    .text((d, i) => `Legend ${i+1}`); 

// user story 10 & 11
// Define the tooltip element
const tooltip = d3.select("body")
    .append("div")
    .attr("id", "tooltip")
    .style("opacity", 0);

// Add mouseover and mouseout event listeners to the county elements
svg.selectAll(".county")
    .on("mouseover", (event, d) => {
        // Show tooltip on mouseover
        tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);
        tooltip.html(`Education: ${d.properties.education}`) // Display education data in tooltip
            .style("left", (event.pageX + 10) + "px") // Position tooltip relative to mouse pointer
            .style("top", (event.pageY - 28) + "px");
    })
    .on("mouseout", () => {
        // Hide tooltip on mouseout
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });



