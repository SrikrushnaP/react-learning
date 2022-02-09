import React from 'react';
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
  return (<>
    <div className='feedback-stats'>
        <h4>{feedback.length} Review</h4>
        <h4>Average Rating: {5}</h4>
    </div>
  </>);
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;
