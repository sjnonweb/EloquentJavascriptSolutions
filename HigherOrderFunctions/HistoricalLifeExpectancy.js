function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

var computeGroup = function (person) {
    return Math.ceil(person.died/100);
};

var groupBy = function(personArray, computeGroup) {
    
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94