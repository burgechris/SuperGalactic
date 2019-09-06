export class Human {
  constructor(age){
  this.age = age;
 }

 mercYears() {
   return Math.floor(this.age / .24);
 }
}

// export function venYears(earthYear){
//   let venusYears = 0;
//   venusYears = Math.floor(earthYear / .62);
//   return venusYears;
// }
//
// export function marYears(earthYear){
//   let marsYears = 0;
//   marsYears = Math.floor(earthYear / 1.88);
//   return marsYears;
// }
