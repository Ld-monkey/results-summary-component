import Result from '../Result/Result';
import Summary from '../Summary/Summary';
import './App.css';

function App() {
  return (
    <main>
      <div className="result-summary-container">
        <Result />
        <Summary />
      </div>
    </main>
  );
}

export default App;
