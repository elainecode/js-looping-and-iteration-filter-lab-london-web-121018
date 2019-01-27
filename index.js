// Code your solution in this file

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

function findMatching(drivers, name) {
let arr = [];
  for( let i = 0; i < drivers.length; i++) {
    if (drivers[i].toUpperCase() == name.toUpperCase()) {
      arr.push(drivers[i]);
    }
    }
  
 return arr;
}

function fuzzyMatch(drivers, chars) {
 let len = chars.split('').length;
 let arr = [];
 for( let i = 0; i < drivers.length; i++) {
  if (drivers[i].slice(0, len) == chars) {
      arr.push(drivers[i]);
  }
 }
 return arr;
}

function matchName(drivers, name) {
 let arr = [];
  for (let driver of drivers) {
  for (let key in driver) {
    if(driver[key] == name) {
      arr.push(driver);
    }
  }    
  }
  return arr;
 }

