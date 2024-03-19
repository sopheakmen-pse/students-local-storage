const studentList = document.getElementById("studentList");

function getStudentsFromLocalStorage() {
  const data = localStorage.getItem("students");
  if (!data) {
    return [];
  } else {
    return JSON.parse(data);
  }
}

function createStudentCard(student) {
  return `
        <div class="card">
            <div class="card-info">
                <h3>${student.fullname}</h3>
                <p>${student.studentClass}</p>
            </div>
            <div class="card-action">
                <button class="button-small button-edit">Edit</button>
                <button class="button-small button-delete">Delete</button>
            </div>
        </div>
    `;
}

function loadStudents() {
  const students = getStudentsFromLocalStorage();
  let contentHTML = "";
  students.forEach((student) => {
    contentHTML += createStudentCard(student);
  });
  studentList.innerHTML = contentHTML;
}

loadStudents();
