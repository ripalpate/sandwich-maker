import { sandwichBuilder, getBreadz } from "../components/ingredients";

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    sandwichBuilder(getBreadz());
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getBread = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/bread.json');
    myrequest.send();
}
export {getBread};