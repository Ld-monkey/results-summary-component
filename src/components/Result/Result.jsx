import './Result.css';

function Result() {
  return (
    <div className="result-container">
      <h2>Your Result</h2>
      <div className="result-circle">
        <p>
          <span>76</span>
          <br />
          of 100
        </p>
      </div>
      <div className="result-paragraphe">
        <h1>Great</h1>
        <p>Your performance exceed 65% of the people conducting the test here!</p>
      </div>
    </div>
  );
}

export default Result;
