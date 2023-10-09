let a = parseInt(Math.random() * 90)
if (a % 2 == 0) {
    console.log('a juft son')
} else {
    console.log('a toq son');
}





let b = parseInt(Math.random() * 10000000)
console.log(b);
if (b % 5 == 0) {
    console.log('b soni 5ga bolinadi');
} else {
    console.log('b soni 5ga bolinmaydi');
}
if (b % 3 == 0) {
    console.log('b soni 3ga bolinadi');
} else {
    console.log('b soni 3ga bolinmaydi');
}
if (b % 3 == 0) {
    if (b % 5 == 0) {
    } else {
        console.log('b soni 3ga bolinadi 5ga bolinmaydi');
    }
} else {
    console.log('b soni 3ga va 5ga bolinmaydi');
}
if (b % 5 == 0) {
    if (b % 3 == 0) {
        console.log('b soni 3ga va 5ga bolinadi');
    } else {
        console.log('b soni 5ga bolinadi 3ga bolinmaydi');
    }
}





let e = parseInt(Math.random() * 20)
let c = parseInt(Math.random() * 20)
let difference1 = e-5
let difference2 = c-5
difference1 = Math.abs(difference1)
difference2 = Math.abs(difference2)
console.log("e= " + e + " c= " + c)
if (e > 5) {
  if (e > 5) {
    if (e > c) {
      console.log(c + " soni 5ga yaqinroq")
    } else {
      console.log(e + " soni 5ga yaqinroq")
    }
  } else if(difference1 > difference2) {
    console.log(c + " soni 5ga yaqinroq")
  
}else{
  console.log(e + " soni 5ga yaqinroq")
}
} else if(e>5){
if(difference1 > difference2) {
  console.log(c + " soni 5ga yaqinroq")
}else if(difference1 < difference2){
  console.log(e + " soni 5ga yaqinroq")
}else{
  console.log("ikkalasi ham teng yaqin")
}
}else if(e>c){
  console.log(e + " soni 5ga yaqinroq")
}else{
  console.log(c + " soni 5ga yaqinroq")
}


