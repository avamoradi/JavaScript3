const containerDiv = document.querySelector(".container");
const mainDiv = document.querySelector(".main");



async function fetchAPI(){
  let response = null;
  let jsonData = null;
  let resaults = null;

  try{
    response = await fetch(URL);
    jsonData = await response.json();
    //console.log(jsonData)
    resaultsArr = jsonData.results;
    //console.log(resaultsArr)
    resaultsArr.forEach(element => {
      mainDiv.innerHTML += `<div class="questionDivStyle">${element.question}</div>`
    })
    const objestDiv = document.querySelectorAll(".questionDivStyle");
    console.log(objestDiv)
  }

  catch{
    return new Error('HTTP ERROR!!')
  }

}




 
 function showAnswer(arrOfResaults){
   console.log(arrOfResaults)
   alarm('hi')
  //  const answerDiv = document.createElement('div');
  //  answerDiv.innerText = `${arrOfResaults.correct_answer}`;
  //  mainDiv.appendChild(answerDiv);

 }

 // Function main
 async function main(){
  await fetchAPI();
 }

 const URL = "https://opentdb.com/api.php?amount=5"
 window.onload = main().then(() => console.log('done'));