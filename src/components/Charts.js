import React from "react";
import Bar from "./charts/Bar";

function Charts(props) {
  // FOR AVERAGES
  //   const getAveragesPerAssignment = (AssignmentName, enjoyRating) => {
  //     const totalRatingsPerAssignment = [];

  //     props.assignments.forEach((assignment) => {
  //       if (assignment.assignment === AssignmentName)
  //         return enjoyRating === true
  //           ? totalRatingsPerAssignment.push(parseInt(assignment.enjoyment))
  //           : totalRatingsPerAssignment.push(parseInt(assignment.difficulty));
  //     });

  //     const reducer = (accumulator, currentValue) => accumulator + currentValue;

  //     return (
  //       totalRatingsPerAssignment.reduce(reducer) /
  //       totalRatingsPerAssignment.length
  //     );
  //   };

  //   console.log("props.assignmentNames", props.assignmentNames);

  //   const averageEnjoyment = props.assignmentNames.map((name) =>
  //     getAveragesPerAssignment(name, true)
  //   );

  //   const averageDifficulty = props.assignmentNames.map((name) =>
  //     getAveragesPerAssignment(name, false)
  //   );

  // get assignment data per student
  //   const getStudentsAssignments = (studentName) => {
  //     const assignments = [];

  //     props.assignments.forEach((assignment) => {
  //       if (assignment.assignment.student === studentName)
  //         return assignments.push({ assignment });
  //     });
  //     return assignments;
  //   };

  //   console.log("assignments", props.assignments);
  // FOR INDIVIDUALS
  const enjoyment = props.assignments.map((assignment) =>
    parseFloat(assignment.assignment.enjoyment)
  );

  const difficulty = props.assignments.map((assignment) =>
    parseFloat(assignment.assignment.difficulty)
  );

  console.log(props.assignments[0].assignment.difficulty);

  return (
    <Bar
      enjoyment={enjoyment}
      difficulty={difficulty}
      assignments={props.assignments}
      assignmentNames={props.assignmentNames}
    />
  );
}

export default Charts;

// props.name === "Home" ? (
//     <div>
//       <h2>hello from home charts</h2>
//       <Bar
//         enjoyment={averageEnjoyment}
//         difficulty={averageDifficulty}
//         assignments={props.assignments}
//       />
//     </div>
//   ) :
