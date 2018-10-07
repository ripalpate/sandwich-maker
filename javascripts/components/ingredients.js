import{printToDom} from "../helpers/util.js";
import {getBread} from "../data/breadData.js";
import {getMeat} from "../data/meatData.js";
import {getCheese} from "../data/cheeseData.js";
import {getCondiments} from "../data/condimentsData.js";
import {getVeggies} from "../data/veggiesData.js";

let bread =[];
let meat=[];
let cheese=[];
let condiments=[];
let veggies = [];

const setBread = (newArray) =>{
    bread = newArray;
}
const getBreadz = () => {
    return bread ;
}
const setCheese = (newArray) =>{
    cheese = newArray;
}
const getcheesez = () => {
    return cheese ;
}

const setMeat = (newArray) =>{
    meat = newArray;
}
const getMeatz = () => {
    return meat ;
}

const setCondiments = (newArray) =>{
    condiments = newArray;
}
const getCondimentsz = () => {
    return condiments ;
}

const setVeggies = (newArray) =>{
    veggies = newArray;
}
const getVeggiesz = () => {
    return veggies ;
}

getBread();
getMeat();


getMeatz();
getBreadz();

getCheese();
getcheesez();

getCondiments();
getCondimentsz();

getVeggies();
getVeggiesz();

document.getElementById('breadButton').addEventListener('click', ()=>{
    const breadName= document.querySelector('.bread:checked').value;
    addBread(breadName);
});

document.getElementById('meatButton').addEventListener('click', ()=>{
    const meatName= document.querySelector('.meat:checked').value;
    addMeat(meatName);
});

document.getElementById('cheeseButton').addEventListener('click', ()=>{
    const cheeseName= document.querySelector('.cheese:checked').value;
    addCheese(cheeseName);
});

document.getElementById('condimentsButton').addEventListener('click', ()=>{
    const condimentsName= document.querySelector('.condiments:checked').value;
    addCondiments(condimentsName);
});

document.getElementById('veggiesButton').addEventListener('click', ()=>{
    const veggiesName= document.querySelector('.veggies:checked').value;
    addVeggies(veggiesName);
});

let sandwichPrice = [];

const addBread=(breadType) => {
   const breadPrice= parseFloat(bread[breadType]);
   sandwichPrice.push(breadPrice);
  sandwichTotal(sandwichPrice);
}

const addMeat=(meatType) => {
    const meatPrice = parseFloat(meat[meatType]);
    sandwichPrice.push(meatPrice);
    sandwichTotal(sandwichPrice);
}

const addCheese=(cheeseType) => {
    const cheesePrice = parseFloat(cheese[cheeseType]);
    sandwichPrice.push(cheesePrice);
    sandwichTotal(sandwichPrice);
}

const addCondiments =(condimentsType) => {
    const condimentsPrice = parseFloat(condiments[condimentsType]);
    sandwichPrice.push(condimentsPrice);
    sandwichTotal(sandwichPrice);
}

const addVeggies =(veggiesType) => {
    const veggiesPrice = parseFloat(veggies[veggiesType]);
    sandwichPrice.push(veggiesPrice);
     sandwichTotal(sandwichPrice);
}
//let total = sandwichPrice.reduce((a,b)=> a+b, 0);

let sandwichTotal = (sandwichPrice)=> {
    let total = '';
        total += `<div class="card-body">`;
        total +=    `<h5 class="card-title">Order Review : </h5>`;
        total +=    `<p class="card-text">Total Price: ${sandwichPrice.reduce((a,b)=> a+b, 0)}</p>`;
        total += `</div>`;
    printToDom(total);
}


 export{setBread, setMeat, setCheese, setVeggies, setCondiments};