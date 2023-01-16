import React from "react";
import Select from "react-select";
import "./language.css";

const options = [
  {
    label: (
      <img className="labalimg" src="./images/homeimgs/englang.jpg" alt="" />
    ),
    english: "english",
    value: "english",
  },
  {
    label: (
      <img
        className="labalimg"
        src="./images/homeimgs/myanmarlang.jpg"
        alt=""
      />
    ),
    english: "myanmar",
    value: "myanmar",
  },
];

function onChangeInput(value) {}
export default function Language() {
  return (
    <div>
      <Select
        options={options}
        onChange={onChangeInput}
        defaultValue={[options[0], options[0][1]]}
      />
    </div>
  );
}
