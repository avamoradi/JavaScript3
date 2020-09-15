"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/
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
firstLeftDiv.className = "flex";
mLeftDiv.appendChild(secondLeftDiv);

const labelDescription = document.createElement('label');
labelDescription.innerText = "Description:";
secondLeftDiv.appendChild(labelDescription);

const thirdLeftDiv = document.createElement('div')
firstLeftDiv.className = "flex";
mLeftDiv.appendChild(thirdLeftDiv);

const labelForks = document.createElement('label');
labelForks.innerText = "Forks:";
thirdLeftDiv.appendChild(labelForks);

const forthLeftDiv = document.createElement('div')
firstLeftDiv.className = "flex";
mLeftDiv.appendChild(forthLeftDiv);

const labelUpdated = document.createElement('label');
labelUpdated.innerText = "Updated:";
forthLeftDiv.appendChild(labelUpdated);
/*

        <div class="m-left">
         <div class="flex">
           <label>Repository:</label>
           <a href="" class="repository">SampleRepo1</a>
         </div>
         <div class="flex">
           <label>Description:</label>
           <p class="description">This repository is meant to be a sample</p>
         </div>
         <div class="flex">
           <label>Forks:</label>
           <p class="fork">5</p>
         </div>
         <div class="flex">
           <label>Updated:</label>
           <p class="updated">2020-05-27 12:00:00</p>
         </div>
       </div> <!--end of main left--> */

//Main Right Div
const mrightDiv = document.createElement('div');
mrightDiv.className = "m-right";
mainDiv.appendChild(mrightDiv);

//Div Right  row 1 
const rightfistRowDiv = document.createElement('div');
rightfistRowDiv.className = "mr-firstrow";
rightfistRowDiv.innerText = "Contributors";
mrightDiv.appendChild(rightfistRowDiv);

//Div Contributor
const contributorsDiv = document.createElement('div');
contributorsDiv.classList.add("mr-row", "flex");
mrightDiv.appendChild(contributorsDiv);

const personImage = document.createElement('img');
personImage.src = "";
personImage.alt = "Person Photo";
personImage.className = "person-img"
contributorsDiv.appendChild(personImage);

const NameLink = document.createElement('a');
const link = document.createTextNode("xxx"); 
NameLink.appendChild(link);
contributorsDiv.appendChild(NameLink);

const forkNoDiv = document.createElement('div');
forkNoDiv.className = "frok-no";
contributorsDiv.appendChild(forkNoDiv);

const footer = document.createElement('footer');
footer.innerText = "HYF Repositories";
document.body.appendChild(footer);


const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

const repository = document.querySelector('.repository');
const description = document.querySelector('.description');
const fork = document.querySelector('.fork');
const updated = document.querySelector('.updated');
const selectOption = document.querySelector('#hyf-rep');

function filledForm(value){
  if (value === "SampleRepo1"){
    repository.innerHTML = placeholderRepos[0].name;
    description.innerHTML = placeholderRepos[0].description;
    fork.innerHTML = placeholderRepos[0].forks;
    updated.innerHTML = placeholderRepos[0].updated;
  }

  if (value === "AndAnotherOne"){
    repository.innerHTML = placeholderRepos[1].name;
    description.innerHTML = placeholderRepos[1].description;
    fork.innerHTML = placeholderRepos[1].forks;
    updated.innerHTML = placeholderRepos[1].updated;
  }

  if (value === "HYF-Is-The-Best"){
    repository.innerHTML = placeholderRepos[2].name;
    description.innerHTML = placeholderRepos[2].description;
    fork.innerHTML = placeholderRepos[2].forks;
    updated.innerHTML = placeholderRepos[2].updated;
  }
}

selectOption.addEventListener('change', (event) => {
  filledForm(event.target.value)
});