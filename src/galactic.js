const chris = new Human(38, 'male');

export class Human {
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

 marsYears() {
   return Math.floor(this.age / 1.88);
 }

 jupiterYears() {
   return Math.floor(this.age / 11.86);
 }

 mercLifeExp() {
   return Math.floor((this.lifeExpectancy() - this.age) / .24);
 }

 venLifeExp() {
   return Math.floor((this.lifeExpectancy() - this.age) / .62);
 }

 marsLifeExp() {
   return Math.floor((this.lifeExpectancy() - this.age) / 1.88);
 }

 jupLifeExp() {
   return Math.floor((this.lifeExpectancy() - this.age) / 11.86);
 }
}

chris.lifeExpectancy();
