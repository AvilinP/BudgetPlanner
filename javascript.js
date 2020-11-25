//This program calculates the income and expenses and show an available budget after calculations are made 

var listIncome = []; // Creates an array to calculate income  
var listExpense = []; // Creates an array to calculate expenses 
var listTotal = []; // Creates an array for "Available in travel budget"

// Function for calculation, list creation and to be called in button 
function add() {

    var operator = document.getElementById('operator').value; // +/- operator
    var value = document.getElementById('value').value * 1; // value input
    var description = document.getElementById('description').value; // description input
    var totalBudget = document.getElementById('totalBudget'); // budget result ('Available in travel budget') in html


    // if user chooses + in drop down meny for travel budget (income)
    if (operator === '+') {

        // creates and appends li element into ul element in HTML
        var li = document.createElement("li"); // declares and creates li element
        li.innerText = description + "  " + value; // chooses what data to put into li element 
        var ul = document.querySelector(".incomeLista") // declares and choose pre-existing element from html  
        ul.appendChild(li); // appends JS-created li element to ul element in html

         // Converts 'value' to a numeric value
        listTotal.push(Number(value));

    }

    // if user chooses - in drop down meny for travel expenses
    else {

        // creates, innerText and append list content for 'Travel expenses' 
        var li = document.createElement("li"); 
        li.innerText = description + "  " + value; 
        var ul = document.querySelector(".expenseLista") 
        ul.appendChild(li); 

        // Converts 'value' from listExpense to a numeric value
        listTotal.push(Number(-value)); 
               
    }  

    // calculates and shows totalt budget > 'Available in travel budget'
    var total = 0;  // creates starting point for input values and calculation in for loop
    for (var i = 0; i < listTotal.length; i++) {
        total += listTotal[i]; 
    } 
    totalBudget.innerText = total  // innerText to show calculation in html

}


// Function to relaod and clear the page when clicking on button
function clear() {
    location.reload() // function built to reload the page 
}

//Event listener to call on function 'clear()'
var clearButton = document.querySelector("#clear")
clearButton.addEventListener("click", clear);
