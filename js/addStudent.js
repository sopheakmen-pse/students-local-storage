const addStudentForm = document.getElementById("addStudentForm");

addStudentForm.addEventListener("submit", handleAddStudent);

function handleAddStudent(event) {
  event.preventDefault();

  // 1. Get form data
  const fullname = addStudentForm["fullname"].value;
  const studentClass = addStudentForm["class"].value;
  const age = addStudentForm["age"].value;
  const gender = addStudentForm["gender"].value;

  // 2. Create a student object
  const student = { fullname, studentClass, age, gender };

  // 3. Get current students data from local storage
  const data = localStorage.getItem("students");

  // 4. Check if data is existing
  if (!data) {
    // 5. Data is not existing
    // 6. Convert an array of objects to string in JSON format
    const studentsJSONString = JSON.stringify([student]);

    // 7. Save to local storage in browser
    localStorage.setItem("students", studentsJSONString);
  } else {
    // 6. Data is already existing, parse data to array
    const students = JSON.parse(data);

    // 7. Convert an array of objects to string in JSON format
    const studentsJSONString = JSON.stringify([student, ...students]);

    // 8. Save to local storage in browser
    localStorage.setItem("students", studentsJSONString);
  }

  // redirect back to home page
  window.location.href = "index.html";
  alert("Add a new student successfully!");
}
