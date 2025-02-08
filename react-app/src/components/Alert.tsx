// Custom data structure for Props
// children: Used to pass children to a component (that is, anything within the contect of a HTML element)y.

import { ReactNode } from "react";

// ReactNode: Used to pass HTML content.
interface AlertProps {
  children: ReactNode;
}

function Alert({ children }: AlertProps) {
  return (
    <>
      {/* <div className="alert alert-danger" role="alert">
        {children}
      </div> */}
      <div
        className="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
