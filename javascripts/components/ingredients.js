import{printToDom} from "../helpers/util.js";
import {getbread} from "../data/breadData.js";

const bread =[];

const getBreadz = () => {
    return bread ;
}


const sandwichBuilder = () => {
    const e = document.getElementById('bread-select');
    let breadPrint = e.options[e.slectedIndex].text
    printToDom(breadPrint);
    
}

export{sandwichBuilder, getBreadz};