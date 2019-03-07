// from data.js
var tableData = data;

// Declare Variables
var selectFilterDate= d3.select("#datetime");
var selectFilterShape=d3.select("#shape");
var selectFilterCity=d3.select("#city");
var selectFilterState=d3.select("#state");
var selectFilterCountry=d3.select("#country");
var selectButton=d3.select("#filter-btn");

var tbody=d3.select("tbody");
var columns=["datetime", "city", "state", "country", "shape","durationMinutes", "comments"]

//Table Data Fill
var fill = (inputData)=> {
inputData.forEach (sighting =>{
    var row =tbody.append("tr");
    columns.forEach(column=>row.append("td").text(sighting[column]))

});
}
fill(tableData);

//Perform filter
selectButton.on("click",() =>{
d3.event.preventDefault();
var enterDate= selectFilterDate.property("value").trim();
var enterShape =selectFilterShape.property("value").toLowerCase().trim();
var enterCity =selectFilterCity.property("value").toLowerCase().trim();
var enterState =selectFilterState.property("value").toLowerCase().trim();
var enterCountry =selectFilterCountry.property("value").toLowerCase().trim();

var filterDate=tableData.filter(tableData=> tableData.datetime===enterDate);
console.log(filterDate)
var filterShape=tableData.filter(tableData=> tableData.shape===enterShape);
console.log(filterShape)
var filterCity=tableData.filter(tableData=> tableData.city===enterCity);
console.log(filterCity)
var filterState=tableData.filter(tableData=> tableData.state===enterState);
console.log(filterState)
var filterCountry=tableData.filter(tableData=> tableData.country===enterCountry);
console.log(filterCountry)
var filterAll=tableData.filter(tableData=> tableData.datetime==enterDate && tableData.shape===enterShape && tableData.city===enterCity && tableData.state===enterState && tableData.country===enterCountry);
console.log(filterAll)

tbody.html("");

let feedback = { filterDate, filterShape, filterCity, filterState, filterCountry, filterAll}
if (feedback.filterAll.length !==0) { 
    fill(filterAll);
}
    else if(feedback.filterAll.length===0 &&((feedback.filterDate.length !==0  || feedback.filterShape.length !==0 || feedback.filterCity.length !==0 || feedback.filterState.length !==0 || feedback.filterCountry.length !==0))){
    fill(filterDate) || fill(filterShape) || fill(filterCity) || fill(filterState) || fill(filterCountry);
    }
    else{
        tbody.append("tr").append("td").text("Results are not in range!");
}
})


