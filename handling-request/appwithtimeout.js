//Function Order With TimeOut
function Order(idOrder, timeOut){
    console.log("ID Order" + idOrder + " TimeOut " + timeOut);
    //Run ProsesOrder Function with parameter idOrder
    ProsesOrder(idOrder, timeOut);
}

//Proses Order with Custom TimeOut
function ProsesOrder(idOrder, timeOut) {
    setTimeout(function () {
        console.log("ID Order"+ idOrder +" Processed");
    },timeOut);
}

//Call function order with parameter 101 With Multiple Request
Order(101,5000);
Order(102,2000);
Order(103,3000);
Order(104,8000);