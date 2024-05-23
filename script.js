// dataJson = [
//     {
//       "id": 1,
//       "name": "Apple",
//       "category": "Fruits",
//       "price": 0.5,
//       "inStock": true,
//       "description": "A crisp, sweet red apple.",
//       "nutrition": {
//         "calories": 52,
//         "fat": 0.2,
//         "carbohydrates": 14,
//         "protein": 0.3
//       }
//     },
//     {
//       "id": 2,
//       "name": "Banana",
//       "category": "Fruits",
//       "price": 0.3,
//       "inStock": true,
//       "description": "A ripe, yellow banana.",
//       "nutrition": {
//         "calories": 89,
//         "fat": 0.3,
//         "carbohydrates": 23,
//         "protein": 1.1
//       }
//     },
//     {
//       "id": 3,
//       "name": "Carrot",
//       "category": "Vegetables",
//       "price": 0.2,
//       "inStock": true,
//       "description": "A fresh, crunchy carrot.",
//       "nutrition": {
//         "calories": 41,
//         "fat": 0.2,
//         "carbohydrates": 10,
//         "protein": 0.9
//       }
//     },
//     {
//       "id": 4,
//       "name": "Bread",
//       "category": "Bakery",
//       "price": 2.5,
//       "inStock": true,
//       "description": "A loaf of freshly baked bread.",
//       "nutrition": {
//         "calories": 265,
//         "fat": 3.2,
//         "carbohydrates": 49,
//         "protein": 9
//       }
//     }
// ];

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

//Fetch the JSON file and then call generateTable function
fetch('./Assignment.json')
    .then(response => response.json())
    .then(dataJson => {
        data = dataJson;
        generateTable(dataJson);
    })
    .catch(error => console.error('Error loading the JSON file:', error));


