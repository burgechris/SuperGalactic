import { Human } from '../src/galactic.js';

describe('Human', function() {
  let humanAge;

  beforeEach(function() {
    humanAge = new Human(38,78);
  });

  it('should take a users age and return it in mercury years', function() {
    expect(age.mercYears()).toEqual(158);
  })
})

// describe('venus years', function() {
//   it('should take a users age and return it in venus years', function() {
//     let earthYear = 20;
//     expect(venYears(earthYear)).toEqual(32);
//   })
// })
//
// describe('mars years', function() {
//   it('should take a users age and return it in venus years', function() {
//     let earthYear = 20;
//     expect(marYears(earthYear)).toEqual(10);
//   })
// })
