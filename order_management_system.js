//Task 1: Create an inventory array of product objects
const inventory = [
    { name: 'Espresso', price: 4, quantity: 20 },
    
    { name: 'Matcha', price: 6, quantity: 16 },
    
    { name: 'Cappuccino', price: 5, quantity: 18 },
    
    { name: 'Cheesecake', price: 7, quantity: 14 }
    
    ];
//created the array

//Task 2: Create an orders array of order objects
const orders= []; 

let newOrders={
    customerName: "Beth", 
    items:[
        {productName: "Cappuccino", quantity: 1},
        {productName: "Cheesecake", quantity: 2}
    ],
    status: "Completed"

};
orders.push(newOrders); // The sample order is added to the orders array

console.log (orders); // logging the orders array

//Task 3: Create a function to place an order

function placeOrder(customerName, items){ 
    items.forEach(item=>{ // we are checking if the products are in stock; here we are iterating over each item
        const product= inventory.find(product=> product.name===item.productName);
        if (!product){
            console.log (`"${item.productName}"does not exist.`);
            return; //if the product does not exist, the function will stop running
        }
        if (item.quantity>product.quantity){
            console.log (`There is not enough ${item.productName} in stock.`);
            return;
        }
        
    });
    // Updating the inventory if items are available
    items.forEach(item=>{
        const product= inventory.find(product=> product.name===item.productName);
        if (product){
        product.quantity -= item.quantity; //subtracting the ordered quantity from the inventory
    }
});

//adding new order to the orders array with pending status
    orders.push({
        customerName: customerName,
        items: items,
        status: "Pending"
    });

    console.log (`The order has been placed for ${customerName}.`);
}
//placing an order and then logging the updated array and inventory
placeOrder("Bret", [{productName: "Matcha", quantity:3}]);
console.log(orders);
console.log(inventory);

//Task 4: Create a function to calculate total for an order
function calculateOrderTotal(order){
    let total =0;
    order.items.forEach(item=>{ //iterating over each item
        const product= inventory.find (product=>product.name===item.productName);
        if (product){
            total += product.price*item.quantity; // if the product exists, it will add the price multiplied by quanitty to the total

        }else{
            console.log (`"${item.productName}" does not exist.`); // if the product does not exist, it will display that the product does not exist
        
        }
    });
    return total; 
}
//creating an order
const orderForZed={
    customerName: "Zed",
    items: [
        {productName: "Matcha", quantity:3 },
        {productName: "Cheesecake", quantity:1 },

    ],
    status: "Pending"
};
    
//adding the order to the orders array
orders.push (orderForZed);

const totalPrice= calculateOrderTotal(orderForZed);
console.log (`The total order price is: ${totalPrice}`); //logging the total price of the order

//Task 5: Create a function to mark an order as completed
function completeOrder (customerName) {
    const order= orders.find (order=> order.customerName===customerName); //finding the order for the customer

    if (order){
        order.status= "Completed";// if the order exists the order status will be updated to completed and logged
        console.log( `The order for ${customerName} has been completed.`);
    } else{
        console.log (`The order for ${customerName} was not found.`);// if the order does not exist, it will display a message that the order was not found
    }
}
completeOrder ("Zed"); //this order will be marked as completed
completeOrder ("Sally"); // this customer does not exist, so a message will be displayed accordingly

//Task 6: Create a function to check pending orders
function checkPendingOrders (){
 let pendingOrders= false; //tracking if there are pending orders

 orders.forEach (order=>{ //iterating over each order
    if (order.status=== "Pending"){
        pendingOrders= true; // if a pending order is found, the customer's name will be logged
        console.log (`Customer Name: ${order.customerName}`);
        order.items.forEach (({productName, quantity})=>{ //iterating over the items in the order
            console.log (`${productName}: ${quantity}`);

        });
        console.log (`Status: ${order.status}`);

    }
 });
 if (!pendingOrders){ //if no pending orders are found, a message will be displayed
    console.log ("There are no pending orders.");

 }
}
checkPendingOrders();// calling the function
