import {setMeat} from "../components/ingredients.js";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setMeat(data.meat);
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getMeat = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/meat.json');
    myrequest.send();
}
export {getMeat};