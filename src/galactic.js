export function Human {
  constructor(age, gender){
  this.age = age;
  this.gender = gender;
 }

 lifeExpectancy() {
   if(this.gender === 'male'){
     return 76;
   } else if(this.gender === 'female'){
     return 81;
   }
 }

 mercYears() {
   return Math.floor(this.age / .24);
 }

 venYears() {
   return Math.floor(this.age / .62);
 }
}


// export function marYears(earthYear){
//   let marsYears = 0;
//   marsYears = Math.floor(earthYear / 1.88);
//   return marsYears;
// }
