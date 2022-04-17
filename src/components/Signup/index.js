export default function Signup(props) {
  const { handleSignupCancel, setShowLogin, setShowSignup } = props.handlers;
  const formValues = [];
  const fields = [
    "Student ID Number",
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
      formValues.push(`👉🏼${fields[FIELD]}: ${event.target[FIELD].value}`);
    }

    handleSignupSubmit();
  }

  return (
    <div className="form">
      <label className="portal">STUDENT SIGNUP</label>
      <form onSubmit={handleSubmit}>
        {studentDetails}
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            name="uname"
            required
          />
        </div>
        <div className="input-container">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm Password"
            name="uname"
            required
          />
        </div>

        <div className="button-container">
          <button type="button" onClick={handleSignupCancel}>
            Cancel
          </button>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
