const grades = [
  {name: 'John', grade: 8, sex: 'M'},
  {name: 'Sarah', grade: 12, sex: 'F'},
  {name: 'Bob', grade: 16, sex: 'M'},
  {name: 'Johnny', grade: 2, sex: 'M'},
  {name: 'Ethan', grade: 4, sex: 'M'},
  {name: 'Paula', grade: 18, sex: 'F'},
  {name: 'Donald', grade: 5, sex: 'M'},
  {name: 'Jennifer', grade: 13, sex: 'F'},
  {name: 'Courtney', grade: 15, sex: 'F'},
  {name: 'Jane', grade: 9, sex: 'F'}
 ]

// 1. Viết function tính thứ hạng trung bình của cả lớp
function thuHangtb(grades){
  let sum = grades.reduce((t,e) => {
    return t+e.grade
  },0)
  return sum/grades.length
}
console.log(thuHangtb(grades))


// 2. Viết function tính thứ hạng trung bình của nam trong lớp
function thuHangtbCuaNam(grades){
  let arr = grades.filter((e) => e.sex == 'M')
  let sum = arr.reduce((t,e) => {
    return t+e.grade
  },0)
  return sum/arr.length
}
console.log(thuHangtbCuaNam(grades))


// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function thuHangtbCuaNu(grades){
  let arr = grades.filter((e) => e.sex == 'F')
  let sum = arr.reduce((t,e) => {
    return t+e.grade
  },0)
  return sum/arr.length
}
console.log(thuHangtbCuaNu(grades))


// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function namThuHangCaoNhat(grades){
  let arr = grades.filter((e) => e.sex == 'M')
  arr.sort((a,b) => a.grade-b.grade)
  return arr[0].grade
}
console.log(namThuHangCaoNhat(grades))


// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function nuThuHangCaoNhat(grades){
  let arr = grades.filter((e) => e.sex == 'F')
  arr.sort((a,b) => a.grade-b.grade)
  return arr[0].grade
}
console.log(nuThuHangCaoNhat(grades))


// 6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function namThuHangThapNhat(grades){
  let arr = grades.filter((e) => e.sex == 'M')
  arr.sort((a,b) => b.grade-a.grade)
  return arr[0].grade
}
console.log(namThuHangThapNhat(grades))


// 7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function nuThuHangThapNhat(grades){
  let arr = grades.filter((e) => e.sex == 'F')
  arr.sort((a,b) => b.grade-a.grade)
  return arr[0].grade
}
console.log(nuThuHangThapNhat(grades))


// 8. Viết function thứ hạng cao nhất của cả lớp
function thuHangCaoNhat(grades){
  grades.sort((a,b) => a.grade-b.grade)
  return grades[0].grade
}
console.log(thuHangCaoNhat(grades))


// 9. Viết function thứ hạng thấp nhất của cả lớp
function thuHangThapNhat(grades){
  grades.sort((a,b) => b.grade-a.grade)
  return grades[0].grade
}
console.log(thuHangThapNhat(grades))


// 10 Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function danhSachNu(grades){
  return grades.filter((e) => e.sex == 'F')
}
console.log(danhSachNu(grades))


// 11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sapXepTenTangDan(grades){
  return grades.sort((a,b) => a.name.localeCompare(b.name))
}
console.log(sapXepTenTangDan(grades))

// 12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sapXepThuHang(grades){
  return grades.sort((a, b) => a.grade-b.grade);
}
console.log(sapXepThuHang(grades))

// 13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function nuTenBatDauBangJ(grades){
  return grades.filter((e) => e.name.startsWith('J') && e.sex == 'F')
}
console.log(nuTenBatDauBangJ(grades))

// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function top5(grades){
  grades.sort((a,b) => a.grade-b.grade)
  let arr = []
  for(let i=0; i<5;i++){
    arr.push(grades[i])
  }
  return arr
}
console.log(top5(grades))