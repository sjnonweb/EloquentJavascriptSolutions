//the case of an objects property's value being null is handled automatically here.
//since we will be looking at its properties, if only one property is null
//it will return false anyways, and if both the properties are null they will
//evaluate to true, which is desired. 
var deepEqual = function(obj1, obj2)
{
  if(obj1 === obj2)
    return true;
  else if(typeof obj1 == "object" && typeof obj2 == "object")
  {
    for(var i in obj1)
    {
      if(obj1.hasOwnProperty(i) && obj2.hasOwnProperty(i)) //object inherits properties from base prototype object, so we need to check if the properties are its own.
        return deepEqual(obj1[i], obj2[i]);
      return false;
    }
  }
  return false;
  
};
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual({x:{y:10}},{y:null}));
// → true