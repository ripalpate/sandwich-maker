import {sandwichPrice,sandwichTotal} from "../components/ingredients.js";

let cheese =[];

const setCheese = (newArray) =>{
    cheese = newArray;
}
const getCheesez = () => {
    return cheese ;
}

const addCheese=(cheeseType) => {
    const cheesePrice= parseFloat(cheese[cheeseType]);
    sandwichPrice.push(cheesePrice);
   sandwichTotal(sandwichPrice);
 }

 getCheesez();


export{setCheese, addCheese};