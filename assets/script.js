window.alert("Hello from Script");
//How many items do we have//
//let store the date for how many items//
let totalQuantity =1

//reference the text//
let quantityText = document.querySelector (".total-quantity")

// reference buttons//
let upButton = document.querySelector ("#quantity-up")
let downButton = document.querySelector ("#quantity-down")

//register listeners for when buttons are clicked//

upButton.addEventlistener ("click"), function (){
   window.alert ("up button clickes")
   textQuantity = totalQuantity +1 
   quantityText.textQuantity= "Quantity:" = + totalQuantity
}
downButton.addEventListener ("click"), function (){
      window.alert ("down buton ")
     
      //if zero we do not want to go negative//

} if (totalQuantity > 0 ) {
   quantityText = totalQuantity -1
   quantityText="quantity:" + totalQuantity
}



