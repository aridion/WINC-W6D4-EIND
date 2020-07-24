import React from "react";
import Bar from "./charts/Bar";

function Charts(props) {
  // FOR INDIVIDUALS
  const enjoyment = props.assignments.map((assignment) =>
    parseFloat(assignment.assignment.enjoyment)
  );

  const difficulty = props.assignments.map((assignment) =>
    parseFloat(assignment.assignment.difficulty)
  );

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
