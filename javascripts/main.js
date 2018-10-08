import { getBread } from "./data/breadData.js";
import { addEvents } from "./helpers/events.js";
import { getMeat } from "./data/meatData.js";
import { getCheese } from "./data/cheeseData.js";
import {getCondiments} from "./data/condimentsData.js";
import { getVeggies } from "./data/veggiesData.js";

const initializeApp = ()=> {
    addEvents();
    getBread();
    getMeat();
    getCheese();
    getCondiments();
    getVeggies();
}
initializeApp();