"use strict";

/*
  Write here your JavaScript for HackYourRepo!
*/

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