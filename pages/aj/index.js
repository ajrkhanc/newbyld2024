import { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const [radioValues, setRadioValues] = useState({});

  const options = [
    { step: 0, value: 'option1', label: 'Option 1' },
    { step: 0, value: 'option2', label: 'Option 2' },
    { step: 1, value: 'option3', label: 'Option 3' },
    { step: 1, value: 'option4', label: 'Option 4' },
    { step: 2, value: 'option5', label: 'Option 5' },
    { step: 2, value: 'option6', label: 'Option 6' },
  ];

  const handleRadioChange = (event) => {
    setRadioValues({ ...radioValues, [event.target.name]: event.target.value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(radioValues);
  };

  const currentOptions = options.filter((option) => option.step === step);

  return (
    <form onSubmit={handleSubmit}>
      {currentOptions.map((option) => (
        <div key={option.value}>
          <label>
            <input
              type="radio"
              name={`step${step}`}
              value={option.value}
              checked={radioValues[`step${step}`] === option.value}
              onChange={handleRadioChange}
            />
            {option.label}
          </label>
        </div>
      ))}
      {step > 0 && <button type="button" onClick={handlePrevStep}>Previous</button>}
      {step < 2 ? <button type="button" onClick={handleNextStep}>Next</button> : <button type="submit">Submit</button>}
    </form>
  );
};

export default MultiStepForm;