import {setCheese} from "../components/cheese.js";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCheese(data.cheese);
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getCheese = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/cheese.json');
    myrequest.send();
}
export{getCheese};