import { mercYears } from '../src/galactic.js';

describe('mercury years', function() {
  it('should take a users age and return it in mercury years', function() {
    let earthYear = 20;
    expect(mercYears(earthYear)).toEqual(83);
  })
})
