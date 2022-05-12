import { useState } from 'react';
import '../../App.css'

const CONTAINS_NUMBER = /\d/;
export const CONTAINS_UPPER = /[A-Z]/;
const CONTAINS_SPECIAL_CHAR = /[~`!@#$%^&*+=\-[\]\\';,/{}()_|":<>?]/;

export default function Signup(props) {
  const { handleSignupCancel, setShowLogin, setShowSignup } = props.handlers;
  const [hasTenDigits, setHasTenDigits] = useState(false);
  const [setStudentID] = useState('')
  const [hasNumeric, setHasNumeric] = useState(false);
  const [hasEightCharacters, setHasEightCharacters] = useState(false);
  const [hasSpecialCharacters, setHasSpecialCharacters] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [password, setPassword] = useState('')
  const [passwordMatch, setPasswordMatch] = useState(true)

  const formValues = [];
  const fields = [
    "Last Name",
    "Given Name",
    "Middle Name",
    "College",
    "Program Enrolled",
    "Year Level",
  ];
  const studentDetails = fields.map((fieldName, key) => (
    <div className="input-container" key={key}>
      <input
        className="input-field"
        type="text"
        placeholder={fieldName}
        name="uname"
        required
      />
    </div>
  ));

  function handleSignupSubmit() {
    alert(`Details are being saved:\n${formValues.join("\n")}`);
    setShowLogin(true);
    setShowSignup(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const FIELD_COUNT = event.target.length - 4;

    for (let FIELD = 0; FIELD < FIELD_COUNT; FIELD++) {
      formValues.push(`👉🏼 ${event.target[FIELD].value}`);
    }

    handleSignupSubmit();
  }

  function handleValidateStudentID(event){
    const { value } = event.target;
    setHasTenDigits(value.length === 10);
    
  }
  function handleValidatePassword(event) {
    const { value } = event.target;

    setHasEightCharacters(value.length >= 8);
    setHasSpecialCharacters(CONTAINS_SPECIAL_CHAR.test(value));
    setHasUpper(CONTAINS_UPPER.test(value));
    setHasNumeric(CONTAINS_NUMBER.test(value));
    setPasswordMatch(value === password);
  }
  const studentIdRequirements=(
    <>
      <p>{hasTenDigits ? '✅' : '❌'} must be 10 digits</p>
    </>
  )
  const passwordRequirements = (
    <>
      <p>{hasEightCharacters ? '✅' : '❌'} at least 8 characters</p>
      <p>{hasSpecialCharacters ? '✅' : '❌'} at least 1 special character</p>
      <p>{hasUpper ? '✅' : '❌'} at least 1 uppercase letter</p>
      <p>{hasNumeric ? '✅' : '❌'} at least 1 number</p>
    </>
  );
  const passwordMatchWarn = passwordMatch ? '' : <p>❌ password does not match</p>; 
  
  function handleStudentIDInput(event) {
    setStudentID(event.target.value);
  }
  function handlePasswordInput(event) {
    setPassword(event.target.value);
  }
  function validatePassword(event) {
    const value = event.target.value;

    setPasswordMatch(value === password);
  }

  return (
    <div className="form">
      <label className="portal">STUDENT SIGNUP</label>
      <form onSubmit={handleSubmit}>
      <div className="input-container">
          <input
            className="input-field"
            type="text"
            placeholder="Student ID Number"
            name="uname"
            required
            onKeyUp={handleValidateStudentID}
            onChange={handleStudentIDInput}
          />
      </div>
        <div className="inputRequirementDiv">
          {studentIdRequirements}
        </div>
        {studentDetails}
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            name="uname"
            required
            onKeyUp={handleValidatePassword}
            onChange={handlePasswordInput}
          />
        
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            name="uname"
            required
            onKeyUp={validatePassword}
          />
        </div>
        <div className="inputRequirementDiv">
          {passwordMatchWarn}
          {passwordRequirements}
        </div>
        <div className="button-container">
          <button type="button" onClick={handleSignupCancel}>
            Cancel
          </button>
          <button
            type="submit"
            disabled={(
            
              !passwordMatch
              || !password
              || !hasNumeric
              || !hasEightCharacters
              || !hasSpecialCharacters
              || !hasUpper
              || !hasTenDigits
            )??'disabled'}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
