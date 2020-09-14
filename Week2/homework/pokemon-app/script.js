function main(){
  const getPokemon = document.createElement('button');
  getPokemon.innerText = "Get Pokemon!";
  getPokemon.style.display = "block";
  getPokemon.style.margin = "1rem"
  document.body.appendChild(getPokemon);

  const selectOption = document.createElement('select');
  selectOption.style.margin = "0.25rem 1rem";
  document.body.appendChild(selectOption);

  const pictureFrame = document.createElement('div');
  pictureFrame.style.margin = "0.25rem 1rem";
  document.body.appendChild(pictureFrame);

  function fetchData() {
    const pokeAPIUrl = "https://pokeapi.co/api/v2/pokemon";
    fetch(pokeAPIUrl)
      .then(response => {
        if (response.status >= 200 && response.status< 400) {
          return response.json()
        } else {
          throw "HTTP ERROR"
        }
      })
      .then(jsonData => {
        const newArray = jsonData.results;
        newArray.forEach((element) => {
          var opt = document.createElement('option');
          opt.appendChild(document.createTextNode(`${element.name}`));
          selectOption.appendChild(opt)
         }); 
         selectOption.addEventListener('change', function(){
           pictureFrame.innerHTML = ""
           newArray.forEach((element2 => {
             if (element2.name === selectOption.value){
               const secondURL = element2.url;
               secondFetchData(secondURL)
             }
           }))
         })
      })
     .catch(error => console.log(error))
  }

  function secondFetchData(url2){
    fetch (url2)
    .then(response => {
      if (response.status >= 200 && response.status< 400) {
        return response.json()
      } else {
        throw "HTTP ERROR"
      }
    })
    .then(jsonData => {
      addPokemonToDom(jsonData.sprites.front_shiny)
  })
  .catch(error => console.log(error))
 }

  function addPokemonToDom(imgsource){
    const pokemonImage = document.createElement('img');
    pokemonImage.src = imgsource;
    pictureFrame.appendChild(pokemonImage);
 }

 getPokemon.addEventListener('click', fetchData)

}

window.onload = main;