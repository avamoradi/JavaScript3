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

//Pgination
const pageNoDiv = document.createElement('div');
pageNoDiv.className = "pagenumbers";
pageNoDiv.id = "pagination";
document.body.appendChild(pageNoDiv);


//Footer
const footer = document.createElement('footer');
footer.innerText = "HYF Repositories";
document.body.appendChild(footer);

//main function
function main(){
  fetchRepositories();
  repositoriesSelect.addEventListener('change', filledForm);
  pagination;
}

window.onload = main();