import React from "react";
import cl from "./MySelect.module.css";

const MySelect = ({ onChange }) => {
  const speciesList = [
    "",
    "unknown",
    "human",
    "alien",
    "animal",
    "humanoid",
    "poopybutthole",
    "mythological creature",
    "robot",
    "cronenberg",
    "disease",
  ];
  const statusList = ["", "unknown", "alive", "dead"];
  const genderList = ["", "unknown", "female", "male", "genderless"];
  const createOption = (option, i) => {
    return <option key={option} value={option}>{option}</option>;
  };

  return (
    <div className={cl.container}>
      Choose by:
      <div>
        species:
        <select name="species" id="species" onChange={e => onChange(e.target.name, e.target.value)}>
          {speciesList.map((species, i) => {
            return createOption(species, i);
          })}
        </select>
      </div>
      <div>
        status:
        <select name="status" id="status" onChange={e => onChange(e.target.name, e.target.value)}>
          {statusList.map((status, i) => {
            return createOption(status, i);
          })}
        </select>
      </div>
      <div>
        gender:
        <select name="gender" id="gender" onChange={e => onChange(e.target.name, e.target.value)}>
          {genderList.map((gender, i) => {
            return createOption(gender, i);
          })}
        </select>
      </div>
    </div>
  );
};

export default MySelect;
