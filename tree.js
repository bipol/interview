// given a root defined as [root, left, right]
// return bool if same tree
function isSameTree(a, b) {
}

console.log(isSameTree([], []), '=>', true)
console.log(isSameTree([null, 1, 2], [1, 2, 3]), '=>', false)
console.log(isSameTree([null, 1, 2], [null, 2, 3]), '=>', false)
console.log(isSameTree([1, 1, null], [1, null, 3]), '=>', false)
console.log(isSameTree([1, 1, null, 1, 2], [1, null, 1, 2]), '=>', true)
