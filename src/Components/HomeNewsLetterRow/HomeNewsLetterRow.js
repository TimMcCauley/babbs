import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './HomeNewsLetterRow.scss'

export default class HomeNewsLetterRow extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         value: '',
         errorMessage: '',
         success: false,
         buttonText: 'Submit'
      }
   }

   handleChange = (event) => {
      this.setState({value: event.target.value})
      this.setState({errorMessage: '', success: false})
   }

   handleSubmit = () => {
      if (!this.state.value.includes('@')) {
         this.setState({errorMessage: 'Please enter a valid email address.'})
      } else {
         this.setState({
            buttonText: 'Loading'
         })
         fetch('https://mysterious-oasis-69747.herokuapp.com/submit', {
            method: "POST",
            mode: 'cors',
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify({email: this.state.value})
         })
            .then(res => res.json())
            .then(res => {
               console.log(res);
               this.setState({
                  buttonText: 'Submit'
               })
               if (res.hasOwnProperty('success')) {
                  if (res.success === true) {
                     this.setState({
                        success: true
                     })
                  } else {
                     this.setState({
                        errorMessage: res.message
                     })
                  }
               }
            })

      }

   }

   handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         this.handleSubmit();
      }
   }

   render() {
      return (
         <div className="newsletter">
            <h2>Subscribe for updates</h2>
            <div className="news-caption">
               Enter your email to receive updates about my projects and writing.
            </div>
            <div className="field-container">
               <Input
                  align="center"
                  value={this.state.value}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
               />
               <div style={{
                     width: '10px',
                     height: '10px'
                  }}/>
               <Button
                  color="dark"
                  text={this.state.buttonText}
                  onClick={this.handleSubmit}
               />
            </div>
            {
               this.state.errorMessage.length > 0 &&
               <div className="error-message">{this.state.errorMessage}</div>
            }
            {
               this.state.success > 0 &&
               <div className="success-message">Subscription Successful!</div>
            }
         </div>
      )
   }
}
