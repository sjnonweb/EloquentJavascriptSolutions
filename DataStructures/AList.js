
// Problem - A List
var arrayToList = function(array)
{
  if(array.length==1)
  {
    var list = {};
    list.value = array[0];
    list.rest = null;
    return list;
  }
  var list = {};
  list.value = array[0];
  list.rest = arrayToList(array.slice(1));
  return list;
};

var listToArray = function(list)
{
  var array=[];
  array.push(list.value);
  var next = list.rest;
  while(next!=null)
  {
    array.push(next.value);
    next=next.rest;
  }
  return array;
};

var prepend = function(value, list)
{
  var newlist = {};
  newlist.value = value;
  newlist.rest = list;
  return newlist;
};

var nth = function(list, n)
{
  if(n==0)
  {
  	if(list==null)
      return undefined
    else
      return list.value;
  }
  list=list.rest;
  n--;
  x = nth(list,n);
  return x;
};

//console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30, 40]), 4));
// → undefined