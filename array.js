var arraysInArrays = [
    [1, 2, 3],
    ["Julia", "James"],
    [true, false, true, false]
];




var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
console.log(7);
var num=[2,4,5,6];
for (i=0;i<num.length;i++){

    console.log(num[i])
}
i=0;
while(i<num.length){

    console.log(num[i]);
    i++;
}


function reverseName(Name){
    return Name.split(' ').reverse().join(' ');

}

console.log(reverseName( "honda civic"))
function reverseNameI(Name){
    let arr=Name.split(' ');
    console.log(arr);
    console.log(arr[1]+' '+arr[0]);}

reverseNameI("honda civic");