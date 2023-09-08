import IconReaction from '../../assets/images/icon-reaction.svg';
import IconMemory from '../../assets/images/icon-memory.svg';
import IconVerbal from '../../assets/images/icon-verbal.svg';
import IconVisual from '../../assets/images/icon-visual.svg';
import './Summary.css';

function Summary() {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <ul>
        <li className="reaction-list">
          <div>
            <img src={IconReaction} alt="icon reaction" />
            <p>Reaction</p>
          </div>
          <p>
            80<span>/ 100</span>
          </p>
        </li>
        <li className="memory-list">
          <div>
            <img src={IconMemory} alt="icon memory" />
            <p>Memory</p>
          </div>
          <p>
            92<span>/ 100</span>
          </p>
        </li>
        <li className="verbal-list">
          <div>
            <img src={IconVerbal} alt="icon verbal" />
            <p>Verbal</p>
          </div>
          <p>
            61<span>/ 100</span>
          </p>
        </li>
        <li className="visual-list">
          <div>
            <img src={IconVisual} alt="icon visual" />
            <p>Visual</p>
          </div>
          <p>
            73<span>/ 100</span>
          </p>
        </li>
      </ul>
      <button type="button">Continue</button>
    </div>
  );
}

export default Summary;
