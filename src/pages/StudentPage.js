import React from "react";
// import Bar from "../components/charts/Bar";
import Charts from "../components/Charts";

function StudentPage(studentInfo) {
  // console.log("studentInfo.assignments", studentInfo.assignments);
  // console.log("studentInfo.name", studentInfo.name);
  console.log("studentInfo.assignmentNames", studentInfo.assignmentNames);

  return (
    <>
      <h1>All Ratings by {studentInfo.name}</h1>
      <Charts
        assignments={studentInfo.assignments}
        name={studentInfo.name}
        assignmentNames={studentInfo.assignmentNames}
      />
    </>
  );
}

export default StudentPage;
