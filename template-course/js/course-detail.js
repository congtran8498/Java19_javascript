let detailCourseList = {}

const getAllDetailCourseApi = (id) => {
  return axios.get(`http://localhost:8080/api/v1/courses/${id}`)
}

const getAllDetailCourse = async () => {
  try {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    let res = await getAllDetailCourseApi(id)
    detailCourseList = res.data
    renderDetailCourse(detailCourseList)
    console.log(detailCourseList)
  } catch (error) {
    console.log(error)
  }
}
getAllDetailCourse()
const containerEl = document.querySelector('.container')

const renderDetailCourse = (course) => {
  let html = ` 
              <div class="row justify-content-center">
              <div class="col-md-10">
                  <div class="mb-4">
                      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                          <ol class="breadcrumb">
                              <li class="breadcrumb-item"><a href="./course-list.html">Khóa học</a></li>
                              <li class="breadcrumb-item active" aria-current="page">${course.name}</li>
                          </ol>
                      </nav>
                  </div>

                  <div class="main p-4 shadow-sm">
                      <h2 class="course-title fs-5">${course.name}</h2>

                      <hr>

                      <div class="supporter d-flex align-items-center">
                          <div class="supporter-image">
                              <img src="${course.user.avatar}" alt="tư vấn viên" class="rounded-circle w-75 h-75">
                          </div>
                          <div class="supporter-info">
                              <p>
                                  <b>Tư vấn viên :</b>
                                  ${course.user.name}
                              </p>
                              <p>
                                  <b>Email :</b>
                                  ${course.user.email}
                              </p>
                              <p>
                                  <b>Số điện thoại :</b>
                                  ${course.user.phone}
                              </p>
                          </div>
                      </div>

                      <hr>

                      <div class="course-description">
                          <p>${course.description}</p>
                      </div>
                  </div>
              </div>
            </div>`
  containerEl.innerHTML = html
}