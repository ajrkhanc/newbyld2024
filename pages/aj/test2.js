import { useState } from 'react'

function Form() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    // Check for empty fields
    if (!name.trim() || !email.trim() || !gender.trim()) {
      alert('Please fill in all fields')
      return
    }

    // Submit data here...
  }

  const handleNext = event => {
    event.preventDefault()
    setStep(step + 1)
  }

  const handlePrev = event => {
    event.preventDefault()
    setStep(step - 1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
          <h2>Step 2</h2>
          <label>
            Gender:
            <br />
            <label>
              <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
              Male
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
              Female
            </label>
            <br />
            <label>
              <input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={e => setGender(e.target.value)} />
              Other
            </label>
          </label>
          <br />
          <button onClick={handleNext}>Prev</button>
          <button type="submit">Submit</button>
        </div>
          
        )}
        {step === 2 && (
          <div>
          <h2>Step 1</h2>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <br />
          <button onClick={handlePrev}>Next</button>
        </div>
        )}
      </form>
    </div>
  )
}

export default Form