
// import style from './Feedback.module.css'

const Feedback = ({feedback}) => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
const  positiveFeedback = totalFeedback ? 
Math.round((feedback.good / totalFeedback) * 100) : 0;


return totalFeedback > 0 ? (
    <div>
        <p>Good:  {feedback.good}</p>
        <p>Neutral:  {feedback.neutral}</p>
        <p>Bad:  {feedback.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive:  {positiveFeedback} %</p>
    </div>
) : (<p>No feedback yet</p>)


};

export default Feedback;