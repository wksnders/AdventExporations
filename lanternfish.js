
var testInput = "3,4,3,1,2"
var myInput = "1,5,5,1,5,1,5,3,1,3,2,4,3,4,1,1,3,5,4,4,2,1,2,1,2,1,2,1,5,2,1,5,1,2,2,1,5,5,5,1,1,1,5,1,3,4,5,1,2,2,5,5,3,4,5,4,4,1,4,5,3,4,4,5,2,4,2,2,1,3,4,3,2,3,4,1,4,4,4,5,1,3,4,2,5,4,5,3,1,4,1,1,1,2,4,2,1,5,1,4,5,3,3,4,1,1,4,3,4,1,1,1,5,4,3,5,2,4,1,1,2,3,2,4,4,3,3,5,3,1,4,5,5,4,3,3,5,1,5,3,5,2,5,1,5,5,2,3,3,1,1,2,2,4,3,1,5,1,1,3,1,4,1,2,3,5,5,1,2,3,4,3,4,1,1,5,5,3,3,4,5,1,1,4,1,4,1,3,5,5,1,4,3,1,3,5,5,5,5,5,2,2,1,2,4,1,5,3,3,5,4,5,4,1,5,1,5,1,2,5,4,5,5,3,2,2,2,5,4,4,3,3,1,4,1,2,3,1,5,4,5,3,4,1,1,2,2,1,2,5,1,1,1,5,4,5,2,1,4,4,1,1,3,3,1,3,2,1,5,2,3,4,5,3,5,4,3,1,3,5,5,5,5,2,1,1,4,2,5,1,5,1,3,4,3,5,5,1,4,3"

var day18FishCount = 26
var day80FishCount = 5934

var fishList = myInput.split(',').map(Number);

console.log("fishList is ", fishList);

var lanternfishSpawnDay = (counts)=>
{
    var nextCounts = counts.slice();
    var lanternfishSpawnCount = nextCounts.shift();
    nextCounts.push(lanternfishSpawnCount);
    nextCounts[6] += lanternfishSpawnCount;
    return nextCounts;
};

var startTime = performance.now();
for(let i = 0; i < 1000000; i++) {
    var lanternfishCounts = [0,0,0,0,0,0,0,0,0]
    fishList.forEach((index) => {
        lanternfishCounts[index] += 1;
    });
    for(let days = 0; days < 256; days++) {
        //console.log("num fishes on day " + days + " is " + lanternfishCounts.reduce((acc,current)=>(acc+current),0));

        lanternfishCounts = lanternfishSpawnDay(lanternfishCounts);
    }
}
var endTime = performance.now();
console.log("final num fishes is " + lanternfishCounts.reduce((acc,current)=>(acc+current),0));
console.log("compute time is : ",(endTime - startTime));


// [0,1,1,2,1,0,0,0,0]
// 2,3,2,0,1
// [1,1,2,1,0,0,0,0,0]
//  1,2,1,6,0,8
// [1,2,1,0,0,0,1,0,1]
//  0,1,0,5,6,7,8
// [2,1,0,0,0,1,1,1,1]

//first thoughts

//fish have values between 1 and 8
//im thinking of this as basically a list of numbers, 