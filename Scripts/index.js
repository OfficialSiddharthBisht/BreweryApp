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
        let city = document.createElement("td");
        let state = document.createElement("td");
        let moreDetails = document.createElement("button");

        breweryName.innerText = brewery.name;
        breweryid.innerText = brewery.id;
        breweryType.innerText = brewery.brewery_type;
        city.innerText = brewery.city;
        state.innerText = brewery.state;
        let id = brewery.id;
        moreDetails.addEventListener('click',()=>{
            let newUrl = `https://api.openbrewerydb.org/breweries/${id}`;
            fetch(newUrl)
            .then((response)=>{
                return response.json();
            })
            .then((response)=>{
                // console.log(response);
                displayIndividualBrewery(response.id);
            })
            .catch((error)=>{
                console.log(error);
            })
        });
        moreDetails.innerText = "More Details"
        breweryCard.append(breweryName ,breweryType,city ,state,moreDetails);
        container.append(breweryCard);
    });
}
function displayIndividualBrewery(brewery){
        localStorage.setItem("id",JSON.stringify(brewery));
        document.location.href = "../individualBrewery.html";
    }