
// import style from './Feedback.module.css'

const Feedback = ({feedback}) => {




return (
    <div>
        <p>good:  {feedback.good}</p>
        <p>neutral:  {feedback.neutral}</p>
        <p>bad:  {feedback.bad}</p>
        
    </div>
)


};

export default Feedback;