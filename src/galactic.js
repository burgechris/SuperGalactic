export function mercYears(earthYear){
  let mercuryYears = 0;
  mercuryYears = Math.floor(earthYear / .24);
  return mercuryYears;
}

export function venYears(earthYear){
  let venusYears = 0;
  venusYears = Math.floor(earthYear / .62);
  return venusYears;
}

export function marYears(earthYear){
  let marsYears = 0;
  marsYears = Math.floor(earthYear / 1.88);
  return marsYears;
}
