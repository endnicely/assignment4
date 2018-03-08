/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System ");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update stock");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function sortFunction(a, b) {
    "use strict";
    if (a[0] === b[0]) {
        return 0;
    } else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

function locStorage(invent) {
    "use strict";
    if (!localStorage.inventory) {
        localStorage.inventory = JSON.stringify(invent);
        
    } else {
        invent = JSON.parse(localStorage.inventory);
        return invent;
    }
}

function view(inventory) {
    "use strict";
    inventory.sort(sortFunction);
    inventory = locStorage(inventory);
    inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " (" + product[2] + ") $" + product[3]);
    });
}

function update(inventory) {
    "use strict";
    inventory = locStorage(inventory);
    
    var i, quantity, invalid_sku = true, sku = parseInt(window.prompt("Enter a product's sku number please!"), 10);
    /* sku number validation */
    do {
        if (isNaN(sku)) {
            sku =  parseInt(window.prompt("The sku number should be a positive integer, enter a valid sku number please!"), 10);
        } else {
            for (i = 0; i < inventory.length; i += 1) {
                if (inventory[i][0] === sku) {
                    invalid_sku = false;
                    break;
                }
            }
            if (invalid_sku) {
                sku =  parseInt(window.prompt("The sku number can't be found, enter a valid sku number please!"), 10);
            }
        }
    } while (isNaN(sku) || invalid_sku);
    
    /* stock quantity validation */
    quantity = parseInt(window.prompt("Enter a new stock quantity please!"), 10);
    while (isNaN(quantity) ||  quantity < 0) {
        quantity = parseInt(window.prompt("Please provide any non-negative integer for the quantity!"), 10);
    }
    
    /* update stock quantity for the item associated with the sku number */
    inventory[i][2] = quantity;
    /* update localStorage */
    localStorage.inventory = JSON.stringify(inventory);
    
}


function main() {
    "use strict";
    var inventory, command;
    
    displayMenu();
    
    inventory = [[3223, "Hat", 12, 14.99], [2233, "Socks", 36, 9.99], [4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [9382, "Jacket", 5, 49.99]];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
                
            } else if (command === "update") {
                update(inventory);
                             
            } else if (command === "exit") {
                break;
                
            } else {
                window.alert("Command is not valid");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
    
}

main();