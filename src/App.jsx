import { useState, useEffect} from "react"
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Description from './components/Description/Description'
import  style from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState ( () => {
    const seveFeedback = localStorage.getItem('feedback');
    return seveFeedback ? JSON.parse(seveFeedback) : {
	good: 0,
	neutral: 0,
	bad: 0
};
  });
    
useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
}, [feedback]);

const updateFeedback = (feedbackType) => {
  setFeedback(prevFeedback => ({
    ...prevFeedback,
    [feedbackType]: prevFeedback[feedbackType] + 1
  }));
};

const resetFeedback = () => {
  setFeedback({ good: 0, neutral: 0, bad: 0 });
};

const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div className={style.App}>
<Description />
<Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
<Feedback feedback={feedback}/>
    </div>
  );
};

export default App
