//XMLHttpRequest
function firstFunctionXML(){
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onload = function() {
    if ( xhr.status < 400 ) {
     const response = xhr.response;
     document.querySelector("#personImg").src = response.img
     console.log(response);
    } else {
      console.log(`HTTP Error, ${xhr.status}`);
    }
  }
  const url = "https://xkcd.now.sh/?comic=latest";
  xhr.open("GET", url);
  xhr.send();

  xhr.onerror = function(){
    console.log('error happend');
  }
}

 // axios request
 function secondFunctionAXI(){
   const url = "https://xkcd.now.sh/?comic=latest";
   axios.get(url)

   .then(function(response){
     console.log(response);
     document.querySelector("#personImg2").src = response.data.img;
   })

   .catch(function(error){
     console.log(error);
   })
 }

firstFunctionXML();
secondFunctionAXI();