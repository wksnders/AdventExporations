
var testInput = "3,4,3,1,2"
var myInput = "1,5,5,1,5,1,5,3,1,3,2,4,3,4,1,1,3,5,4,4,2,1,2,1,2,1,2,1,5,2,1,5,1,2,2,1,5,5,5,1,1,1,5,1,3,4,5,1,2,2,5,5,3,4,5,4,4,1,4,5,3,4,4,5,2,4,2,2,1,3,4,3,2,3,4,1,4,4,4,5,1,3,4,2,5,4,5,3,1,4,1,1,1,2,4,2,1,5,1,4,5,3,3,4,1,1,4,3,4,1,1,1,5,4,3,5,2,4,1,1,2,3,2,4,4,3,3,5,3,1,4,5,5,4,3,3,5,1,5,3,5,2,5,1,5,5,2,3,3,1,1,2,2,4,3,1,5,1,1,3,1,4,1,2,3,5,5,1,2,3,4,3,4,1,1,5,5,3,3,4,5,1,1,4,1,4,1,3,5,5,1,4,3,1,3,5,5,5,5,5,2,2,1,2,4,1,5,3,3,5,4,5,4,1,5,1,5,1,2,5,4,5,5,3,2,2,2,5,4,4,3,3,1,4,1,2,3,1,5,4,5,3,4,1,1,2,2,1,2,5,1,1,1,5,4,5,2,1,4,4,1,1,3,3,1,3,2,1,5,2,3,4,5,3,5,4,3,1,3,5,5,5,5,2,1,1,4,2,5,1,5,1,3,4,3,5,5,1,4,3"

var day18FishCount = 26
var day80FishCount = 5934

var fishList = myInput.split(',').map(Number);

console.log("fishList is ", fishList);

var lanternfishSpawnDay = (counts,day)=>
{
    var currentZeroIndex = (day) % counts.length
    var lanternfishSpawnCount = counts[currentZeroIndex];
    counts[(7 + day) % counts.length] += lanternfishSpawnCount;
    return counts;
};

var printLanternFish = (counts,day)=>{
    var printableLanternfishCounts = [0,0,0,0,0,0,0,0,0]
    for(let i = 0; i < counts.length; i++) {
        var currentIndex = (i + day) % counts.length;
        printableLanternfishCounts[i] = counts[currentIndex]
    }
    console.log(printableLanternfishCounts)
}

var startTime = performance.now();

for(let i = 0; i < 1000000; i++) {
    var lanternfishCounts = [0,0,0,0,0,0,0,0,0]
    fishList.forEach((index) => {
        lanternfishCounts[index] += 1;
    });
    for(let day = 0; day < 256; day++) {
        //console.log("num fishes on day " + day + " is " + lanternfishCounts.reduce((acc,current)=>(acc+current),0));
        //printLanternFish(lanternfishCounts,day);
        lanternfishCounts = lanternfishSpawnDay(lanternfishCounts,day);
    }
}
var endTime = performance.now();
console.log("final num fishes is " + lanternfishCounts.reduce((acc,current)=>(acc+current),0));
console.log("compute time is : ",(endTime - startTime));

//[0,1,1,2,1,0,0,0,0]
//(0 + 1) % length
//[1,1,2,1,0,0,0,0,0]

// var correctedIndex = ((intendedIndex - Shift) + length) % length
// returns 0 - end of array



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