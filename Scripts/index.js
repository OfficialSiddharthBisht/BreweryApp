let container = document.getElementById("container");
let url = "https://api.openbrewerydb.org/breweries";
fetch(url)
.then((response)=>{
    return response.json();
})
.then((response)=>{
    displayBrewery(response);
})
.catch((error)=>{
    console.log(error);
})

function displayBrewery(breweries){
    breweries.forEach(brewery => {
        let breweryCard = document.createElement("tr");
        let breweryName = document.createElement("td");
        let breweryid = document.createElement("td");
        let breweryType = document.createElement("td");

        breweryName.innerText = brewery.name;
        breweryid.innerText = brewery.id;
        breweryType.innerText = brewery.brewery_type;
        breweryCard.append(breweryName ,breweryType);
        container.append(breweryCard);
    });
}