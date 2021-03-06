import { Human } from './../src/galactic.js';

describe('Human', function() {
  let chris;

  beforeEach(function() {
    chris = new Human(38, 'male');
  });

  it('should validate the users age as greater than 1', function() {
    expect(chris.validAge()).toEqual(true);
  })

  it('should take the users gender and return life expectancy', function() {
    expect(chris.lifeExpectancy()).toEqual(76);
  })

  it('should take the users age and check it if they have surpassed life expectancy', function() {
    expect(chris.surpassedLife()).toEqual(false);
  })

  it('should take a users age and return it in mercury years', function() {
    expect(chris.mercYears()).toEqual(158);
  })

  it('should take a users age and return it in venus years', function() {
    expect(chris.venYears()).toEqual(61);
  })

  it('should take a users age and return it in mars years', function() {
    expect(chris.marsYears()).toEqual(20);
  })

  it('should take a users age and return it in jupiter years', function() {
    expect(chris.jupiterYears()).toEqual(3);
  })

  it('should take a users age, calculate years left based on life expectancy, and return it in mercury years', function() {
    expect(chris.mercYearsLeft()).toEqual(158); //my life is half over!!
  })

  it('should take a users age, calculate years left based on life expectancy, and return it in venus years', function() {
    expect(chris.venYearsLeft()).toEqual(61);
  })

  it('should take a users age, calculate years left based on life expectancy, and return it in mars years', function() {
    expect(chris.marsYearsLeft()).toEqual(20);
  })

  it('should take a users age, calculate years left based on life expectancy, and return it in jupiter years', function() {
    expect(chris.jupYearsLeft()).toEqual(3);
  })
})
