let str="racecar"
let checkPallindrome="";

for(let i=str.length-1;i>=0;i++){
checkPallindrome+=str[i]
}
if(checkPallindrome==str){
console.log("Yes");
}
else{
console.log("No");