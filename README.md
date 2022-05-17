# BreweryApp
What's left --> Debouncing 
Your application should have three pages in total;

Main Page / Home Page;
Individual Brewery Page;
Search Page;
All the pages should have a navbar

Navbar should contain two links/button ( any one is fine )
clicking on main page should redirect to main/home page;
clicking on search page should redirect to search page
You will be using brewery API link to which is shared here:

DOCUMENTATION LINK : https://www.openbrewerydb.org/documentation

Main Page :
Main page should list/display all the available breweries in the form of table ( 1 brewery = 1 row on table ).
you can list the following properties in a row ( name, brewery_type, city, state ) and a button which would redirect to individual brewery page;
when user clicks on the MORE DETAILS button; the brewery id should be stored in local storage.
Implement a select button which would list all the available breweries by its type ( for example if i select brewery type as micro from select box. then only the micro brewery types should be listed )
Individual Brewery Page :
Retrieve the brewery id of the clicked brewery id from the local storage, make a network request and get all the details related to the brewery and display the same to DOM in the form of card;
Search Page:
A search bar which would allow users to search brewery by it's name;
the listing can be similary to what we have in main page wherein you can list the following properties in a row ( name, brewery_type, city, state ) and a button which would redirect to individual brewery page; When user clicks on the MORE DETAILS button; redirect to individual product page happens and the brewery id should be stored in local storage.
apply debouncing to the above search bar. if user pauses for 1000ms , only make a network request then;
NOTE : use ES6 syntax wherever possible and also make sure you are using async-await wherever possible. Focus more on the functionality of your app. Avoid spending more time in styling. You can do that once you finish with the functionality of your app. All the best!
