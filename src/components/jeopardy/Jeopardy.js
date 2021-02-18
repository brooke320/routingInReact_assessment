import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0
    }
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

  updateScore = (event) => {
      event.preventDefault();
      let dataAnswer = this.state.data.answer.toLowerCase();
      let userAnswer = this.state.answer.toLowerCase();

      if (dataAnswer === userAnswer) {
          this.setState((state, props) => ({
              score: state.score + state.data.value,
              answer: "",
          }));
        } else {
            this.setState((state, props) => ({
                score: state.score - state.data.value,
                answer: "",
           }));     
        }

        this.getNewQuestion();
    };

    handleChange = (event) => {
        this.setState({answer: event.target.value});
    };


  //display the results on the screen
  render() {
      let categoryTitle = "Loading";
      if (this.state.data.category) {
        categoryTitle = this.state.data.category.title;
      }
        
    return (
      <div>
          <h3>Question: {this.state.data.question}</h3>
          <h3>Value: {this.state.data.value}</h3>
          <h3>Category: {categoryTitle}</h3>
            <form onSubmit={this.updateScore}>
             <label>Enter Answer</label>
             <input
              type="text"
              name=""
              onChange={this.handleChange}
              value={this.state.answer}
             />
             <button>Submit</button>
            </form>
          <h3>Score: {this.state.score}</h3>
        </div>
    );
  }
}
export default Jeopardy;