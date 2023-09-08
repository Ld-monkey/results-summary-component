import data from './data.json';
import './Summary.css';

function Summary() {
  const categories = data.map((subcategory) => (
    <li key={subcategory.category} className={`${subcategory.category.toLocaleLowerCase()}-list`}>
      <div>
        <img src={subcategory.icon} alt={subcategory.category} />
        <p>{subcategory.category}</p>
      </div>
      <p>
        {subcategory.score}
        <span>/ 100</span>
      </p>
    </li>
  ));
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <ul>{categories}</ul>
      <button type="button">Continue</button>
    </div>
  );
}

export default Summary;
