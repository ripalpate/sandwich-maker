import {sandwichPrice,sandwichTotal} from "../components/ingredients.js";

let bread =[];

const setBread = (newArray) =>{
    bread = newArray;
}
const getBreadz = () => {
    return bread ;
}

const addBread=(breadType) => {
    const breadPrice= parseFloat(bread[breadType]);
    sandwichPrice.push(breadPrice);
   sandwichTotal(sandwichPrice);
 }

 getBreadz();


export{setBread, addBread};