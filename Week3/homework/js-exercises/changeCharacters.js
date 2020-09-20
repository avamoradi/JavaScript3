class Person {
  constructor(name, age, gender, city, spouse, children, job, favoriteFood, favoriteActivity){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city,
    this.spouse = spouse;
    this.children = children;
    this.job = job;
    this.favoriteFood = favoriteFood;
    this.favoriteActivity = favoriteActivity;
 }
 family(){
   return `${this.name} has ${this.spouse} and ${this.children} children`
 }

 favorites(){
   return `${this.name} likes to ${this.favoriteFood} and ${this.favoriteActivity}`
 }

 ownedAnimal (){
   return "Adel"
 }
 endOfStory(){
   return `${this.name} and ${this.ownedAnimal()} lived happily ever after`
 }
}

class Animal {
  constructor(kind, name, age, color, freetime, responsibility )
  {
    this.kind = kind;
    this.name = name;
    this.age = age;
    this.color = color;
    this.freetime = freetime;
    this.responsibility= responsibility;
  }

  characteristic(){
    return `the ${this.kind} is ${this.age} and has the ${this.color}`
  }

  activity(){
    return `the ${this.kind} ${this.freetime} or ${this.responsibility} for ${this.owner()}`
  }

  owner(){
    return "Abdulkareem"
  }

  endOfStory(){
    return `${this.name} and ${this.owner()} lived happily ever after`
  }
}

const Abdulkareem = new Person ("Abdulkareem", 35, "man", "Rihadh", "wife", 3, "house construction worker", "eat date", "smoke water pipe");

const Adel = new Animal("horse", "Adel", 15, "color brown", "eat grass", "trasnport material" )

console.log(Abdulkareem.family());
console.log(Abdulkareem.favorites());
console.log(Adel.characteristic());
console.log(Adel.activity());
console.log(Abdulkareem.endOfStory());
console.log(Adel.endOfStory());
