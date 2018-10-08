import {sandwichPrice, sandwichTotal} from "../components/ingredients.js";

let meat =[];

const setMeat = (newArray) =>{
    meat = newArray;
}
const getMeatz = () => {
    return meat ;
}

const addMeat=(meatType) => {
    const meatPrice= parseFloat(meat[meatType]);
    sandwichPrice.push(meatPrice);
   sandwichTotal(sandwichPrice);
 }

 getMeatz();


export{setMeat, addMeat};