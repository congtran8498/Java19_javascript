let courseList = []

const getAllCourseApi = () => {
  return axios.get("http://localhost:8080/api/v1/courses")
}

const getAllCourse = async () => {
  try {
    let res = await getAllCourseApi()
    courseList = res.data
    renderCourse(courseList)
    console.log(courseList)
  } catch (error) {
    console.log(error)
  }
}
getAllCourse()

const courseListEl = document.querySelector(".course-list")
const renderCourse = (courseList) => {
  let html = ""
  courseList.forEach(c => {
    html += `
    <div class="col-md-4">
      <a href="./detail.html?id=${c.id}">
          <div class="course-item shadow-sm rounded mb-4">
              <div class="course-item-image">
                  <img src="${c.thumbnail}"
                      alt="${c.name}">
              </div>
              <div class="course-item-info p-3">
                  <h2 class="fs-5 mb-3 text-dark">${c.name}</h2>
                  <p class="type fw-light text-black-50">${c.type === "online" ? "Trực tuyến" : "Phòng lab"}</p>
              </div>
          </div>
      </a>
    </div>`
  });
  courseListEl.innerHTML = html
}

let searchBtn = document.querySelector('.btn-search')
searchBtn.addEventListener('keypress', function(e){
  let keyword = searchBtn.value
  if(e.keyCode === 13){
    if(keyword != null){
      searchCourse(keyword)
    }
    if(keyword === null){
      renderCourse(courseList)
    }
  }
})

const searchCourse = (keyword) => {
  let searchList = courseList.filter((c) => c.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
  renderCourse(searchList)
}

let inputRadio = document.querySelectorAll(".row .col-md-3 input[type='radio']")

const radioCheck = () => {
  inputRadio.forEach(input => {
    let valueId = input.id;
    input.addEventListener('change', function(e){
      if(e.target.checked){
        let checkList = []
        courseList.forEach(c => {
          c.topics.forEach(t => {
            if(t === valueId) checkList.push(c);
          })
        })
        renderCourse(checkList)
      }
    })
  });
}
radioCheck()
