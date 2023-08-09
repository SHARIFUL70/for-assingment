function cubeNumber(number) {
    if(number !== number){
        return 'It is not a number'
    }
    const numberCube = number ** 3;
    return numberCube;
}
const add = cubeNumber(4);
console.log(add);

//3number problem

function sortMaker(arr) {
  let lerge = arr [0];
  for(let i = 0; i < arr.length; i++){
          const element = arr[i];
         if(element > arr){
            lerge.push(element);
         }

  }
  return lerge;
       
   }
   
   

const array = [2, 3];

const add = sortMaker(array);
console.log(add);



  
function sortMaker(arr) {
 
  let lergest = arr [0];
  let small = arr [0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > lergest){
      lergest = arr[i];
    }
    else if(arr[i] < small){
      small = arr[i];
    }
  }
  return [lergest,small];
}
// const array = [4, -4];
// const add = sortMaker(array);
// console.log(add);

function sortMaker(arr) {
  
  let lergest = arr [0];
  let small = arr [0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > lergest){
      lergest = arr[i];
    }
    else if(arr[i] < small){
      small = arr[i];
    }
   }
  return [lergest,small];
}
const array = [1, 3,];
const add = sortMaker(array);
console.log(add);
   
function findAddress(obj) {
       
  let street = obj.street;
  let house = obj.house;
  let society = obj.society;
  const fulladrres = street+ ',' +  house +','+ society;
  
  return fulladrres;

}
let addres ={street: 10, house: '15A',society: 'Earth Perfect'}
let add =findAddress(addres);
console.log(add);

// 5 number problem
function canPay(changeArray, totalDue) {
      if(changeArray.length ===0){
        return 'it is empty array';
      }
         let sum = 0;
         
       for(let item of changeArray){
            sum += item;
        }

        if(sum >= totalDue){
          return true;
        }
        else if(sum < totalDue){
          return false;
        }
     
}
const array =[1, 5, 5,5];
const number = 10;
const add = canPay(array, number);
console.log(add);

// 2 number problem

function matchFinder(string1, string2) {
if(typeof string1 !== 'string' || typeof string2 !== 'string'){
          return 'It is not a string';
        }

       return string1.includes(string2);

}
let fSting = 'jhon Deo';
let sSting = 'o';
let pushF = matchFinder(fSting, sSting);
console.log(pushF);