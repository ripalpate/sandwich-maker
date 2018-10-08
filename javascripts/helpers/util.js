 
 const printToDom = (stringToPrint) => {
     const selectedDiv = document.getElementById('order-review');
     selectedDiv.innerHTML = stringToPrint;

 }

 const writeToDom = (stringToPrint) => {
     document.getElementById('ingredient-type').innerHTML += stringToPrint + "<br>";
 }
 export {printToDom, writeToDom};