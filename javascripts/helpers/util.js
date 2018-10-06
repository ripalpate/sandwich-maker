 
 const printToDom = (stringToPrint) => {
     const selectedDiv = document.getElementById('order-review');
     selectedDiv.innerHTML = stringToPrint;

 }
 export {printToDom};