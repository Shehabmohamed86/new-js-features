function sum (){
  const arryAr = [...arguments];
   return arryAr.reduce((total, cur) =>{
   return total + cur;
  })
  
}


function sums (...nums){
  return nums.reduce((t , c)=>{
    return t+ c ; 
  })
}