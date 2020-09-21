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

//function makeDiv  make div for each question
 async function makeQuestionDiv(){
  resaultsArr.forEach(element => {
    console.log(element.correct_answer)
    // decode the string
   if (!String.prototype.HTMLDecode) {
    String.prototype.HTMLDecode = function () {
      var str = this.toString(),
      decoderEl = document.createElement('p');
      if (str.length == 0) {
       return str;
      }
      str = str.replace(/((\r\n)|(\r)|(\n))/gi, " <br/>");            
      decoderEl.innerHTML = str;
      str = decoderEl.innerText || decoderEl.textContent;
      decoderEl = null;
      return str.replace(/<br((\/)|( \/))?>/gi, "\r\n");
    };
  }
     // add questions to Div
  let decodedString = element.question.HTMLDecode();
  mainDiv.innerHTML += `<div class="questionDivStyle">${decodedString}</div>`
  const objectDiv = document.querySelectorAll(".questionDivStyle");
  objectDiv.forEach((element, index) => {
   let checkFlag = false;
   // show answer after click
   element.addEventListener("click", () =>{
    if (checkFlag === false){
      correctAnswerDiv = document.createElement('div');
      correctAnswerDiv.innerText = resaultsArr[index].correct_answer.HTMLDecode();
      correctAnswerDiv.className = "correctAnswer";
      mainDiv.insertBefore(correctAnswerDiv, element.nextSibling);
      checkFlag = true;
    }
   })
  })
 })
}

// Function main
 async function main(){
  await fetchAPI();
 }

 const URL = "https://opentdb.com/api.php?amount=5"
 window.onload = main()
 .then(async (resaultsArr) =>  await makeQuestionDiv(resaultsArr))
 .catch( (error) => console.log(error))