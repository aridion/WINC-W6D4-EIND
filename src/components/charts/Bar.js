import React from "react";
import "./Chart.css";
import aronsTheme from "./BarTheme";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from "victory";

function Bar(props) {
  //makes data ready to be imported into charts
  props.enjoyment.unshift(0);
  props.difficulty.unshift(0);

  return (
    <figure>
      <VictoryChart domain={{ x: [0, 56], y: [0, 5] }} theme={aronsTheme}>
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
          style={{ tickLabels: { angle: 45 } }}
        />
        <VictoryAxis dependentAxis style={{ tickLabels: { padding: 15 } }} />
      </VictoryChart>
    </figure>
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
