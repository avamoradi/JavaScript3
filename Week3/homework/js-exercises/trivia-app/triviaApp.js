const containerDiv = document.querySelector(".container");
const mainDiv = document.querySelector(".main");

// function fetchAPI
async function fetchAPI(){
  let response = null;
  let jsonData = null;
  let resaults = null;
  try{
    response = await fetch(URL);
    jsonData = await response.json();
    resaultsArr = jsonData.results;
  }
  catch{
    return new Error('HTTP ERROR!!')
  }
 return resaultsArr;
}

//function makeDiv
 async function makeDiv(){
   console.log(resaultsArr)
  resaultsArr.forEach(element => {
   mainDiv.innerHTML += `<div class="questionDivStyle">${element.question}</div>`
  })
  const objectDiv = document.querySelectorAll(".questionDivStyle");
  objectDiv.forEach((element, index) => {
    let checkFlag = false;
    element.addEventListener("click", () =>{
      if (checkFlag === false){
      correctAnswerDiv = document.createElement('div');
      correctAnswerDiv.innerText = resaultsArr[index].correct_answer;
      correctAnswerDiv.className = "correctAnswer";
      mainDiv.insertBefore(correctAnswerDiv, element.nextSibling);
      checkFlag = true;
      }
    })
  })
}

// Function main
 async function main(){
  await fetchAPI();
 }

 const URL = "https://opentdb.com/api.php?amount=5"
 window.onload = main()
 .then(async (resaultsArr) =>  await makeDiv(resaultsArr))
 .catch( (error) => console.log(error))