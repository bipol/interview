// given a root defined as [root, left, right]
// return bool if same tree
function isSameTree(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    for (var x = 0; x < a.length; x++) {
      if (a[x] != b[x]) {
        return false
      }
    }
    return true;
}

console.log(isSameTree([], []), '=>', true)
console.log(isSameTree([null, 1, 2], [1, 2, 3]), '=>', false)
console.log(isSameTree([null, 1, 2], [null, 2, 3]), '=>', false)
console.log(isSameTree([1, 1, null], [1, null, 3]), '=>', false)
console.log(isSameTree([1, 1, null], [1, null, 1]), '=>', false)
console.log(isSameTree([1, 1, null, 1], [1, 1, null, 1]), '=>', true)


function invert(a) {
    if (a.length == 2) {
      return a;
    }
    for (var x = 1; x < a.length; x+=2) {
      let temp = a[x];
      a[x] = a[x+1]; 
      a[x+1] = temp;
    }
    return a;
}

console.log(invert([]), '=>', [])
console.log(invert([1,2]), '=>', [1,2])
console.log(invert([1,2,3]), '=>', [1,3,2])
console.log(invert([1,2,3,4]), '=>', [1,3,2,null,4])
