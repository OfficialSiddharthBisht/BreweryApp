let searchBtn = document.getElementById("search");
searchBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let input = document.getElementById("input").value;
    let url = `https://api.openbrewerydb.org/breweries?by_name=${inut}&per_page=3`;
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        response.json();
    })
    .catch((error)=>{
        console.log(error);
    })

})