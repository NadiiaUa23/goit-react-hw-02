import { useState, useEffect} from "react"
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import './App.module.css'

const App = () => {
 const [feedback, setFeedback] = 
  useState ( () => {
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

  return (
    <>
  <h1>Sip Happens Café
  </h1>
  <p>Please leave your feedback about our service by selecting one of the options below.
  </p>

<Options feedback={feedback} 
setFeedback={setFeedback}/>
<Feedback feedback={feedback}/>


    </>
  );
};

export default App
