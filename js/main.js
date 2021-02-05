import { setSearchFocus } from './searchBar.js';
import { buildSearchResults } from './searchResults.js';
import { getSearchTerm, retrieveSearchResults } from './dataFunctions.js';

document.addEventListener('readystatechange', (event) => {
    if(event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    // TODO 3 listeners

    const form = document.getElementyById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

// Procedural "workflow" funcion
const submitTheSearch = (event) => {
    event.preventDefault();
    // TODO delete search results
    // process the search
    processTheSearch();
    // set the focus
    setSearchFocus();
}

// Procedural
const processTheSearch = async () => {
    // clear the stats line
    const searchTerm = getSearchTerm();
    if(searchTerm === "") return;
    const resultArray = await retrieveSearchResults(searchTerm);
    if(resultArray.length) buildSearchResults(resultArray);
     // build search results
    // TODO set stats line
};