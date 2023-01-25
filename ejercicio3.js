let nums=[2,5,6,3,4,];
let cont=0;

for(let i=0; i<nums.length; i++){
    if(nums[i]%2!==0){
        cont++;
    }
}
console.log(cont);