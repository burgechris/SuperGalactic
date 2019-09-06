import { mercYears, venYears, marYears } from '../src/galactic.js';

describe('mercury years', function() {
  it('should take a users age and return it in mercury years', function() {
    let earthYear = 20;
    expect(mercYears(earthYear)).toEqual(83);
  })
})

describe('venus years', function() {
  it('should take a users age and return it in venus years', function() {
    let earthYear = 20;
    expect(venYears(earthYear)).toEqual(32);
  })
})

describe('mars years', function() {
  it('should take a users age and return it in venus years', function() {
    let earthYear = 20;
    expect(marYears(earthYear)).toEqual(10);
  })
})
