import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions =({onLeaveFeedback}) =>(
            <div>
                <button type = "button" name="good" onClick={onLeaveFeedback}>
                    Good
                </button>
                <button type = "button" name="neutral" onClick={onLeaveFeedback}>
                    Neutral
                </button>
                <button type = "button" name="bad" onClick={onLeaveFeedback}>
                    Bad
                </button>
            </div>
)

FeedbackOptions.propTypes={
    onLeaveFeedback:PropTypes.func.isRequired,
    
}
    export default FeedbackOptions;