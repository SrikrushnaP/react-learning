import { useState } from 'react';
import './App.css';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = new Date().getTime()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (<>
    <Header />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback} />
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
  </>);
}

export default App;
