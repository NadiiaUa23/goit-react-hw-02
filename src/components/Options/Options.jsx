import style from './Options.module.css'
 
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
<div>
    <button onClick={()=>updateFeedback('good')}>good</button>
    <button onClick={()=>updateFeedback('neutral')}>neutral</button>
    <button onClick={()=>updateFeedback('bad')}>bad</button>
    <button onClick={resetFeedback}>Reset</button>
</div>
    );
};

export default Options;