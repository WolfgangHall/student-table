var removeButtons = document.getElementsByClassName("deleteBtn");

function deleteRow() {
 var row = this.parentNode.parentNode;
 row.parentNode.removeChild(row);
}

for (var i = 0; i < removeButtons.length; i++) {
 removeButtons[i].addEventListener("click", deleteRow);
}



var addButton = document.getElementById("addBtn");


// add id for each input value
// create variables for the added input value

addButton.addEventListener("click", addRow);

function addRow () {
 var table = document.getElementById('student-table');

 var rowCount = table.rows.length;
 var row = table.insertRow(rowCount);

 var cell1 = row.insertCell(0);
 cell1.innerHTML = cell1.innerHTML +'<input type="text" class="form-control" id="first-name" placeholder="Type first name here">';

 var cell2 = row.insertCell(1);
 cell2.innerHTML = cell2.innerHTML +'<input type="text" class="form-control" id="last-name" placeholder="Type last name here">';

 var cell3 = row.insertCell(2);
 cell3.innerHTML = cell3.innerHTML +'<input type="text" class="form-control" id="email" placeholder="Type email here">';

 var cell4 = row.insertCell(3);
 cell4.innerHTML = cell4.innerHTML + '<input type="button" value="X" class="deleteBtn" /></td>'

 for (var i = 0; i < removeButtons.length; i++) {
 removeButtons[i].addEventListener("click", deleteRow);
}
}


function removeTableRows () {
var studentTable = document.getElementsByTagName("td")[0].parentNode;
studentTable.parentNode.removeChild(studentTable);
 
 setTimeout (removeTableRows, 5000);  
}


removeTableRows();





