import React, { useState } from "react";

import "./App.css";

import Data from "./Data.json";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StudentPage from "./pages/StudentPage";
import Home from "./pages/MainDashboard";

function App() {
  const [data] = useState({ Data });
  const mutableData = [...data.Data];

  // filter all student names out of data (there are no doubles)
  const filterStudentNames = () => {
    const namesArray = [];

    mutableData.forEach((assignment) => {
      if (!namesArray.includes(assignment.student))
        return namesArray.push(assignment.student);
    });
    return namesArray;
  };

  const allStudentNames = filterStudentNames();
  ////////
  // get assignment data per student
  const getStudentsAssignments = (studentName) => {
    const assignments = [];

    mutableData.forEach((assignment) => {
      if (assignment.student === studentName)
        return assignments.push({ assignment });
    });
    return assignments;
  };

  const allAssignmentsByObjects = filterStudentNames().map((name) =>
    getStudentsAssignments(name)
  );

  const allAssignmentNames = getStudentsAssignments("Evelyn").map(
    (assignmentInfo) => assignmentInfo.assignment.assignment
  );

  // make links per student
  const linkToStudentPages = () =>
    filterStudentNames().map((name, index) => (
      <Link to={"/" + name} key={index}>
        {name}
      </Link>
    ));

  // make routes per student
  const routeToStudentPages = () =>
    filterStudentNames().map((name, index) => (
      <Route path={"/" + name} key={index}>
        <StudentPage
          name={name}
          assignments={getStudentsAssignments(name)}
          assignmentNames={allAssignmentNames}
          id={index}
        />
      </Route>
    ));

  return (
    <>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {linkToStudentPages()}
        </nav>

        <main>
          <Switch>
            {routeToStudentPages()}
            <Route path="/">
              <Home
                studentNames={allStudentNames}
                assignments={allAssignmentsByObjects}
                data={mutableData}
                assignmentNames={allAssignmentNames}
              />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;

// // pick all ratings
// const getAveragesPerAssignment = (AssignmentName, enjoyRating) => {
//   const totalRatingsPerAssignment = [];

//   mutableData.forEach((assignment) => {
//     if (assignment.assignment === AssignmentName)
//       return enjoyRating === true
//         ? totalRatingsPerAssignment.push(parseInt(assignment.enjoyment))
//         : totalRatingsPerAssignment.push(parseInt(assignment.difficulty));
//   });

//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   return (
//     totalRatingsPerAssignment.reduce(reducer) /
//     totalRatingsPerAssignment.length
//   );
// };

// const allAverages = assignmentNamesArray.map((name) =>
//   getAveragesPerAssignment(name)
// );

// const averageEnjoyment = assignmentNamesArray.map((name) =>
//   getAveragesPerAssignment(name, true)
// );

// const averageDifficulty = assignmentNamesArray.map((name) =>
//   getAveragesPerAssignment(name, false)
// );
/////

// averageEnjoyment={averageEnjoyment}
// averageDifficulty={averageDifficulty}
