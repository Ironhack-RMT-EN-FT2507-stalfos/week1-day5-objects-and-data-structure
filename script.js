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