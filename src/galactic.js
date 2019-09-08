const mercury = .24;
const venus = .62;
const mars = 1.88;
const jupiter = 11.86;

export class Human {
  constructor(age, gender){
  this.age = age;
  this.gender = gender;
 }

 validAge() {
   if(this.age >= 1) {
     return true;
   } else {
     alert('Please enter an age greater than 1')
   }
 }

 lifeExpectancy() {
   if(this.gender === 'male'){
     return 76;
   } else if(this.gender === 'female'){
     return 81;
   }
 }

 surpassedLife() {
   if(this.age > this.lifeExpectancy()) {
     alert('You are on borrowed time, friend.')
   } else {
     return false;
   }
 }

 mercYears() {
   return Math.floor(this.age / mercury);
 }

 venYears() {
   return Math.floor(this.age / venus);
 }

 marsYears() {
   return Math.floor(this.age / mars);
 }

 jupiterYears() {
   return Math.floor(this.age / jupiter);
 }

 mercYearsLeft() {
   return Math.floor((this.lifeExpectancy() - this.age) / mercury);
 }

 venYearsLeft() {
   return Math.floor((this.lifeExpectancy() - this.age) / venus);
 }

 marsYearsLeft() {
   return Math.floor((this.lifeExpectancy() - this.age) / mars);
 }

 jupYearsLeft() {
   return Math.floor((this.lifeExpectancy() - this.age) / jupiter);
 }
}
