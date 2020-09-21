function fetchRepositories() {
  const reposURL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";
  fetch(reposURL)
  .then(response => {
    if (response.status >=200 && response.status < 400 ) {
      return response.json();
    } else {
      throw "HTTP ERROR"
    }
  })
  .then(jsonData =>{
    let arraySort = [];
    jsonData.forEach(element => {
      arraySort.push(element.name);
    });
    arraySort.sort(function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    });
    arraySort.forEach(element => {
      const option = document.createElement('option');
      option.innerText= element;
      repositoriesSelect.appendChild(option);
    });

    filledForm();
  })
  .catch(error => console.log(error))
}