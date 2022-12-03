const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

const cities = [];


fetch(endpoint)
  .then( (response) => response.json())
  .then((data) => cities.push(...data));



  // functions 

function findMatches(wordToMatch , cities){
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch , 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

function displayMatches(){
    let matchArray = findMatches(this.value,cities);
    console.log(matchArray);
}


input.addEventListener('input' , displayMatches)
