import React from "react";

function StudentPage(studentInfo) {
  return (
    <h1>
      hello there from {studentInfo.name}
      {console.log(studentInfo)}
    </h1>
  );
}

export default StudentPage;
