import style from './Feedback.module.css';

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {


return totalFeedback > 0 ? (
    <div className={style.feedback}>
        <p>Good:  {feedback.good}</p>
        <p>Neutral:  {feedback.neutral}</p>
        <p>Bad:  {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive:  {positiveFeedback} %</p>
    </div>
) : (<p>No feedback yet</p>)
};

export default Feedback;