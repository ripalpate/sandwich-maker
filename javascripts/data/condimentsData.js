import { setCondiments } from "../components/ingredients.js";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCondiments(data.condiments);
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getCondiments = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/condiments.json');
    myrequest.send();
}
export {getCondiments};