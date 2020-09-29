// To sort
export function compare(a, b, order) {
  // Use toUpperCase() to ignore character casing
  const techA = a.tech.toUpperCase();
  const techB = b.tech.toUpperCase();

  let comparison = 0;
  if (techA > techB) {
    comparison = 1;
  } else if (techA < techB) {
    comparison = -1;
  }

  if (order) return comparison;
  //invert return value by multiplying by -1
  else return comparison * -1;
}
