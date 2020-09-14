function checkDoubleDigits(number){
  const promise = new Promise((resolve, reject) => {
    if (number > 10 )
    resolve('The number is bigger than 10!');
    reject('Error! The number is equal or smaller than 10...')
  })
  return promise;
}

const randomNumber = Math.round(Math.random()*20);
console.log(randomNumber);
checkDoubleDigits(randomNumber)
.then(response => console.log(response))
.catch(error => console.log(error))