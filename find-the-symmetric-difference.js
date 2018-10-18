// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// https://learn.freecodecamp.org/coding-interview-prep/algorithms/find-the-symmetric-difference/

const countInstances = (arr) => {
  let counts = {};
  for (const elem of arr) {
    counts[elem] = (counts[elem] || 0) + 1; 
  }
  return counts;
}

const sym = (...args) => {
  let symDiff = []
  for (const arr of args) {
    symDiff = symDiff.concat([...new Set(arr)]);
    const counts = countInstances(symDiff);
    symDiff = symDiff.filter((item) => {
      return counts[item] === 1;
    })
  }
  
  return symDiff;
}

sym([1, 2, 3], [5, 2, 1, 4]);
