import {sandwichPrice,sandwichTotal} from "../components/ingredients.js";

let condiments =[];

const setCondiments = (newArray) =>{
    condiments = newArray;
}
const getCondimentsz = () => {
    return condiments ;
}

const addCondiments=(condimentsType) => {
    const condimentsPrice= parseFloat(condiments[condimentsType]);
    sandwichPrice.push(condimentsPrice);
   sandwichTotal(sandwichPrice);
 }

 getCondimentsz();


export{setCondiments, addCondiments};