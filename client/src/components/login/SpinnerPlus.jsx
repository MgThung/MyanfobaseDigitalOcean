import React from "react";
import PulseLoader from "react-spinners/PulseLoader";
import "./login.css";

export default function SpinnerPlus() {
  return (
    <div className="">
      <PulseLoader
        color="#e2e5eb"
        // loading={loading}
        className="SpinnerPlus"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
