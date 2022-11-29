/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
.then((response) => response.json())
.then((data) => {
    debugger;


    data.forEach(car => {
        let table = document.createElement("table");
    
        let header = table.createTHead();
        let headerRow = header.insertRow(0);
        let headerCell = headerRow.insertCell(0);
        
        headerCell.innerHTML = car.brand;
    
    
        let body = table.createTBody();

        car.models.forEach(model => {
            let row = body.insertRow()
            let cell = row.insertCell()

            cell.innerHTML = model;
        });

    let ouputElement = document.getElementById("output");
    ouputElement.append(table)
    })
});