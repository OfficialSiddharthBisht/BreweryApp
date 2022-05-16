let searchBtn = document.getElementById("search");
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let input = document.getElementById("input").value;
    let url = `https://api.openbrewerydb.org/breweries?by_name=${input}&per_page=3`;
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayInCard(response);
        // console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
})

let container = document.getElementById("search-page-container");

function displayInCard(data){
    data.forEach(element => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let breweryType = document.createElement("p");
        let city = document.createElement("p");
        let state = document.createElement("p");
        name.innerText = element.name;
        breweryType.innerText = element.brewery_type;
        city.innerText = element.city;
        state.innerText = element.state;
        card.setAttribute('id',card);
        card.append(name,breweryType,city,state);
        container.append(card);
    });
}