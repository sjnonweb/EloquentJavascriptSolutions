function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

var computeGroup = function (person) {
    return Math.ceil(person.died/100);
};

var groupBy = function(personArray, f) {
  var byCentury = {};
  for (var i=0; i<personArray.length; i++) {
  	var century = f(personArray[i]);
    var age = personArray[i].died - personArray[i].born;
    if(byCentury.hasOwnProperty(century))
      byCentury[century].push(age);
    else
      byCentury[century] = [age];
  }
  return byCentury;
};

var ageSortedArray = groupBy(ancestry, computeGroup);
for (var key in ageSortedArray) {
  if(ageSortedArray.hasOwnProperty(key))
    console.log(key+":"+" "+average(ageSortedArray[key]));
}
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94