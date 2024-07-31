import style from './Options.module.css'
import { FaThumbsUp, FaMeh, FaThumbsDown, FaRedo } from 'react-icons/fa';

 
const Options = ({feedback, setFeedback}) => {
    const updateFeedback = feedbackType => {
        setFeedback(prevFeedback => ({
            ...prevFeedback, 
            [feedbackType]: prevFeedback[feedbackType] + 1
        }));
        };
        
        const resetFeedback = () => {
            setFeedback({good: 0,
                neutral: 0,
                bad: 0});
        };


    return (
<div className={style.options}>
    <button onClick={()=>updateFeedback('good')}>
    <FaThumbsUp />
    <span>Good</span> 
    </button>
    <button onClick={()=>updateFeedback('neutral')}>
    <FaMeh />
    <span>Neutral</span>
    </button>
    <button onClick={()=>updateFeedback('bad')}>
    <FaThumbsDown />
    <span>Bad</span>
    </button>
    <button onClick={resetFeedback}> 
        <FaRedo />
    <span>Reset</span></button>
</div>
    );
};

export default Options;