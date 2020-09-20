"use strict";

//container
const containerDiv = document.createElement('div')
containerDiv.className = "container";
document.body.appendChild(containerDiv);

//BlueHeader
const BlueHeaderDiv = document.createElement('div')
BlueHeaderDiv.className = "blue-header";
containerDiv.appendChild(BlueHeaderDiv);

const label = document.createElement('label');
label.innerText = "HYF Repositiries";
BlueHeaderDiv.appendChild(label);

const repositoriesSelect = document.createElement('select');
repositoriesSelect.id = "hyf-rep";
BlueHeaderDiv.appendChild(repositoriesSelect);

//mainDiv
const mainDiv = document.createElement('div');
mainDiv.classList.add("main", "flex")
containerDiv.appendChild(mainDiv);

// mainLeft Div
const mLeftDiv = document.createElement('div')
mLeftDiv.className = "m-left";
mainDiv.appendChild(mLeftDiv);

const firstLeftDiv = document.createElement('div')
firstLeftDiv.className = "flex";
mLeftDiv.appendChild(firstLeftDiv);

const labelRepositort = document.createElement('label');
labelRepositort.innerText = "Repositiries:";
firstLeftDiv.appendChild(labelRepositort);

const secondLeftDiv = document.createElement('div')
secondLeftDiv.className = "flex";
mLeftDiv.appendChild(secondLeftDiv);

const labelDescription = document.createElement('label');
labelDescription.innerText = "Description:";
secondLeftDiv.appendChild(labelDescription);

const thirdLeftDiv = document.createElement('div')
thirdLeftDiv.className = "flex";
mLeftDiv.appendChild(thirdLeftDiv);

const labelForks = document.createElement('label');
labelForks.innerText = "Forks:";
thirdLeftDiv.appendChild(labelForks);

const forthLeftDiv = document.createElement('div')
forthLeftDiv.className = "flex";
mLeftDiv.appendChild(forthLeftDiv);

const labelUpdated = document.createElement('label');
labelUpdated.innerText = "Updated:";
forthLeftDiv.appendChild(labelUpdated);

const repoLink = document.createElement('a');
repoLink.innerHTML = "";
firstLeftDiv.appendChild(repoLink);

const descTag = document.createElement('p');
descTag.innerText = ('');
secondLeftDiv.appendChild(descTag);

const forkTag = document.createElement('p');
forkTag.innerText = ('');
thirdLeftDiv.appendChild(forkTag);

const updateTag = document.createElement('p');
updateTag.innerText = ('');
forthLeftDiv.appendChild(updateTag);

//Main Right Div
const mrightDiv = document.createElement('div');
mrightDiv.className = "m-right";
mainDiv.appendChild(mrightDiv);

//Div Right  row 1 (contributors)
const rightfistRowDiv = document.createElement('div');
rightfistRowDiv.className = "mr-firstrow";
rightfistRowDiv.innerText = "Contributors";
mrightDiv.appendChild(rightfistRowDiv);

const footer = document.createElement('footer');
footer.innerText = "HYF Repositories";
document.body.appendChild(footer);

//main function
function main(){
   
   //function fetchRepositories
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

  repositoriesSelect.addEventListener('change', filledForm);
  
  // function FilledForm
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
        const newArray = jsonData;
        mrightDiv.innerHTML= "";
        newArray.forEach(element =>{
          mrightDiv.innerHTML +=
          `<div class="flex">
          <img src= ${element.avatar_url} class="person-img"></img>
          <a href ="https://github.com/${element.login}">
          ${element.login}</a>
          <div class="fork-no">${element.contributions}</div>
          </div>`
        })
      })
    });
  }

  fetchRepositories();
}

window.onload = main();