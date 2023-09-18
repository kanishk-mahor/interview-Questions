function power(a,b){
  let pow = a
  let curr = 0
  for(let i=1; i<b; i++){
    for(let j=0; j<a; j++){
      curr = curr + pow
    }
    pow = curr
    curr = 0
  }
  return pow
}

console.log(power(2,3))
console.log(power(5,4))
console.log(power(8,2))