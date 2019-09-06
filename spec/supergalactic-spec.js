import { Human } from './../src/galactic.js';

describe('Human', function() {
  let humanAge;

  beforeEach(function() {
    humanAge = new Human(38, 'male');
  });

  it('should take the users gender and return life expectancy', function() {
    expect(gender.lifeExpectancy()).toEqual(76);
  })

  it('should take a users age and return it in mercury years', function() {
    expect(humanAge.mercYears()).toEqual(158);
  })

  it('should take a users age and return it in venus years', function() {
    expect(humanAge.venYears()).toEqual(61);
  })

  it('should take a users age and return it in venus years', function() {
    expect(humanAge.marsYears()).toEqual(20);
  })
})
