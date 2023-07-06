//Câu 1
document.body.insertAdjacentHTML('afterbegin',"<p id='text'>đây là thẻ p</p>")
const p = document.querySelector('#text')
p.style.color = '#777'
p.style.fontSize = '2rem'
p.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.'

//Câu 2
const liEl = document.querySelectorAll('p + ul>li')
liEl.forEach(e => {
  e.style.color = 'blue'
});


//Câu 3

//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ulEl = document.querySelector('#list')
for (let i = 8; i < 11; i++){
  ulEl.insertAdjacentHTML('beforeend',`<li>Item ${i}</li>`)
}

//2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const liEl1 = document.querySelector('#list li:nth-child(1)')
liEl1.style.color = 'red'

//3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const liEl3 = document.querySelector('#list li:nth-child(3)')
liEl3.style.backgroundColor = 'blue'

//4. Remove thẻ <li> 4
const liEl4 = document.querySelector('#list li:nth-child(4)')
ulEl.removeChild(liEl4)

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
liEl3.insertAdjacentHTML('afterend','<li>đây là thẻ li mới được tạo</li>')