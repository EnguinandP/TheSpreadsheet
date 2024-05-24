const fs = require("fs");

const addItem = document.getElementById("add")
const importItems = documents.getElementById("import")

addItem.addEventListener('submit', () => {
    const tripData = new FormData(addItem);
    const data = Object.fromEntries(tripData);

    const tripJSON = JSON.stringify(data);

    fs.writeFile("data.json", tripJSON, (error) => {
        if(error) {
            console.error(error);
            throw error;
        }
    });

});

