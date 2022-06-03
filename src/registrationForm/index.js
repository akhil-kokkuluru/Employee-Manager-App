import './index.css'
import {Component} from 'react'
import validator from 'validator'

const idVal = 12

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    Email: '',
    phNum: '',
    Gender: '',
    idValue: idVal,
    firstNameRequired: false,
    lastNameRequired: false,
    emailRequired: false,
    phoneNumberRequired: false,
    firstNameBorder: 'inputEl',
    lastnameBorder: 'inputEl',
    emailBorder: 'inputEl',
    phoneNumBorder: 'inputEl',
    isSubmitted: false,
  }

  onFirstnameTyping = event => {
    this.setState({firstName: event.target.value})
  }

  onEmailTyping = event => {
    this.setState({Email: event.target.value})
  }

  onPhnumTyping = event => {
    this.setState({phNum: event.target.value})
  }

  onLastnameTyping = event => {
    this.setState({lastName: event.target.value})
  }

  onblurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '' || firstName.length < 6) {
      this.setState({firstNameRequired: true, firstNameBorder: 'inputEl2'})
      console.log('blurred')
    } else {
      this.setState({firstNameRequired: false, firstNameBorder: 'inputEl'})
    }
  }

  onblurLastName = () => {
    const {lastName} = this.state
    if (lastName === '' || lastName.length < 6) {
      this.setState({lastNameRequired: true, lastnameBorder: 'inputEl2'})
      console.log('blurred2')
    } else {
      this.setState({lastNameRequired: false, lastnameBorder: 'inputEl'})
    }
  }

  onblurEmail = () => {
    const {Email} = this.state
    if (validator.isEmail(Email)) {
      this.setState({emailRequired: false, emailBorder: 'inputEl'})
    } else {
      this.setState({emailRequired: true, emailBorder: 'inputEl2'})
    }
  }

  onPhNumblur = () => {
    const {phNum} = this.state
    if (phNum.length !== 10 || phNum.isNaN === false) {
      this.setState({phoneNumberRequired: true, phoneNumBorder: 'inputEl2'})
    } else {
      this.setState({phoneNumberRequired: false, phoneNumBorder: 'inputEl'})
    }
  }

  onclickingGender = event => {
    this.setState({Gender: event.target.value})
  }

  totalPageRender = () => {
    const {
      firstName,
      lastName,
      lastNameRequired,
      firstNameRequired,
      firstNameBorder,
      lastnameBorder,
      Email,
      phNum,
      phoneNumBorder,
      emailBorder,
      emailRequired,
      phoneNumberRequired,
    } = this.state
    return (
      <>
        <label className="labelText" htmlFor="firstNameInput">
          FIRST NAME
        </label>
        <input
          className={`${firstNameBorder}`}
          type="text"
          placeholder="First Name"
          onChange={this.onFirstnameTyping}
          value={firstName}
          onBlur={this.onblurFirstName}
          id="firstNameInput"
          maxLength="10"
        />
        {firstNameRequired && (
          <p className="reqText">Minimum 6 characters Required</p>
        )}
        <label className="labelTextL" htmlFor="lastNameInput">
          LAST NAME
        </label>
        <input
          className={`${lastnameBorder}`}
          type="text"
          placeholder="Last Name"
          onChange={this.onLastnameTyping}
          value={lastName}
          onBlur={this.onblurLastName}
          id="lastNameInput"
          maxLength="10"
        />
        {lastNameRequired && (
          <p className="reqText">Minimum 6 characters Required</p>
        )}
        <label className="labelTextL" htmlFor="EmailInput">
          Email Address
        </label>
        <input
          className={`${emailBorder}`}
          type="email"
          placeholder="Last Name"
          onChange={this.onEmailTyping}
          value={Email}
          onBlur={this.onblurEmail}
          id="EmailInput"
        />
        {emailRequired && <p className="reqText">valid EmailID Required</p>}
        <label className="labelTextL" htmlFor="PHInput">
          Phone Number
        </label>
        <input
          className={`${phoneNumBorder}`}
          type="text"
          placeholder="Last Name"
          onChange={this.onPhnumTyping}
          value={phNum}
          onBlur={this.onPhNumblur}
          id="PHInput"
        />
        {phoneNumberRequired && <p className="reqText">Invalid Phone Number</p>}
        <input
          type="radio"
          onClick={this.onclickingGender}
          name="gender"
          value="male"
        />{' '}
        Male{' '}
        <input
          type="radio"
          onClick={this.onclickingGender}
          name="gender"
          value="female"
        />{' '}
        Female
      </>
    )
  }

  successRender = () => (
    <div className="successContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="imgSize"
      />
      <p>Submitted Successfully</p>
    </div>
  )

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitClick = event => {
    event.preventDefault()
    const {firstName, lastName, Email, phNum, Gender, idValue} = this.state
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      event.preventDefault()
      this.setState(prevValue => ({idValue: prevValue.idValue + 1}))
      const newInfo = {
        first_name: firstName,
        last_name: lastName,
        email: Email,
        number: phNum,
        gender: Gender,
        id: idValue,
      }
      this.setState(prevVal => ({
        isSubmitted: !prevVal.isSubmitted,
        firstName: '',
        lastName: '',
        Email: '',
        phNum: '',
        firstNameBorder: 'inputEl',
        lastnameBorder: 'inputEl',
        emailBorder: 'inputEl',
        phoneNumBorder: 'inputEl',
      }))
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        firstNameRequired: !this.validateFirstName(),
        lastNameRequired: !this.validateLastName(),
        Email: '',
        phNum: '',
        firstNameBorder: 'inputEl2',
        lastnameBorder: 'inputEl2',
        emailBorder: 'inputEl2',
        phoneNumBorder: 'inputEl2',

        isSubmitted: false,
      })
    }
  }

  render() {
    let buttonText
    const {isSubmitted} = this.state
    if (isSubmitted === true) {
      buttonText = 'Submit Another Response'
    } else {
      buttonText = 'Submit'
    }

    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <h1 className="heading">Registration</h1>
          <div className="inputsContainer">
            <form className="formContainer">
              {isSubmitted ? this.successRender() : this.totalPageRender()}
              <button
                className="submitButton"
                type="submit"
                onClick={this.onSubmitClick}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
