import { Human } from './../src/galactic.js';

describe('Human', function() {
  let chris;

  beforeEach(function() {
    chris = new Human(38, 'male');
  });

  it('should take the users gender and return life expectancy', function() {
    expect(chris.lifeExpectancy()).toEqual(76);
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
    expect(chris.mercLifeExp().toEqual(158)); //my life is half over!!
  })
})
