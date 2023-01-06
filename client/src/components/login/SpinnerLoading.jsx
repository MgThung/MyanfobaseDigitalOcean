import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./login.css";

export default function SpinnerLoading() {
  return (
    <div className="Climbingloader">
      <PacmanLoader
        color="#0d3991"
        // loading={loading}
        className="loadingcircle"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <h5 className="loadingspin1">Loading</h5> */}
    </div>
  );
}
