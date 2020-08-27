const ul = document.querySelector("#dogImg");

//XMLHttpRequest
function functionFirstXML(){
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  xhr.onload = function(){
    if (xhr.status < 400) {
      const response = xhr.response;
      const li = document.createElement('li');
      ul.appendChild(li);
      const image = document.createElement('img');
      image.style.width = "200px";
      li.appendChild(image);
      image.src = response.message;
    } else {
      console.log(`HTTP Error ${xhr.status}`)
    }
  }
  xhr.onerror = function(){
    console.log(`There is an error`);
  }
  url = "https://dog.ceo/api/breeds/image/random";
  xhr.open("GET", url);
  xhr.send();
}

//axios Request
function functionSecondAXI(){
  const url = "https://dog.ceo/api/breeds/image/random";
  
  axios.get(url)
  .then(function (response) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const image = document.createElement('img');
    image.style.width = "200px";
    li.appendChild(image);
    image.src = response.data.message;
  })

  .catch(function (error) {
    console.log(error);
  })
}

// click on buttins
window.onload = function () {
  document.querySelector('#XRequest').onclick = function(){
    functionFirstXML();
  }
  document.querySelector('#axiRequest').onclick = function(){
    functionSecondAXI();
  }
}