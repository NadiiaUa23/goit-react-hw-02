
// import style from './Feedback.module.css'

const Feedback = ({feedback}) => {
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

return totalFeedback > 0 ? (
    <div>
        <p>good:  {feedback.good}</p>
        <p>neutral:  {feedback.neutral}</p>
        <p>bad:  {feedback.bad}</p>
    </div>
) : (<p>No feedback yet</p>)


};

export default Feedback;