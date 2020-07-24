import React from "react";
// import "./Bar.css";
import aronsTheme from "./BarTheme";
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

  console.log("averageDifficulty", averageDifficulty);
  console.log("averageEnjoyment", averageEnjoyment);

  console.log("info.assignments ", info.assignments);

  console.log("avg diff", info.difficulty);

  console.log("avg enjoy", info.enjoyment);

  console.log(
    "info.assignmentNames.map((item) => item)",
    info.assignmentNames.map((item) => item)
  );

  // choose assignment data
  return (
    <div>
      <VictoryChart domainPadding={15} theme={aronsTheme}>
        <VictoryGroup offset={5}>
          <VictoryBar
            alignment="start"
            data={averageEnjoyment}
            x="assignment"
            y="enjoymentRating"
            tickValues={[1, 2, 3, 4, 5]}
            tickFormat={info.assignmentNames}
          />
          <VictoryBar
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
        />
        <VictoryAxis dependentAxis domain={[0, 5]} width={300} height={50} />
      </VictoryChart>
      <VictoryChart domainPadding={15} theme={aronsTheme}>
        <VictoryGroup offset={5}>
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
        />
        <VictoryAxis dependentAxis domain={[0, 5]} width={300} height={50} />
      </VictoryChart>
    </div>
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
