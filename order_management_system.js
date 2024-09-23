const inventory = [
    { name: 'Espresso', price: 4, quantity: 20 },
    
    { name: 'Matcha', price: 6, quantity: 16 },
    
    { name: 'Cappuccino', price: 5, quantity: 18 },
    
    { name: 'Cheesecake', price: 7, quantity: 14 }
    
    ];

const orders= [];

let newOrders={
    customerName: "Beth", 
    items:[
        {productName: "Cappuccino", quantity: 1},
        {productName: "Cheesecake", quantity: 2}
    ],
    status: "Completed"

};
orders.push(newOrders);

console.log (orders);

function placeOrder(customerName, items){
    items.forEach(item=>{
        const product= inventory.find(product=> product.name===item.productName);
        if (!product){
            console.log (`"${item.productName}"does not exist.`);
            return;
        }
        if (item.quantity>product.quantity){
            console.log (`There is not enough ${item.productName} in stock.`);
            return;
        }
        
    });
    items.forEach(item=>{
        const product= inventory.find(product=> product.name===item.productName);
        if (product){
        product.quantity -= item.quantity;
    }
});
    orders.push({
        customerName: customerName,
        items: items,
        status: "Pending"
    });

    console.log (`The order has been placed for ${customerName}.`);
}
placeOrder("Bret", [{productName: "Matcha", quantity:3}]);
console.log(orders);
console.log(inventory);

function calculateOrderTotal(order){
    let total =0;
    order.items.forEach(item=>{
        const product= inventory.find (product=>product.name===item.productName);
        if (product){
            total += product.price*item.quantity;

        }else{
            console.log (`"${item.productName}" does not exist.`);
        
        }
    });
    return total;
}
const orderForZed={
    customerName: "Zed",
    items: [
        {productName: "Matcha", quantity:3 },
        {productName: "Cheesecake", quantity:1 },

    ],
    status: "Pending"
};
    
orders.push (orderForZed);

const totalPrice= calculateOrderTotal(orderForZed);
console.log (`The total order price is: ${totalPrice}`);


function completeOrder (customerName) {
    const order= orders.find (order=> order.customerName===customerName);

    if (order){
        order.status= "Completed";
        console.log( `The order for ${customerName} has been completed.`);
    } else{
        console.log (`The order for ${customerName} was not found.`);
    }
}
completeOrder ("Zed");
completeOrder ("Sally");


