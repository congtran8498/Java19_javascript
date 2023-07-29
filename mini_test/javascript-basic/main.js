// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài 
// lớn nhất
function getStringHasMaxLength(arr) {
  let max = -1
  arr.forEach(e => {
    max = Math.max(max, e.length)
  });
  return arr.filter((e) => e.length == max)
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))

//Bài 2.
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false
  }
]
//Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function check(users){
  return users.filter((e) => e.age > 25 && e.isStatus == true)
}
console.log(check(users))

//Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function sapXep(users){
  return users.sort((a,b) => a.age-b.age)
}
console.log(sapXep(users))

//Bài 3:
function getCountElement(arr){
  let obj = {}
  arr.forEach(e => {
    let count = 0
    arr.forEach(el => {
      if(e == el){
        count ++;
      }
    })
    obj[e] = count
  })
  return obj
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))