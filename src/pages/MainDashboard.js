import React from "react";
import Charts from "../components/Charts";
import AveragesChart from "../components/charts/Averages";

function MainDashboard(info) {
  // display a chart per student
  const allCharts = info.studentNames.map((name, index) => (
    <div key={index}>
      <h1>{name}</h1>
      <Charts
        name={name}
        assignments={info.assignments[index]}
        assignmentNames={info.assignmentNames}
      />
    </div>
  ));

  console.log("info.assignmentNames", info.assignmentNames);
  console.log("info.studentNames", info.studentNames);
  console.log("info.assignments", info.assignments);
  console.log("info.data", info.data);

  console.log("info.assignments[index].assignment", info.assignments[0]);

  return (
    <>
      <AveragesChart data={info.data} assignmentNames={info.assignmentNames} />
      <h2>All Individual Charts</h2>
      <hr></hr>
      <section>{allCharts}</section>
    </>
  );
}

export default MainDashboard;
