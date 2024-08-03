import style from './Feedback.module.css';
import Notification from '../Notification/Notification';

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {


return totalFeedback > 0 ? (
    <div className={style.feedback}>
        <p>Good:  {feedback.good}</p>
        <p>Neutral:  {feedback.neutral}</p>
        <p>Bad:  {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive:  {positiveFeedback} %</p>
    </div>
) : (
    <Notification message="No feedback yet" />
)
};

export default Feedback;