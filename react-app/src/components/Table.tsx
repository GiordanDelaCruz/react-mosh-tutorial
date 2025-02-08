import { useId, useState } from "react";
import { MouseEvent } from "react";
import "../assets/styles/Table.css";

// Interface: Used to define the structure of data (think of custom data structures)
interface TableProps {
  exerciseHeaders: string[];
  exerciseData: exerciseData[];
  onSelectItem: (item: string) => void;
}
interface exerciseData {
  date: string;
  weekday: string;
  name: string;
  tag: string;
  body_weight: boolean;
  duration: number;
  weight: number;
  reps: number;
  sets: number;
  additional_notes: string;
}

function Table({ exerciseHeaders, exerciseData, onSelectItem }: TableProps) {
  // React Hook
  let [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  function handleClick(event: MouseEvent) {
    return console.log(event);
  }

  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            {exerciseHeaders.map((item) => {
              return (
                <th key={item} scope="col">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {exerciseData.map((exercise, index) => {
            return (
              <tr
                key={useId()}
                className={selectedIndex === index ? "table-active" : ""}
                onClick={() => {
                  setSelectedIndex(index);
                  onSelectItem(exercise.name);
                }}
              >
                <td key={useId()}>{exercise.date} </td>
                <td key={useId()}>{exercise.weekday} </td>
                <td key={useId()} onClick={handleClick}>
                  {exercise.name}
                </td>
                <td key={useId()}>{exercise.tag} </td>
                <td key={useId()}>
                  {exercise.body_weight === false && "False"}
                </td>
                <td key={useId()}>
                  {exercise.body_weight === false &&
                    exercise.duration === 0 &&
                    "N/A"}
                </td>
                <td key={useId()}>{exercise.weight} </td>
                <td key={useId()}>{exercise.reps} </td>
                <td key={useId()}>{exercise.sets} </td>
                <td key={useId()}>{exercise.additional_notes} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
