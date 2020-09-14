const getAnonName = (firstName) => {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
      if (!firstName) 
        reject(new Error("You didn't pass in a first name!"));
      
        const fullName = `${firstName} Doe`;
        resolve(fullName)
      
      },2000);
    })
    return promise;
}


getAnonName('John')
.then(response => console.log(response))
.catch(error => console.log(error));