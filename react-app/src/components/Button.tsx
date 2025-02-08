import { useState } from "react";
import Alert from "./Alert";

// Note: The question mark (?) tells react that color is [optional].
//       By inputing values such as 'primary', 'secondary', etc, we make sure that only those
//       values are accepted at runtime.
interface ButtonProps {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

function Button({ children, color = "primary", onClick }: ButtonProps) {
  // React Hook
  let [hasAlert, setHasAlert] = useState(false);

  return (
    <>
      {/* Conditionally render Alert component */}
      {hasAlert && <Alert>My Alert</Alert>}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          setHasAlert(true);
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
