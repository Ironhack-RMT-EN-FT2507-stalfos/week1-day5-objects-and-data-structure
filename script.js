console.log("testing")


/*
Syntax

{
  key: value,
  key: value,
  key: value
}

*/

const virtualPet = {
  name: "Pugsy",
  version: 1.0,
  isHappy: true,
  favFoods: [ "fish", "carrot", "apple" ],
  productInfo: {
    country: "china",
    serialNo: "2345GGFDG55GHDD"
  },
  "3FavWords": ["KAWAI!", "uwu", "oooh"],
  "max volume": 100
}


console.log(virtualPet)

// Dot notation
console.log( virtualPet.name )

// Bracket notation (situational)
console.log( virtualPet["name"] )

console.log( virtualPet.productInfo.country )

console.log( virtualPet["productInfo"]["country"])
console.log( virtualPet["productInfo"].country)

console.log( virtualPet.favFoods[ virtualPet.favFoods.length - 1 ] )

// console.log( virtualPet.3FavWords ) // nope
// console.log( virtualPet."3FavWords" ) // nope
console.log( virtualPet["3FavWords"] )


let propertyName = "name"

console.log( virtualPet[propertyName] ) // yes
console.log( virtualPet.propertyName ) // nope

//* modify the properties of the object

virtualPet.isHappy = false
console.log(virtualPet)

// virtualPet.version = virtualPet.version + 1
// virtualPet.version += 1
virtualPet.version++
console.log(virtualPet)


//* to add property
console.log( virtualPet.candy )

virtualPet.candy = 10
console.log(virtualPet)

//* delete is a keyword that ONLY works for deleting properties in an object
delete virtualPet["max volume"]
console.log(virtualPet)


//* for in

for ( let key in virtualPet ) {
  console.log(key)
  console.log(virtualPet[key])
  // console.log(virtualPet.key) // nope
}

console.log( "productInfo" in virtualPet ) // true
console.log( "volume" in virtualPet ) // false

console.log( Object.keys(virtualPet) )


const newVirtualPet = {
  name: "Pugsy",
  version: 1.0,
  isHappy: true,
  favFoods: [ "fish", "carrot", "apple", "banana" ],

  greet() {
    // console.log(this) // when we use the keyword this in a method, it points to the object that is calling the method
    console.log(`Hello!, my name is ${this.name}`)
  },

  changeMood() {
    if (this.isHappy === true ) {
      this.isHappy = false
      console.log(`Your virtual pet ${this.name} is now mad at you!`)
    } else {
      this.isHappy = true
      console.log(`Your virtual pet ${this.name} is now happy and loves you!`)
    }
  },

  eatRandomFood() {
    // it will get a random element from the array and print: "pet is eating ____"

    // Math.random() // 0 - 0.99999
    let randomNum = Math.random()
    let randomNum0to2 = randomNum * this.favFoods.length
    let randomIndex = Math.floor(randomNum0to2)
    let randomFood = this.favFoods[randomIndex]
   
    console.log(`Your pet ${this.name} is eating some ${randomFood}`)

  }

}


newVirtualPet.greet()

newVirtualPet.name = "pikachu"

newVirtualPet.greet()

newVirtualPet.changeMood()
newVirtualPet.changeMood()

newVirtualPet.eatRandomFood()


//* Data Structure
const users = [
  {
    username: "samuel",
    salary: 20000,
    occupation: "junior",
  },
  {
    username: "John",
    salary: 22000,
    occupation: "junior II",
  },
  {
    username: "Sara",
    salary: 36000,
    occupation: "senior",
  },
  {
    username: "Luis",
    salary: 42000,
    occupation: "PM",
  },
];

// print the second object
console.log(users[1].occupation)

// change the name of the last user from Luis to Bob
users[users.length - 1].username = "bob"

// want to increase the salary of the first user by 1000
users[0].salary += 1000
console.log(users)

// new user "ruth", "GM", "52000"

const newUser = {
  username: "Ruth",
  salary: 52000,
  occupation: "GM",
}

users.push(newUser)

// we want to increase the salaries of everyone by 10%
for (let i = 0; i < users.length; i++) {
  let user = users[i]
  console.log(user)
  // user.salary = user.salary * 1.1
  user.salary *= 1.1
}

console.log(users)