//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. 
//Please create a function that reverses your list and prints it to the console. 

const myTeam = ['pikachu', 'charmander','venosaur']

function reverseTeam(arr){
    console.log(arr.reverse())
}

// reverseTeam(myTeam)

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element 
//in a is strictly greater than the sum of the cubes of each element in b.'

const arrTwo = ['2','3','4']
const arrOne = ['7','5','6']

function compareArray(a,b){
    return a.reduce((acc,c) => acc + c**2, 0) > b.reduce((acc,c) => acc + c**3, 0) 
}

console.log(compareArray(arrOne,arrTwo))
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

const isMult = [22, -6, 32, 82, 9, 25]
const multTrue = []
function isMultiple(arr){
    return arr.filter((element,index) => element%index === 0)
}

console.log(isMultiple(isMult))

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

const stringArr = ['2',5,'3',40]

function reduceStringArr(arr){
    console.log(arr.reduce((acc,c) => acc + Number(c),0
    ))
}

reduceStringArr(stringArr)