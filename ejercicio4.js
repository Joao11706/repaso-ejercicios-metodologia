let nums=[5,7,3,6,7];
let x=7;

for (let i=0; i<nums.length; i++){
    for(letj=i +1; j<nums.length; j++ ){
        if(nums[i] + nums[j]===x){
            console.log("Indice" + i + "Indice" + j);
        }
    }
}
