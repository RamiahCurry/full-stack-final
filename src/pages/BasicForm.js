import React, { createRef }  from 'react';
import axios from 'axios';

class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.passwordRef = createRef();
    this.phoneRef = createRef();
  }

  state = {
    emails: [],
    passwords: [],
    numbers: [],
    emailError: '',
    passwordError: '',
    phoneError: ''
  };

  handlePasswordChange = (evt) => {
    const password = evt.target.value.trim();
    this.setState({ passwordError: '' });
  };
  
  handleEmailChange = (evt) => {
    const email = evt.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.setState({ 
      emailError: emailRegex.test(email) ? '' : 'Please enter valid email' 
    });
  };

  handlePhoneChange = (evt) => {
    const phone = evt.target.value.trim();
    const phoneRegex = /^\d{10}$/;
    this.setState({ 
      phoneError: phoneRegex.test(phone) ? '' : 'Please enter valid phone number' 
    });
  };

  onFormSubmit = async(evt) => {
    evt.preventDefault();

    const email = this.emailRef.current.value.trim();
    const password = this.passwordRef.current.value.trim();
    const number = this.phoneRef.current.value.trim();

    // Validation
    if (!password || !email || !number) {
      alert('Please fill out all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    const emails = [...this.state.emails, email];
    const passwords = [...this.state.passwords, password];
    const numbers = [...this.state.numbers, number];

    this.setState({
      emails: emails,
      passwords: passwords,
      numbers: numbers,
      emailError: '',
      passwordError: '',
      phoneError: ''
    });

    try {
      const response = await axios.post('http://localhost:3001/product', {
        email,
        password,
        phoneNumber: number
      });
      
      console.log(response.data); // Optionally handle response data
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }

    // Clear input fields after submission
    this.emailRef.current.value = '';
    this.passwordRef.current.value = '';
    this.phoneRef.current.value = '';
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Email'
            ref={this.emailRef}
            onChange={this.handleEmailChange}
          />
          <span>{this.state.emailError}</span>

          <input
            placeholder='Password'
            type='password'
            ref={this.passwordRef}
            onChange={this.handlePasswordChange}
          />
          <span>{this.state.passwordError}</span>

          <input
            placeholder='Phone Number'
            ref={this.phoneRef}
            onChange={this.handlePhoneChange}
          />
          <span>{this.state.phoneError}</span>

          <input type='submit' />
        </form>

        <div>
          <h3>Entries</h3>
          <ul>
            {this.state.emails.map((email, i) => (
              <li key={i}>
                Email: {email} |
                Password: {this.state.passwords[i]} |
                Phone: {this.state.numbers[i]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BasicForm;
