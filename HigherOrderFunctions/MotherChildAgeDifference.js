function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var ageDiff = function(person) {
  if (byName[person.mother]==undefined)
    return undefined;
  else
    return person.born-byName[person.mother].born;
};

var ageArray=[];
for (var person in byName) {
  if(byName.hasOwnProperty(person)) {
    var diff=ageDiff(byName[person]);
    if(diff!=undefined)
      ageArray.push(diff);
  }
}
console.log(average(ageArray));
// → 31.2