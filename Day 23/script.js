// Remove duplicate values from an arr?
// var arr = [ 1,2,3,3,4,6,4,2,2,14,6,7,8,];
// var ans = [...new Set(arr)];

// console.log(ans);


var arr = [1,2,4,6,3,7,,8,9];
var ans = arr.sort(function(a, b){
    return b - a;
});
console.log(ans[0]);
