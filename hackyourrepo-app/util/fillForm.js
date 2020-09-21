function filledForm(){
  repoLink.innerHTML = ""; 
  descTag.innerText = "";
  forkTag.innerText = "";
  updateTag.innerText = "";

  const reposURL = `https://api.github.com/repos/HackYourFuture/${repositoriesSelect.value}`;
  fetch(reposURL)
  .then(response => {
    if (response.status >=200 && response.status < 400 ) {
      return response.json();
    } else {
      throw "HTTP ERROR"
    }
  })

  .then(jsonData =>{
    repoLink.innerHTML = jsonData.name; 
    repoLink.setAttribute('href', jsonData.html_url);
    descTag.innerText = jsonData.description;
    forkTag.innerText = jsonData.forks;
    updateTag.innerText = jsonData.updated_at;

    fetch(`https://api.github.com/repos/HackYourFuture/${repositoriesSelect.value}/contributors`)

    .then(response => {
      if (response.status >=200 && response.status < 400 ) {
        return response.json();
      } else {
        throw "HTTP ERROR"
      }
    })
    .then(jsonData =>{
      const contributorsArray = jsonData;
      pagination(contributorsArray);
    })
  });
}