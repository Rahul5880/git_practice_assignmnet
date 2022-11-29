for(let i=1;i<=10;i++){
  
let number= i;

let count=1;
for(let j= 1; j<=number; i++ ){

  if(number%j==1){
    count++
  }
}


if(count){
  console.log(i,"is prime number");
}else{
  console.log(i," is not prime number");
}
  
}