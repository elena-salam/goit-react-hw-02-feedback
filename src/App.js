import React, {Component} from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Feedback-Notification';

export default class App extends Component{

    static defaultProps = {step:1};  
        state = {good: 0, neutral: 0, bad: 0}

    handleAddFeedback = event =>{
        const feedbackName=event.target.name;
        this.setState((prevState, props)=>({
            [feedbackName]: prevState[feedbackName] +props.step,
        }))
    }
    

    countTotalFeedback = ()=>{
        const values = Object.values(this.state);
        const totalValue = values.reduce((acc, item)=> acc+item, 0);
        return totalValue;
    }
    
    countPositiveFeedbackPercentage = total =>{
        const goodVoices = this.state.good;
        const totalVoices = total;
        let percentageValue = 0;
        if(goodVoices || totalVoices !==0){
            percentageValue = Math.round(goodVoices*100/totalVoices);
        }
        return percentageValue;
    }
    render(){
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const percentage = this.countPositiveFeedbackPercentage(total);
        return(
            <>
                <Section title = "Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={this.handleAddFeedback}/>
                </Section>
                <Section title = "statistics">
                    {total===0?(
                    <Notification message = "No feedback given"/>
                    ) : (
                        <Statistics
                        good = {good}
                        neutral = {neutral}
                        bad = {bad}
                        total = {total}
                        positivePercentage = {percentage}
                        />
                        )}
                </Section>
            </>    
        );
    }
}