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
    
    // Prevent the page from refreshing 
    
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredDate = tableData.filter(time => time.datetime === inputValue);

    console.log(filteredDate);
  
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

