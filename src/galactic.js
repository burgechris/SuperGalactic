export function mercYears(earthYear){
  let mercuryYears = 0;
  mercuryYears = Math.floor(earthYear / .24);
  return mercuryYears;
}
