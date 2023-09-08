import './Result.css';

function Result() {
  return (
    <div className="result-container">
      <h2>Your Result</h2>
      <div className="result-circle">
        <p>76</p>
        <p>
          <span>to 100</span>
        </p>
      </div>
      <h1>Great</h1>
      <p>Your performance exceed 65% of the people conducting the test here!</p>
    </div>
  );
}

export default Result;
