export function generateTicket() {
  var cols,
    finalTicket,
    flag = true,
    colPlaceholder = [];
  while (flag) {
    cols = Array(9).fill(2);
    finalTicket = Array(3);
    finalTicket[0] = Array(9).fill(0);
    finalTicket[1] = Array(9).fill(0);
    finalTicket[2] = Array(9).fill(0);
    var r = getUniqueRandomNumber(0, 9, 3);
    for (let i = 0; i < r.length; i++) {
      cols[r[i]] = 1;
    }
    colPlaceholder = [];
    for (let i = 0; i < cols.length; i++) {
      colPlaceholder.push(getUniqueRandomNumber(0, 2, cols[i]));
    }
    for (let i = 0; i < colPlaceholder.length; i++) {
      let nums = getUniqueRandomNumber(
        i * 10,
        i * 10 + 9,
        colPlaceholder[i].length
      );
      if (i == colPlaceholder.length)
        nums = getUniqueRandomNumber(80, 90, colPlaceholder[i].length);
      if (i == 0) nums = getUniqueRandomNumber(1, 9, colPlaceholder[i].length);
      for (let j = 0; j < colPlaceholder[i].length; j++) {
        finalTicket[colPlaceholder[i][j]][i] = nums[j];
      }
    }
    flag = testFinalTicket(finalTicket);
  }
  return finalTicket;
}
// Array.prototype.count = function(obj){
//     var count = this.length;
//     if(typeof(obj) !== "undefined"){
//       var array = this.slice(0), count = 0;
//       for(i = 0; i < array.length; i++){
//         if(array[i] == obj){ count++ }
//       }
//     }
//     return count;
//   }
function testFinalTicket(ticket: any) {
  for (let i = 0; i < 3; i++) {
    var arr = ticket[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) count++;
    }
    if (count != 4) return true;
  }
  return false;
}
function getUniqueRandomNumber(
  min: number,
  max: number,
  count: number,
  sort = true
) {
  var random = [];
  for (var i = 0; i < count; i++) {
    let flag = true;
    while (flag) {
      let r = randomNumber(min, max);
      if (random.indexOf(r) === -1) {
        random.push(r);
        flag = false;
      }
    }
  }
  if (sort) random.sort();
  return random;
}
function randomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
