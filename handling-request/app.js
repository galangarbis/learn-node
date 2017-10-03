//Function Order
function Order(idOrder){
    console.log("ID Order" + idOrder);
    //Run ProsesOrder Function with parameter idOrder
    ProsesOrder(idOrder);
}

//Proses Order with TimeOut 3 Second
function ProsesOrder(idOrder) {
    setTimeout(function () {
        console.log("ID Order"+ idOrder +" Processed");
    },3000);
}

//Call function order with parameter 101 With Multiple Request
Order(101);
Order(102);
Order(103);
Order(104);