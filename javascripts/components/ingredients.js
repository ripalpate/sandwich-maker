import{printToDom} from "../helpers/util.js";

let sandwichPrice = [];

let sandwichTotal = (sandwichPrice)=> {
    let total = '';
        total += `<div class="card-body">`;
        // total +=    `<h5 class="card-title">Order Review : </h5>`;
        total +=    `<p class="card-text">Total Price: ${sandwichPrice.reduce((a,b)=> a+b, 0)}</p>`;
        total += `</div>`;
    printToDom(total);
}


 export {sandwichPrice, sandwichTotal};