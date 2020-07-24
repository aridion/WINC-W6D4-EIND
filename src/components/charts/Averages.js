import React from "react";
// import "./Bar.css";
import aronsTheme from "./BarTheme";
import "./Chart.css";

import {
  VictoryLine,
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
} from "victory";

function Bar(info) {
  // pick all averages for ratings
  const getAveragesPerAssignment = (AssignmentName, enjoyRating) => {
    const totalRatingsPerAssignment = [];

    info.data.forEach((assignment) => {
      if (assignment.assignment === AssignmentName)
        return enjoyRating === true
          ? totalRatingsPerAssignment.push(parseFloat(assignment.enjoyment))
          : totalRatingsPerAssignment.push(parseFloat(assignment.difficulty));
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
      totalRatingsPerAssignment.reduce(reducer) /
      totalRatingsPerAssignment.length
    );
  };

  // const allAverages = info.assignmentNames.map((name) =>
  //   getAveragesPerAssignment(name)
  // );

  const averageEnjoyment = info.assignmentNames.map((name) =>
    getAveragesPerAssignment(name, true)
  );

  const averageDifficulty = info.assignmentNames.map((name) =>
    getAveragesPerAssignment(name, false)
  );

  //makes data ready to be imported into charts
  averageEnjoyment.unshift(0);
  averageDifficulty.unshift(0);

  return (
    <>
      <h1>Average Ratings Visualized in a Bar Chart</h1>
      <figure>
        <VictoryChart
          domain={{ x: [0, 56], y: [0, 5] }}
          // domainPadding={{ x: 100 }}
          theme={aronsTheme}
        >
          <VictoryGroup offset={5}>
            <VictoryBar
              // alignment="start"
              data={averageEnjoyment}
              x="assignment"
              y="enjoymentRating"
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={info.assignmentNames}
            />
            <VictoryBar
              // alignment="start"
              data={averageDifficulty}
              x="assignment"
              y="enjoymentRating"
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={info.assignmentNames}
            />
          </VictoryGroup>

          <VictoryAxis
            tickFormat={info.assignmentNames}
            width={300}
            height={50}
            style={{ tickLabels: { angle: 45 } }}
          />
          <VictoryAxis dependentAxis style={{ tickLabels: { padding: 15 } }} />
        </VictoryChart>
      </figure>
      <h1>Average Ratings Visualized in a Line Chart</h1>
      <figure>
        <VictoryChart domain={{ x: [1, 56], y: [0, 5] }} theme={aronsTheme}>
          <VictoryGroup offset={0}>
            <VictoryLine
              alignment="start"
              data={averageEnjoyment}
              x="assignment"
              y="enjoymentRating"
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={info.assignmentNames}
            />
            <VictoryLine
              alignment="start"
              data={averageDifficulty}
              x="assignment"
              y="enjoymentRating"
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={info.assignmentNames}
            />
          </VictoryGroup>

          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            // tickValues={[1, 2, 3, 4, 5, 6]}
            tickFormat={info.assignmentNames}
            width={300}
            height={50}
            style={{ tickLabels: { angle: 45 } }}
          />
          <VictoryAxis dependentAxis style={{ tickLabels: { padding: 15 } }} />
        </VictoryChart>
      </figure>
    </>
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
