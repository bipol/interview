
function insert(intervals, newInterval) {
  let lower = 0;
  let lset = false;
  let upper = 0;
  for (var x = 0; x < intervals.length; x++) {
    if (intervals[x][1] > newInterval[0]) {
       if (!lset) {
         lower = x;
         lset = true;
       }
    }
    if (intervals[x][0] <= newInterval[1] && intervals[x][1] >= newInterval[1]) {
        upper = x;
    }
  }
  // lower 0, upper 0
  let newL = intervals[lower][0] < newInterval[0] ? intervals[lower][0] : newInterval[0];
  let newU = intervals[upper][1] > newInterval[1] ? intervals[upper][1] : newInterval[1];
  let newA = [newL, newU];
  let inserted = []
  for (var x = 0; x < lower; x++) {
    inserted.push(intervals[x]);
  }
  inserted.push(newA)
  for (var x = upper + 1; x < intervals.length; x++) {
    inserted.push(intervals[x]);
  }
  return inserted;
}

function insert2(intervals, newInterval) {
  let inserted = false;
  let sol = []
  for (var x = 0; x < intervals.length; x++) {
    if (inserted) {
      sol.push(intervals[x])
    } else {
       if (newInterval[0] > intervals[x][1]) {
         sol.push(intervals[x]);
         continue;
       }
       if (newInterval[1] < intervals[x][0]) {
           sol.push(newInterval)
           sol.push(intervals[x])
           inserted = true;
           continue;
       }
      let newL = intervals[x][0] < newInterval[0] ? intervals[x][0] : newInterval[0];
      let newU = intervals[x][1] > newInterval[1] ? intervals[x][1] : newInterval[1];
      newInterval = [newL, newU];
    }
  }
  if (!inserted) {
    sol.push(newInterval)
  }
  return sol;
}

var intervals = [[2,3],[6,9]], newInterval = [1,5];
var expected =  [[1,5],[6,9]];
console.log('given:', insert2(intervals, newInterval));
console.log('expected:', expected)
console.log('');

var intervals = [[1,3],[6,9]], newInterval = [1,5];
var expected =  [[1,5],[6,9]];
console.log('given:', insert2(intervals, newInterval));
console.log('expected:', expected)
console.log('');

var intervals = [[1,3],[5,9]], newInterval = [1,5];
var expected =  [[1,9]];
console.log('given:', insert2(intervals, newInterval));
console.log('expected:', expected)
console.log('');

var intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
var expected =  [[1,2],[3,10],[12,16]];
console.log('given:', insert2(intervals, newInterval));
console.log('expected:', expected)
console.log('');
