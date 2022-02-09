import { useState } from 'react';
import './App.css';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';

import FeedbackData from './data/FeedbackData';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData);

  return (<>
    <Header />
    <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback}/>
    </div>
  </>);
}

export default App;
