//bài 1
function calculateFactorial(a){
  let giaiThua = 1
  for(let i=a;i>1;i--){
    giaiThua *=i
  }
  return giaiThua
}
console.log(calculateFactorial(5))

//bài 2
function reverseString(s){
  let str = ""
  for(let i=s.length;i>=0;i--){
    str +=s.charAt(i)
  }
  return str
}
console.log(reverseString("hello"))

//bài 3
function translate(s){
  switch(s){
    case "EN":
      console.log("Hello")
      break
    case "VN":
      console.log("Xin chào")
      break
    case "FR":
      console.log("Bonjour")
      break
    case "IT":
      console.log("Ciao")
      break
    default:
      console.log("không phù hợp")
      break
  }
}
translate('VN')

//bài 4
function subString(s){
  let str = s.substring(0,10)
  str+="..."
  console.log(str)
}
subString("xinchaocacbandenvoiTechmaster")