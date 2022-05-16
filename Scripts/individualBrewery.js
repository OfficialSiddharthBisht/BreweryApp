let id = JSON.parse(localStorage.getItem("id"));
console.log(id);
let url = `https://api.openbrewerydb.org/breweries/${id}`;
fetch(url)
.then((response)=>{
    return response.json();
})
.then((response)=>{
    displayIndividual(response);
})
.catch((error)=>{
    console.log(error);
})

let container = document.getElementById("individual-page-container");
function displayIndividual(data){
    // console.log(data);
    let breweryCard = document.createElement("div");
    let breweryName = document.createElement("h3");
    let breweryType = document.createElement("p");
    let city = document.createElement("p");
    let state = document.createElement("p");
    breweryName.innerText = data.name;
    breweryType.innerText = data.brewery_type;
    city.innerText = "City => "+ data.city;
    state.innerText = "State => "+data.state;
    breweryCard.append(breweryName,breweryType,city,state);
    container.append(breweryCard);
}