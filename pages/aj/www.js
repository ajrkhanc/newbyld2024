import { useState } from "react";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [gender, setGender] = useState('')
  const [genderc, setGenderc] = useState('')

 



  const handleNextcc = (event) => {
    event.preventDefault();
    const stepFields = ['gender'];
    let isStepValid = true;
    stepFields.forEach((field) => {
      if (!formData[field]) {
        isStepValid = false;
      }
    });
    if (isStepValid) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      alert("Please fill out all required fields");
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (gender) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    }
     else if (currentStep === 1) {
      if (phone) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    }
  };

  const handleNextemail = () => {
    if (currentStep === 1) {
      if (gender) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    } else if (currentStep === 2) {
      if (phone) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    }
  };

  const handleNextpass = () => {
    if (currentStep === 1) {
      if (gender) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    } else if (currentStep === 2) {
      if (phone) {
        setCurrentStep(currentStep + 1);
      } else {
        alert('Please fill out all fields');
      }
    }
  };



  const handlePrevious = (event) => {
    event.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Do something with form data
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Multi-step Form</h2>
      {currentStep === 1 && (
        <>
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
          <button onClick={handleNext}>Next</button>
        </>
      )}
      {currentStep === 2 && (
        <>
         <label>
            Gender:
            <br />
            <label>
              <input type="radio" name="genderc" value="male" checked={genderc === 'male'} onChange={e => setGenderc(e.target.value)} />
              aj
            </label>
            <br />
            <label>
              <input type="radio" name="genderc" value="female" checked={genderc === 'female'} onChange={e => setGenderc(e.target.value)} />
              rj
            </label>
            <br />
            <label>
              <input type="radio" name="genderc" value="other" checked={genderc === 'other'} onChange={e => setGenderc(e.target.value)} />
              kh
            </label>
          </label>
          <br />
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNextemail}>Next</button>
        </>
      )}
      {currentStep === 3 && (
        <>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password || ""}
            onChange={handleChange}
            required
          />
          <br />
          <button onClick={handlePrevious}>Previous</button>
          <button type="submit">Submit</button>
        </>
      )}
    </form>
  );
}