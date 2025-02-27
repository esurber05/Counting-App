import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/selectValuesPage.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const SelectValuesPage = () => {
  const [number, setNumber] = useState("");
  const [difficulty, setDifficulty] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleNumberSelect = (value) => {
    setNumber(value);
    setError("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    
    // Validate that the number is between 1 and 10
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 1 || num > 10) {
      setError("Enter a number from 1 to 10.");
      return;
    }

    if (difficulty == null) {
      setError("Select a difficulty.");
      return;
    }


    setError("");
    const answers = { number: num};
    localStorage.setItem("selectValuesPageAnswers", JSON.stringify(answers));
    setSuccess("Values submitted successfully!" + "\nNumber: " + num);
    console.log("Submitted:", answers);
  };

  return (
    <div className="select-values-page">
      <h2>Select Your Values</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="numberInput">Number (1-10):</label>
          <input
            type="number"
            id="numberInput"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            min="1"
            max="10"
          />
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit">Submit</button>
        </form>
        <label>Difficulty:</label>
          <div className="button-group">
            <button
              type="button"
              className={difficulty === "Easy" ? "selected" : ""}
              onClick={() => setDifficulty("Easy")}>
              Easy
            </button>
            <button
              type="button"
              className={difficulty === "Hard" ? "selected" : ""}
              onClick={() => setDifficulty("Hard")}>
              Hard
            </button>
          </div>
        <div style={{ marginTop: "20px" }}>
          <Link to="/game/home">
            <HomeRoundedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectValuesPage;
