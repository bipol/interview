/**
* 
*/
function insert(intervals, newInterval) {
}

var intervals = [[2,3],[6,9]], newInterval = [1,5];
var expected =  [[1,5],[6,9]];
logSols(insert(intervals, newInterval), expected);

var intervals = [[1,3],[6,9]], newInterval = [1,5];
var expected =  [[1,5],[6,9]];
logSols(insert(intervals, newInterval), expected);

var intervals = [[1,3],[5,9]], newInterval = [1,5];
var expected =  [[1,9]];
logSols(insert(intervals, newInterval), expected);

var intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
var expected =  [[1,2],[3,10],[12,16]];
logSols(insert(intervals, newInterval), expected);

function logSols(given, expected) {
  console.log('given:', given);
  console.log('expected:', expected);
  console.log('');
}
