const POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums"
const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos"

const ulEl = document.querySelector('ul')
const btn = document.querySelectorAll('button')
const bigTitle = document.querySelector('span')

btn.forEach(e => {
  e.addEventListener('click', function(){
    btn.forEach(el => {
      el.classList.remove('active')
    })
    bigTitle.innerHTML = e.value
    e.classList.add('active')
    getURL(e.value)
  })
})

async function getURL(url){
  let res = await axios.get(`https://jsonplaceholder.typicode.com/${url}`)
  render(res.data)
}

function render(data){
  ulEl.innerHTML = ""
  data.forEach(e => {
    const liEl = document.createElement('li')
    liEl.textContent = e.title
    ulEl.appendChild(liEl)
  });
}

getURL('posts')

