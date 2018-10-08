import {sandwichPrice,sandwichTotal} from "../components/ingredients.js";

let veggies =[];

const setVeggies = (newArray) =>{
    veggies = newArray;
}
const getVeggiesz = () => {
    return veggies ;
}

const addVeggies=(veggiesType) => {
    const veggiesPrice= parseFloat(veggies[veggiesType]);
    sandwichPrice.push(veggiesPrice);
   sandwichTotal(sandwichPrice);
 }

 getVeggiesz();


export{setVeggies, addVeggies};