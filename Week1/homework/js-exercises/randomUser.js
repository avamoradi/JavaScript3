
function firstFunctionXMLH(){

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onload = function(){
    if (xhr.status < 400 ){
      const apiResponse = xhr.response;
     console.log(apiResponse);
    } else {
      console.log(`HTTP Error, ${xhr.status}`);
    }
   }

  const url = "https://www.randomuser.me/api";
  xhr.open("GET", url);
  xhr.send();

  xhr.onerror = function(){
    console.log(` Error Happend`);
  }
}

function secondFunctionAXI(){
  const url = "https://www.randomuser.me/api";
  axios.get(url)

  .then(function(response){
    console.log(response)
  })

  .catch(function(error){
    console.log(error)
  })

}

firstFunctionXMLH();
secondFunctionAXI();