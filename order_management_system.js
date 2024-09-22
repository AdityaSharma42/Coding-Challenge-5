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
    for (let item of items){
        const product= inventory.find(product=> product.name===item.productName);
        if (!product){
            console.log (`"${item.productName}"does not exist.`);
            return;
        }
        if (item.quantity>product.quantity){
            console.log (`There is not enough ${item.productName} in stock.`);
            return;
        }
        
    }
    for  (let item of items){
        const product= inventory.find(product=> product.name===item.productName);
        product.quantity -= item.quantity;
    }
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