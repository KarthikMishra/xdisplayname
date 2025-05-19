import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [fullName, setFullName] = useState("")

  const handleFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleLast = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName && !lastName) {
      setFullName("");
      return;
    }
    else if (!firstName) {
      setFullName(lastName);
      return;
    }
    else if (!lastName) {
      setFullName(firstName);
      return;
    }
    let res = firstName + " " + lastName;
    setFullName(res);
  };

  return (
    <>
      <div>
        <h1>Full Name Display</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p>First Name:</p>
            <input type="text" value={firstName} onChange={(e) => handleFirst(e)} />
          </div>
          <div>
            <p>Last Name:</p>
            <input type="text" value={lastName} onChange={(e) => handleLast(e)} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {fullName && <div>Full Name: {fullName}</div>}
      </div> 
    </>
  )
}

export default App
