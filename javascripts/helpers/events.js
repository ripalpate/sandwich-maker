import {addVeggies} from "../components/veggies.js";
import {addBread} from "../components/bread.js";
import {addMeat} from "../components/meat.js";
import {addCheese} from "../components/cheese.js";
import {addCondiments} from "../components/condiments.js"

import {writeToDom} from "./util.js";


const addEvents = () => {
document.getElementById('breadButton').addEventListener('click', ()=>{
    const breadName= document.querySelector('.bread:checked').value;
    writeToDom(breadName);
    addBread(breadName);
});

document.getElementById('meatButton').addEventListener('click', ()=>{
    const meatName= document.querySelector('.meat:checked').value;
    writeToDom(meatName);
    addMeat(meatName);
});

document.getElementById('cheeseButton').addEventListener('click', ()=>{
    const cheeseName= document.querySelector('.cheese:checked').value;
    writeToDom(cheeseName);
    addCheese(cheeseName);
});

document.getElementById('condimentsButton').addEventListener('click', ()=>{
    const condimentsName= document.querySelector('.condiments:checked').value;
    writeToDom(condimentsName);
    addCondiments(condimentsName);
});

document.getElementById('veggiesButton').addEventListener('click', ()=>{
    const veggiesName= document.querySelector('.veggies:checked').value;
    writeToDom(veggiesName);
    addVeggies(veggiesName);
});
}

export {addEvents};