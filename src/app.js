const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(first, last){
  let modifiedFood = [];
  for(let food=first; food<last-1;food++){
    modifiedFood.push(foods[food]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced(){
  foods.splice(2,0,"noodles","icecream");
  return foods;
}

// Progression 3:
function isEven(number){
  return number%2==0?true:false;
}
function isPrime(number){
  if(number==1){
    return false;
  } else if(number===2){
    return true;
  } else{
    for(let i=2; i<number; i++){
      if(number%i===0){
        return false;
      }
    }
    return true;
  }
}

function checkNumber(numberArray,operation){
  newArray = numberArray.filter(operation);
  return newArray;
}


// Progression 4:
function reject(numberArray){
  newNumArray = [];
  numberArray.forEach(number=>{
    if (isPrime(number)){
      return 0
    } else {
      newNumArray.push(number);
    }
  })
  return newNumArray;
}

function nonPrime(numberArray){
  ans =reject(numberArray);
  return ans;
}

// Progression 5:
let isEvenUsingLambda =number=>number%2==0;

// Progression 6:
function sNum(number){
  return number*number;
}
function findSquareOfNumbers(myArray){
  let squareNum = myArray.map(sNum);
  return squareNum;
}

// Progression 7:
function multiply(myArray){
  return myArray.reduce((mult,number)=>{
    return mult*number;
  },1);
}
function sumOfSquares(myArray){
  return myArray.map(sNum).reduce((sum,number)=>{
    return sum+number;
  },0);
}