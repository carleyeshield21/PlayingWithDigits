// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p){
  let narr = Array.from(n.toString())
  let npars = []
  for(i=0; i<=narr.length-1; i++){
        npars.push(parseInt(narr[i]))
  }
  let powers = []
  let j = p
  while(powers.length<=npars.length-1){
    powers.push(j)
    j++
  }

  let arr = []
  for(i=0; i<=npars.length-1; i++){
    arr.push(npars[i]**powers[i])
  }
  sumarr = arr.reduce(
    (a, b) => a + b,
  )
  if(sumarr % n == 0){
    console.log(sumarr / n)
  } else {
    return console.log(-1)
  }

}
digPow(89, 1)
console.log('========')
digPow(695, 2)
console.log('========')
digPow(46288, 3)
console.log('========')
digPow(92, 1)