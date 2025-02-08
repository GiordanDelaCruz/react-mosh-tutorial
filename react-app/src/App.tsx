import { useId } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Table from "./components/Table";

// Exercise Data
const exerciseHeaders = [
  "date",
  "weekday",
  "exercise",
  "tag",
  "body_weight",
  "duration",
  "weight",
  "reps",
  "sets",
  "additional notes",
];
const exerciseData = [
  {
    date: "5/10/2023",
    weekday: "Wednesday",
    name: "Leg Press",
    tag: "Legs",
    body_weight: false,
    duration: 0,
    weight: 80,
    reps: 15,
    sets: 1,
    additional_notes: "",
  },
  {
    date: "5/10/2023",
    weekday: "Wednesday",
    name: "Leg Press",
    tag: "Legs",
    body_weight: false,
    duration: 0,
    weight: 100,
    reps: 15,
    sets: 2,
    additional_notes: "",
  },
];

// Button Types
const buttonTypes = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

// Event Handler
function handleSelectItem(item: string) {
  console.log(item);
}

function App() {
  return (
    <div>
      <Alert>
        Welcome to <span>HOUND</span>
      </Alert>
      <Message />
      {/* <ListGroup></ListGroup> */}
      <Table
        exerciseHeaders={exerciseHeaders} // Passing variables as props
        exerciseData={exerciseData}
        onSelectItem={handleSelectItem} // Passing functions as props
      />

      <Button
        key={useId()}
        children={"My Button"}
        color="danger"
        onClick={() => console.log("Clicked")}
      />
    </div>
  );
}

export default App;
