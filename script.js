
const tableContainer = document.getElementById('table'); //get table id
let data = []; //use to get the json data for sorting

//run loop through json array
function generateTable(dataJson) {
    tableContainer.innerHTML = '';
    for (let data of dataJson) {
        getTable(data);
    }
}
//add the data into the table
function getTable(data) {
    const tableUI = `
    <tr>
        <td>${data.name}</td>
        <td>${data.price}</td>
        <td>${data.description}</td>
    </tr>`;

    tableContainer.innerHTML += tableUI;
}
//sort Data by name 
function sortTableDataByName(){
   data.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
//generate the data again after sort
generateTable(data);
}

// Fetch the JSON file and then call generateTable function
fetch('./Assignment.json')
    .then(response => response.json())
    .then(dataJson => {
        data = dataJson;
        generateTable(dataJson);
    })
    .catch(error => console.error('Error loading the JSON file:', error));

