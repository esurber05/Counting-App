import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/selectValuesPage.css";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const SelectValuesPage = () => {
  const [number, setNumber] = useState("");
  const [range, setRange] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess("");
    
    // Validate that the number is between 1 and 10
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 1 || num > 10) {
      setError("Enter a number from 1 to 10.");
      return;
    }

    // Validate the range format
    const rangePattern = /^([1-9]|10)-([1-9]|10)$/;
    if (!rangePattern.test(range)) {
      setError("Enter a range in the format X-Y with numbers from 1 to 10.");
      return;
    }

    const [start, end] = range.split("-").map(n => parseInt(n, 10));
    if (start > end) {
      setError("Start number must be less than or equal to the end number.");
      return;
    }

    setError("");
    const answers = { number: num, range: [start, end] };
    localStorage.setItem("selectValuesPageAnswers", JSON.stringify(answers));
    setSuccess("Values submitted successfully!" + "\nNumber: " + num + " Range: " + range);
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
          <label htmlFor="rangeInput">Range (e.g., 1-3):</label>
          <input
            type="text"
            id="rangeInput"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
          <button type="submit">Submit</button>
        </form>
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
