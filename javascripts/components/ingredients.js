import{printToDom} from "../helpers/util.js";
import {getBread} from "../data/breadData.js";
import {getMeat} from "../data/meatData.js";

let bread =[];
let meat=[];

const setBread = (newArray) =>{
    bread = newArray;
}
const getBreadz = () => {
    return bread ;

}

const setMeat = (newArray) =>{
    meat = newArray;
}
const getMeatz = () => {
    return meat ;

}

getBread();
getMeat();


getMeatz();
getBreadz();


document.getElementById('breadButton').addEventListener('click', ()=>{
    const breadName= document.querySelector('.bread:checked').value;
    addBread(breadName);
});

document.getElementById('meatButton').addEventListener('click', ()=>{
    const meatName= document.querySelector('.meat:checked').value;
    addMeat(meatName);
});


let sandwichPrice = [];

const addBread=(breadType) => {
   const breadPrice= parseInt(bread[breadType]);
   sandwichPrice.push(breadPrice);
   sandwichTotal(sandwichPrice);
}

const addMeat=(meatType) => {
    const meatPrice = parseInt(meat[meatType]);
    sandwichPrice.push(meatPrice);
    sandwichTotal(sandwichPrice);
}


let sandwichTotal = (sandwichPrice)=> {
    let total = sandwichPrice.reduce((a,b)=> a+b, 0);
    console.log(total);
}

// const sandwichBuilder = (e) => {
//     const selectBread = e.target.id;
//     const e = document.getElementById('bread-select');
//     let breadPrint = e.options[e.slectedIndex].text
//     printToDom(breadPrint);
    
// }

 export{setBread, setMeat};