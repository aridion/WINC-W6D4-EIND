import React, { useState } from "react";

import "./App.css";

import Data from "./Data.json";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StudentPage from "./StudentPage";
import Home from "./MainDashboard";

function App() {
  const [data] = useState({ Data });
  const mutableData = [...data.Data];

  // get all student names
  const filterStudentNames = () => {
    const namesArray = [];

    mutableData.forEach((assignment) => {
      if (!namesArray.includes(assignment.student))
        return namesArray.push(assignment.student);
    });
    return namesArray;
  };

  // get assignments per student
  const getStudentsAssignments = (studentName) => {
    const assignments = [];

    mutableData.forEach((assignment) => {
      if (assignment.student === studentName)
        return assignments.push({ assignment });
    });
    return assignments;
  };

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
          id={index}
        />
      </Route>
    ));

  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/StudentPage">StudentPH</Link>
        {linkToStudentPages()}

        <h1>hello from App</h1>
        <main>
          <Switch>
            {/* <Route path="/StudentPage">
              <StudentPage name={"Aron"} />
            </Route> */}
            {routeToStudentPages()}
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
