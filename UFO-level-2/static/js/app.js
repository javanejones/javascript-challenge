// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select('tbody');

// Evr_D3_Table example 

// Populate table using Arrow

tableData.forEach((ufo) => {
    var row = tbody.append('tr');
    Object.entries(ufo).forEach(([key,value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});

// Par Form Filter activity example

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    
    d3.select('tbody').html('');

    // Prevent the page from refreshing 
    
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node  
    
    var dtinputElement = d3.select("#datetime").property('value');
    var cityinputElement = d3.select("#city").property('value');
    var stateinputElement = d3.select("#state").property('value');
    var countryinputElement = d3.select("#country").property('value');
    var shapeinputElement = d3.select("#shape").property('value');

    console.log(tableData);
    var filteredData = tableData


    // Aid from Dwight and Erin Wills

    if (dtinputElement !== "") {
        filteredData = filteredData.filter(ufo => ufo.datetime === dtinputElement)

    }

    if (cityinputElement !== "") {
        filteredData = filteredData.filter(ufo => ufo.city === cityinputElement);
    }

    if (stateinputElement !== "") {
        filteredData = filteredData.filter(ufo => ufo.state === stateinputElement);
    }

    if (countryinputElement !== "") {
        filteredData = filteredData.filter(ufo => ufo.country === countryinputElement);
    }

    if (shapeinputElement !== "") {
        filteredData = filteredData.filter(ufo => ufo.shape === shapeinputElement);
    }
           
    console.log(filteredData);
      
    filteredData.forEach((selections) => {
   
    console.log(selections);
   
    var row = tbody.append("tr");
    Object.entries(selections).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});
};