//Exercise A
function getData1(url) {
  fetch(url)
    .then(response =>response.json)
    .then(json => console.log(json))
    .catch(error => console.log(error));
}

const URL  = "https://randomfox.ca/floof/";
 getData1(URL);

 // EXERCISE A WITH async/await
async function getData() {
  let response = null;
  let json = null;
  try{
    response = await fetch(URL);
    json = await response.json();
  }
  catch {
    console.log("API ERROR!!!");
    return 0;
  }
  return json;
}

async function mainA() {
  const jsonData = await getData();
  return jsonData;
}

mainA().then((data) => console.log(data));


// Exercise B
const arrayOfWords = ['cucumber', 'apple' , 'avocado'];

const makeAllCaps1 = array => {
  return new Promise((resolve, reject) => {
    let capsArray = array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        reject('Error: Not all items in the array are strings!');
      }
    });
    resolve(capsArray);
  });
};

// Execrise B with async/await
 makeAllCaps1(arrayOfWords)
  .then(result => console.log(result))
  .catch(error => console.log(error));

async function makeAllCaps(array) {
  let capsArray = null;
  try {
     capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase()
      } else {
        throw (new Error)
      }
    })
  }
  catch {
    console.log("Not all items in the array are strings!")
     return 0;
  }
  return capsArray;
}

async function mainB(){
  const response =  await makeAllCaps(arrayOfWords);
  return response;
}

mainB().then((res) => console.log(res))

  



