import { setVeggies} from "../components/ingredients.js";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setVeggies(data.veggies);
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getVeggies = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/veggies.json');
    myrequest.send();
}
export {getVeggies};