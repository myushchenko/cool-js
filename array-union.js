// Returns a new array containing elements of arr1
// and elements of arr2 that don't exist in arr1
// For example: union([1,2,3], [3,4]) == [1,2,3,4]
function union(arr1, arr2) {
  var a = arr1 || [];
  var b = arr2 || [];
  return [].concat(a, b.filter(function(n) {
    return this.indexOf(n) === -1;
  }, a));
}
// Similar to union, but can be called with any
// number of arguments, where each argument is
// an array.
function unionAll() {
  return Array.prototype.reduce.call(arguments, union, []);
}