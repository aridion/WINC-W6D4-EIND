import React from "react";
// import "./Bar.css";
import aronsTheme from "./BarTheme";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

function Bar(props) {
  //   const enjoymentFunction = () => {
  //     const enjoymentArray = [];

  //     props.assignments.forEach((assignment) => {
  //       return enjoymentArray.push(assignment.student);
  //     });
  //     return enjoymentArray;
  //   };

  //     const enjoymentFunction = () => {
  //       props.assignments.map((assignment) => assignment.enjoyment);
  //     };
  //   const enjoyment = enjoymentFunction();

  // const averageRatings = () => {
  // const assignmentNamesArray = props.assignment.map(assignment => assignment.assignment)
  // const allScoresPerAssignment = []

  // assignmentNamesArray.map(assignmentName =>

  //   if (props.assignment.assignment === assignmentName)
  //   parseInt(props.assignment.enjoyment) +

  //   )

  //   props.assignment.map(assignment.assignment === )
  // }

  // const enjoyment = props.assignments.map((assignment) =>
  //   parseFloat(assignment.assignment.enjoyment)
  // );

  // const difficulty = props.assignments.map((assignment) =>
  //   parseFloat(assignment.assignment.difficulty)
  // );

  // const enjoyment =
  //   props.name === "Home"
  //     ? props.assignments.map((assignment) => ({
  //         difficulty: parseInt(assignment.difficulty),
  //         enjoyment: parseInt(assignment.enjoyment),
  //       }))
  //     : props.assignments.map((assignment) =>
  //         parseInt(assignment.assignment.enjoyment)
  //       );

  // const difficulty =
  //   props.name === "Home"
  //     ? props.assignments.map((assignment) => parseInt(assignment.difficulty))
  //     : props.assignments.map((assignment) =>
  //         parseInt(assignment.assignment.difficulty)
  //       );

  // const ratingArray = (enjoyRating) => {
  //   enjoyRating === true
  //     ? props.assignments.map((assignment) =>
  //         parseInt(assignment.assignment.enjoyment)
  //       )
  //     : props.assignments.map((assignment) =>
  //         parseInt(assignment.assignment.difficulty)
  //       );
  // };

  // console.log("ratingArray", ratingArray(true));

  // console.log("enjoyment", enjoyment);

  console.log("props.assignments ", props.assignments);

  // console.log("avg diff", props.difficulty);

  // console.log("avg enjoy", props.enjoyment);

  // console.log("new array", [1, 2, 3, 4, 6.1]);

  // choose assignment data
  return (
    <VictoryChart domainPadding={15} theme={aronsTheme}>
      <VictoryGroup offset={5}>
        <VictoryBar
          alignment="start"
          data={props.enjoyment}
          x="assignment"
          y="enjoymentRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignmentNames}
        />
        <VictoryBar
          alignment="start"
          data={props.difficulty}
          x="assignment"
          y="enjoymentRating"
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={props.assignmentNames}
        />
      </VictoryGroup>

      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        // tickValues={[1, 2, 3, 4, 5, 6]}
        tickFormat={props.assignmentNames}
        width={300}
        height={50}
      />
      <VictoryAxis dependentAxis domain={[0, 5]} width={300} height={50} />
    </VictoryChart>
  );
}

// props needed assignment data
// assignments
//

export default Bar;

// props.averageEnjoyment === undefined ? props.averageEnjoyment : enjoyment;

// props.averageDifficulty === undefined ? props.averageDifficulty : difficulty;

// props.averageEnjoyment === undefined ? props.averageEnjoyment : enjoyment;

// props.averageDifficulty === undefined ? props.averageDifficulty : difficulty;

//   <VictoryBar
//     labelComponent={<VictoryTooltip />}
//     data={assignmentRatingAverageWithLabels}
//     x="assignment"
//     y="difficultyRating"
//     tickValues={[1, 2, 3, 4, 5]}
//     tickFormat={props.assignments.assignment.map((item) => item.assignment)}
//   />
