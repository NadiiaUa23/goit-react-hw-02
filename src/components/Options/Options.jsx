import style from './Options.module.css'
import { FaThumbsUp, FaMeh, FaThumbsDown, FaRedo } from 'react-icons/fa';

const Options = ({ updateFeedback, resetFeedback, totalFeedback })  => {
    return (
<div className={style.options}>
    <button onClick={() => updateFeedback('good')}>
    <FaThumbsUp />
    <span>Good</span> 
    </button>
    <button onClick={() => updateFeedback('neutral')}>
    <FaMeh />
    <span>Neutral</span>
    </button>
    <button onClick={() => updateFeedback('bad')}>
    <FaThumbsDown />
    <span>Bad</span>
    </button>
    
    {totalFeedback > 0 && (
        <button onClick={resetFeedback}>
          <FaRedo />
          <span>Reset</span>
        </button>
      )}
</div>
    );
};

export default Options;