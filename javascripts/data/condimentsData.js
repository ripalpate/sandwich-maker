function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    console.log(data);
}
function executeThisCodeIfXhrFails () {
    console.log('error');
}

const getCondiments = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/bread.json');
    myrequest.send();
}
// export {getCondiments};