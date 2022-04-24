let fruits = ["apple", "banana", "mango","mama"]

function addFruits(fruit) {
    setTimeout(function () {
        fruits.push(fruit);
        console.log(`add ${fruit} Success`)
    }, 500)
}

function getFruits() {
    setTimeout(function () {
        console.log(fruits)
    }, 200)
}

addFruits("pineapple")
getFruits()
      
    
  
  