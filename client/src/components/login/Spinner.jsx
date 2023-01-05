import React from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./login.css";

export default function Spinner() {
  return (
    <div className="">
      <FadeLoader
        color="#345fbf"
        // loading={loading}
        className="spinnerLogin"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
